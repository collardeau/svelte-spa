export const tournament = {
  name: "Tournament Name",
  year: 2020,

  quarters: [
    {
      p1: "nadal",
      p2: "thiem",
      sets: [
        { p1: 6, p2: 7 },
        { p1: 6, p2: 4 },
        { p1: 6, p2: 7 },
        { p1: 6, p2: 7 }
      ],
      win: "p2"
    },
    {
      p1: "wawrinka",
      p2: "zverev",
      sets: [
        { p1: 6, p2: 1 },
        { p1: 3, p2: 6 },
        { p1: 4, p2: 6 },
        { p1: 2, p2: 6 }
      ],
      win: "p2"
    },
    {
      p1: "sandgren",
      p2: "federer",
      sets: [
        [3, 6],
        [6, 2],
        [6, 2],
        [6, 7],
        [3, 6]
      ],
      sets: [
        { p1: 3, p2: 6 },
        { p1: 6, p2: 2 },
        { p1: 6, p2: 2 },
        { p1: 6, p2: 7 },
        { p1: 3, p2: 6 }
      ],
      win: "p2"
    },
    {
      p1: "raonic",
      p2: "djokovic",
      sets: [
        { p1: 4, p2: 6 },
        { p1: 3, p2: 6 },
        { p1: 6, p2: 7 }
      ],
      win: "p2"
    }
  ],
  semis: [
    {
      p1: "thiem",
      p2: "zverev",
      sets: [
        { p1: 3, p2: 6 },
        { p1: 6, p2: 4 },
        { p1: 7, p2: 6 },
        { p1: 7, p2: 6 }
      ],
      win: "p1"
    },
    {
      p1: "federer",
      p2: "djokovic",
      sets: [
        { p1: 6, p2: 7 },
        { p1: 4, p2: 6 },
        { p1: 3, p2: 6 }
      ],
      win: "p1"
    }
  ],
  final: {
    p1: "thiem",
    p2: "djokovic",
    sets: [
      { p1: 4, p2: 6 },
      { p1: 6, p2: 4 },
      { p1: 6, p2: 2 },
      { p1: 3, p2: 6 },
      { p1: 4, p2: 6 }
    ],
    win: "p2"
  }
};
