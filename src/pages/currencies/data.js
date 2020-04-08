const days = {
  "2020-02-28": {
    gold: 1566.7,
    rates: {
      aud: 0.651,
      eur: 1.126,
      gbd: 1.2821
    }
  },
  "2020-04-07": {
    gold: 1683.7,
    rates: {
      aud: 0.6169,
      eur: 1.0891,
      gbd: 1.2339
    }
  }
};

const list = Object.keys(days).map(key => ({ ...days[key], date: key })); // sort
const range = [list[0], list[list.length - 1]];

function derivePriceInGold(range) {
  return range.map(({ gold, rates, date }) => {
    return {
      date,
      aud: gold / rates.aud,
      eur: gold / rates.eur,
      gbd: gold / rates.gbd,
      usd: gold
    };
  });
}

const goldPrices = derivePriceInGold(range);

const deriveDelta = (s, e) => {
  const diff = e - s;
  const perc = (diff / s) * 100;
  return -perc.toFixed(2);
};

const deriveDeltas = ([start, end]) => {
  return {
    usd: deriveDelta(start.usd, end.usd),
    eur: deriveDelta(start.eur, end.eur),
    gbd: deriveDelta(start.gbd, end.gbd),
    aud: deriveDelta(start.aud, end.aud)
  };
};

const deltas = deriveDeltas(goldPrices);

export const currencies = Object.keys(deltas).map(currency => {
  return { name: currency, change: deltas[currency] };
});
