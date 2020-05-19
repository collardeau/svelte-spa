export const books = [
  {
    title: "The Road to Serfdom",
    author: "Friedrich Hayek",
    date: 1944,
    wiki: "https://en.wikipedia.org/wiki/The_Road_to_Serfdom",
    slug: "the-road-to-serfdom",
  },
  {
    title: "Long Walk to Freedom",
    author: "Nelson Mandela",
    date: 1995,
    wiki: "https://en.wikipedia.org/wiki/Long_Walk_to_Freedom",
    slug: "long-walk-to-freedom",
  },
  {
    title: "Economics in One Lesson",
    author: "Henry Hazlitt",
    date: 1946,
    wiki: "https://en.wikipedia.org/wiki/Economics_in_One_Lesson",
    slug: "economics-in-one-lesson",
  },
  // {
  //   title: "On Freedom",
  //   author: "John Stuart Mill",
  //   date: 1859,
  //   wiki: "https://en.wikipedia.org/wiki/On_Liberty",
  //   slug: "on-freedom",
  // },
  {
    title: "The Gulag Archipelago",
    author: "Aleksandr Solzhenitsyn",
    date: 1973,
    wiki: "https://en.wikipedia.org/wiki/The_Gulag_Archipelago",
    slug: "the-gulag-archipelago",
  },
  // {
  //   title: "The Prince",
  //   author: "Niccolò Machiavelli",
  //   date: 1532,
  //   wiki: "https://en.wikipedia.org/wiki/The_Prince",
  //   slug: "the-prince",
  // },
];

export const bookDetails = {
  ["the-road-to-serfdom"]: {
    title: "The Road to Serfdom",
    author: "Friedrich Hayek",
    date: 1944,
    chapters: [
      { name: "Introduction", title: "" },
      { name: "The Abandoned Road", title: "Chapter 1" },
      { name: "The Great Utopia", title: "Chapter 2" },
      { name: "Individualism and Collectivism", title: "Chapter 3" },
      { name: `The "Inevitability" of Planning`, title: "Chapter 4" },
      { name: "Planning and Democracy", title: "Chapter 5" },
      { name: "Planning and the Rule of Law", title: "Chapter 6" },
      { name: "Economic Control and Totalitarianism", title: "Chapter 7" },
      { name: "Who, Whom?", title: "Chapter 8" },
      { name: "Security and Freedom", title: "Chapter 9" },
      { name: "Why The Worst Get on Top", title: "Chapter 10" },
      { name: "The End of Truth", title: "Chapter 11" },
      { name: "The Socialist Roots of Nazism", title: "Chapter 12" },
      { name: "The Totalitarians in our Midst", title: "Chapter 13" },
      { name: "Material Conditions and Ideal Ends", title: "Chapter 14" },
      { name: "The Prospects of International Order", title: "Chapter 15" },
    ],
    quotes: [
      {
        txt:
          "Few are ready to recognise that the rise of Fascism and Nazism was not a reaction against the socialist trends of the preceding period, but a necessary outcome of those tendencies.",
        chapter: 0,
        p: 4,
      },
      {
        txt:
          "[M]any who think themselves infinitely superior to the aberrations of Nazism and sincerely hate all its manifestations, work at the same time for ideals whose realisation would lead straight to the abhorred tyranny",
        chapter: 0,
        p: 4,
      },
      {
        txt:
          "It seems almost as if we did not want to understand the development which has produced totalitarianism because such an understanding might destroy some of the dearest illusions to which we are determined to cling.",
        chapter: 0,
        p: 7,
      },
      {
        txt:
          "it would be a mistake to believe that the specific German rather than the socialist element produced totalitarianism.",
        chapter: 0,
        p: 9,
      },
      {
        txt:
          "When the course of civilisation takes an unexpected turn, when instead of the continuous progress which we have come to expect, we find ourselves threatened by evils associated by us with past ages of barbarism, we blame naturally anything but ourselves.",
        chapter: 1,
        p: 10,
      },
      {
        txt:
          "[T]he pursuit of some our most cherished ideals have apparently produced results utterly different from those which we expected.",
        chapter: 1,
        p: 11,
      },
      {
        txt:
          "We have progressively abandoned that freedom in economic affairs without which personal and political freedom has never existed in the past.",
        chapter: 1,
        p: 13,
      },
      {
        txt:
          "[B]y the beginning of the twentieth century the working man in the Western world had reached a degree of material comfort, security, and personal independence which a hundred years before had seemed scarcely possible.",
        chapter: 1,
        p: 17,
      },
      {
        txt:
          "The fundamental principle that in the ordering of our affairs we should make as much use as possible of the spontaneous forces of society, and resort as little as possible to coercion, is capable of an infinite variety of applications.",
        chapter: 1,
        p: 17,
      },
      {
        txt: `We have in effect undertaken to dispense with the forces which produced unforeseen results and to replace the impersonal and anonymous mechanism of the market by collective and "conscious" direction of all social forces to deliberately chosen goals.`,
        chapter: 1,
        p: 21,
      },
      {
        txt:
          "Only under the influence of the strong democratic currents preceding the revolution of 1848 did socialism begin to ally itself with the forces of freedom.",
        chapter: 2,
        p: 25,
      },
      {
        txt:
          "To the great apostles of political freedom that word had meant freedom from coercion, freedom from the arbitrary power of other men, release from the ties which left the individual no choice but obedience to the orders of a superior to whom he was attached. The new freedom promised, however, was to be freedom from necessity.",
        chapter: 2,
        p: 27,
      },
      {
        txt:
          "Socialism was embraced by the greater part of the intelligentsia as the apparent heir of the liberal tradition: therefore it is not surprising that to them the idea should appear inconceivable of socialism leading to the opposite of liberty.",
        chapter: 2,
        p: 26,
      },
      {
        txt: `While "progressives" in this country and elsewhere were still deluding themselves that communism and fascism represented opposite poles, more and more people began to ask themselves whether these new tyrannies were not the outcome of the same tendencies.`,
        chapter: 2,
        p: 27,
      },
      {
        txt: `That democratic socialism, the great utopia of the last few generations, is not only unachievable, but that to strive for it produces something so utterly different that few of those who now wish it would be prepared to accept the consequences, many will not believe till the connection has been laid bare in all aspects.`,
        chapter: 2,
        p: 32,
      },
      {
        txt:
          "Many peope, on the other hand, who value the ultimate ends of socialism no less than the socialists, refuse to support socialism because of the dangers to other values they see in the methods proposed by the socialists.",
        chapter: 3,
        p: 34,
      },
      {
        txt:
          "The holder of coercive power should confine himself in general to creating conditions under which the knowledge and initiative of individuals is given the best scope so that *they* can plan most successfully",
        chapter: 3,
        p: 37,
      },
      {
        txt:
          "[W]here effective competition can be created, it is a better way of guiding individual efforts than any other.",
        chapter: 3,
        p: 37,
      },
      {
        txt:
          "[T]he market should be free to sell and buy at any price at which they can find a partner to the transaction, and that anybody should be free to produce, sell, and buy anything that may be produced or sold at all.",
        chapter: 3,
        p: 38,
      },
      {
        txt:
          "To prohibit the use of certain poisonous substances, or to require special precautions in their use, to limit working hours or to require certain sanitary arrangements, is fully compatible with the preservation of competition.",
        chapter: 3,
        p: 38,
      },
      {
        txt:
          "What in effect unites the socialists of the Left and the Right is this common hostility to competition and their common desire to replace it by a directed economy.",
        chapter: 3,
        p: 42,
      },
      {
        txt:
          "Both competition and central direction becomes poor and inefficent tools if they are incomplete; they are alternative principles used to solve the same problem, and a mixture of the two means that neither will really work and that the result will be worse than if either system had been consistently relied upon.",
        chapter: 3,
        p: 43,
      },
      {
        txt:
          "It is only since the transition to protection and the general change in British economic policy accompanying it, that the growth of monopolies has proceeded at an amazing rate.",
        chapter: 4,
        p: 49,
      },
      {
        txt:
          "It is only as the factors which have to be taken into account become so numerous that it is impossible to gain a synoptic view of them, that decentralisation becomes imperative.",
        chapter: 4,
        p: 51,
      },
      {
        txt:
          "We can never predict from which of the many forms in which a good or services can be provided something better may develop.",
        chapter: 4,
        p: 54,
      },
      {
        txt:
          "But the argument for freedom is precisely that we ought to leave room for the unforeseeable free growth.",
        chapter: 4,
        p: 54,
      },
      {
        txt:
          "The hopes [experts] place in planning, however, are not the result of a comprehensive view of society, but rather of a very limited view, and often the result of a great exaggeration of the importance of the ends they place foremost.",
        chapter: 4,
        p: 57,
      },
      {
        txt:
          "From the saintly and single-minded idealist to the fanatic is often but a step.",
        chapter: 4,
        p: 57,
      },
      {
        txt:
          "The welfare and the happiness of millions cannot be measured on a single scale of less and more.",
        chapter: 5,
        p: 60,
      },
      {
        txt:
          "[I]t would be impossible for any mind to comprehend the infinite variety of different needs of different people which compete for the available resources and to attach a definite weight to each.",
        chapter: 5,
        p: 62,
      },
      {
        txt:
          "[I]t is impossible for any man to survey more than a limited field, to be aware of the urgency of more than a limited number of needs.",
        chapter: 5,
        p: 62,
      },
      {
        txt:
          "It is the recognition of the individual as the ultimate judge of his ends, the belief that as far as possible his own views ought to govern his actions, that forms the essence of the individual position.",
        chapter: 5,
        p: 63,
      },
      {
        txt:
          "Although the state controls directly the use of only a large part of the available resources, the effects of its decision on the remaining part of the economic system become so great that indirectly it control almost everything.",
        chapter: 5,
        p: 64,
      },
      {
        txt:
          "The effect of the people agreeing that there must be central planning, without agreeing on the ends, will be rather as if a group of people were to commit themselves to take a journey together without agreeing where they want to go",
        chapter: 5,
        p: 65,
      },
      {
        txt: `Parliaments come to be regarded as ineffective "talking shops", unable or incompetent to carry out the tasks for which they have been chosen.
        `,
        chapter: 5,
        p: 65,
      },
      {
        txt:
          "Hilter did not have to destroy democracy; he merely took advantage of the decay of democracy and at the critical moment obtained the support of many to whom, though they detested Hitler, he yet seemed the only man strong enough to get things done.",
        chapter: 5,
        p: 71,
      },
      {
        txt:
          "When it becomes dominated by a collectivist creed, democracy will inevitably destroy itself.",
        chapter: 5,
        p: 73,
      },
      {
        txt:
          "Democracy is essentially a means, a utilitarian device for safeguarding internal peace and individual freedom. As such it is by no means infallible or certain.",
        chapter: 5,
        p: 73,
      },
      {
        txt: `A true "dictatorship of the proletariat", even if democratic in form, if it undertook centrally to direct the economic system, would probably destroy personal freedom as completely as any autocracy has ever done.`,
        chapter: 5,
        p: 74,
      },
      {
        txt: `If the individual are to be able to use their knowledge effectively in making plans, they must be able to predict actions fo the state which may affect these plans.`,
        chapter: 6,
        p: 79,
      },
      {
        txt: `The idea that there is no limit to the powers of the legislator is in part a result of popular sovereignty and democratic governement.`,
        chapter: 6,
        p: 85,
      },
      {
        txt: `By giving the government unlimited powers the most arbitrary rule can be made legal: and in this way a democracy may set up the most complete despotism imaginable.`,
        chapter: 6,
        p: 86,
      },
      {
        txt: `Economic control is not merely control of a sector of human life which can be separated from the rest; it is the control of the means for all our ends.`,
        chapter: 7,
        p: 95,
      },
      {
        txt: `It is only because the control of the means of production is divided among many people acting indepedently that nobody has complete power over us.`,
        chapter: 8,
        p: 108,
      },
      {
        txt: `[T]he power which a multiple millionaire, who may be my neighbor and perhaps my employer, has over me is very much less than that which the smaller *fonctionnaire* possesses who wields the coercive power of the state.`,
        chapter: 8,
        p: 108,
      },
      {
        txt: `[T]he institution of private property is one of the main things that have given man that limited amount of free and equalness that Marx hoped to render infinite by abolishing this institution.`,
        chapter: 8,
        p: 109,
      },
      {
        txt: `Inequality is undoubtedly more readily borne, and affects the dignity of the person much less, if it is determined by impersonal forces, that when it is due to design.`,
        chapter: 8,
        p: 110,
      },
      {
        txt: `And all our efforts directed towards improving our position will have to aim, not at foreseeing and preparing as well as we can for the circumstances over which we have no control, but at influencing in our favor the authority which has all the power.`,
        chapter: 8,
        p: 111,
      },
      {
        txt: `In deciding the relative importance of the different ends, the planner also decides the relative importance of the different groups and persons.`,
        chapter: 8,
        p: 116,
      },
      {
        txt: `It is because successful planning requires the creation of a common view on the essential values that the restriction of our freedom with regard to material things touches so directly on our spiritual freedom.`,
        chapter: 8,
        p: 117,
      },
      {
        txt: `It is not rational conviction but the acceptance of a creed which is required to justify a particular plan.`,
        chapter: 8,
        p: 117,
      },
      {
        txt: `[I]t becomes more and more evident to everybody that his income and general position is determined by the coercive apparatus of the state, that he can maintain or improve his position only as a member of an organised group capable of influencing or controlling the state machine in his interest.`,
        chapter: 8,
        p: 119,
      },
      {
        txt: `There are bound to arise rival socialist movements that appeal to the support of those whose relative position is worsened.`,
        chapter: 8,
        p: 120,
      },
      {
        txt: `They knew that the strongest group which rallied enough supporters in favor of a new hierarchical order of society, and which frankly promised priviledges to the classes to which it appealed, was likely to obtain the support of all those who were disappointed because they had been promised equality but found that they had merely furthered the interest of a particular class.`,
        chapter: 8,
        p: 122,
      },
      {
        txt: `In any system which for the distribution of men between the different trades and occupations relies on their own choice it is necessary that the renumeration in these trades should correspond to their usefulness to the other members of socity, even if this should stand in no relation to subjective merit.`,
        chapter: 9,
        p: 126,
      },
      {
        txt: `[I]n the world as it is men are, in fact, not likely to give their best for long periods unless their own interests are directly involved.`,
        chapter: 9,
        p: 129,
      },
      {
        txt: `Every restriction on the freedom of entry into a trade reduces the security of all those outside it.`,
        chapter: 9,
        p: 132,
      },
      {
        txt: `[N]othing is more fatal than the present fashion among intellectual leaders of extolling security at the expense of freedom.`,
        chapter: 9,
        p: 137,
      },
      {
        txt: `And those who think that it is not the system which we need fear, but the danger that it might be run by bad men, might even be tempted to forestall this danger by seeing that it is established in time by good men.`,
        chapter: 10,
        p: 139,
      },
      {
        txt: `Just as the democratic statesman who sets out to plan economic life will soon be confronted with the alternative of either assuming dictatorial powers or abandoning his plans, so the totalitarian dictator would soon have to chose between disregard of ordinary morals and failure.`,
        chapter: 10,
        p: 139,
      },
      {
        txt: `It is then the man or the party who seems so strong and resolute enough to "get things done" who exercises the greatest appeal.`,
        chapter: 10,
        p: 140,
      },
      {
        txt: `[H]e will be able to obtain the support of all the docile and gullible, who have no strong convictions of their own but are prepared to accept a ready-made system of values if it is only drummed into their ears sufficiently loudly and frequently.`,
        chapter: 10,
        p: 142,
      },
      {
        txt: `It seems to be almost a law of human nature that it is easier for people to agree on a negative programme, on the hatred of an enemy, on the envy of those better off, than on any positive task.`,
        chapter: 10,
        p: 143,
      },
      {
        txt: `[T]he desire of the individual to identify himself with a group is very frequently the result of a feeling of inferiority.`,
        chapter: 10,
        p: 146,
      },
      {
        txt: `To act on behalf of a group seems to free people of many of the moral restraints which control their behavior as individuals within the group.`,
        chapter: 10,
        p: 146,
      },
      {
        txt: `There is, in a competitive society, nobody who can exercise even a fraction of the power which a socialist planning board would possess.`,
        chapter: 10,
        p: 149,
      },
      {
        txt: `[T]he readiness to do bad things becomes a path to promotion and power.`,
        chapter: 10,
        p: 155,
      },
      {
        txt: `To make a totalitarian system function efficently it is not enough that everybody should be forced to work for the same ends. It is essential that the people should come to regard them as their own ends.`,
        chapter: 11,
        p: 157,
      },
      {
        txt: `If the feeling of oppression in totalitarian countries is in general much less acute than most people in liberal countries imagine, this is because the totalitarian governments succeed to a high degree in making people think as they want them to.`,
        chapter: 11,
        p: 157,
      },
      {
        txt: `[W]herever liberty as we understand it has been destroyed, this has almost always been done in the name of some new freedom promised to the people.`,
        chapter: 11,
        p: 162,
      },
      {
        txt: `But freedom or liberty are by no means the only words whose meaning have been changed into their opposites to make them serve as instruments to totalitarian propaganda.`,
        chapter: 11,
        p: 162,
      },
      {
        txt: `[W]ords become empty shells deprived of any definite meaning, as capable of denoting one thing as its opposite and used solely for the emotional associations which still adhere to them.`,
        chapter: 11,
        p: 163,
      },
      {
        txt: `Pulic criticism or even expressions of doubt must be suppressed because they tend to weaken public support.`,
        chapter: 11,
        p: 164,
      },
      {
        txt: `Once science has to serve, not truth, but the interest of a class, a community, or a state, the sole task of argument and discussion is to vindicate and to spread still further the beliefs by which the whole life of the community is directed.`,
        chapter: 11,
        p: 167,
      },
      {
        txt: `In any society freedom of thought will probably be of direct significance only for a small minority.`,
        chapter: 11,
        p: 168,
      },
      {
        txt: `The interaction of individuals, possessing different knowledge and different views, is what constitues the life of thought.`,
        chapter: 11,
        p: 169,
      },
      {
        txt: `As was also true in Germany, most of the works which are preparing the way for a totalitarian course in this country are the product of sincere idealists and often of men of considerable intellectual distinction.`,
        chapter: 13,
        p: 190,
      },
      {
        txt: `Even if railways, road and air transport, or the suplly of gas and electricity, were all inevitably monopolies, the consumer is unquestionably in a much stronger position so long as they remain separate monopolies than when they are "co-ordinated" by a central control.`,
        chapter: 13,
        p: 203,
      },
      {
        txt: `[I]ndividual freedom cannot be reconciled with the supremacy of one single purpose to which the whole society must be entirely and permanently subordinated.`,
        chapter: 14,
        p: 211,
      },
      {
        txt: `[T]he fascination of vague but popular phrases like "full employment" may well lead to extremely short-sighted measures, and where the categorical and irresponsible "it must be done at all cost" of the single-minded idealist is likely to do the greatest harm.`,
        chapter: 14,
        p: 212,
      },
      {
        txt: `[T]he one decisive factor in the rise of the totalitarianism on the Continent, which is yet absent in this country, is is the existence of a large recently dispossessed middle class.`,
        chapter: 14,
        p: 215,
      },
      {
        txt: `If the resources of different nations are treated as exclusive properties of these nations as wholes, if international economic relations, instead of being relations between individuals, become increasingly relations between whole nations organised as trading bodies, they inevitably become the source of friction and envy between whole nations.`,
        chapter: 15,
        p: 226,
      },
      {
        txt: `The conflict between planning and freedom cannot but become more serious as the similarity of standards and values among those submitted to a unitary plan diminishes.`,
        chapter: 15,
        p: 227,
      },
      {
        txt: `Exlusive control of an essential commodity or service (as, for example, air transport) is in effect one of the most far-reaching powers which can be conferred on any authority.`,
        chapter: 15,
        p: 235,
      },
      {
        txt: `The controller of the supply of any such raw material as petrol or timber, rubber or tin, would be the master of the fate of whole industries and countries.`,
        chapter: 15,
        p: 235,
      },
      {
        txt: `We shall all be the gainers if we can create a world fit for small states to live in.`,
        chapter: 15,
        p: 242,
      },
    ],
  },
  ["the-gulag-archipelago"]: {
    title: "The Gulag Archipelago",
    author: "Aleksandr Solzhenitsyn",
    date: 1973,
    parts: [
      ["Part I", "The Prison Industry"],
      ["Part II", "Perpetual Motion"],
      ["Part III", "The Destructive-Camps"],
      ["Part IV", "The Soul and Barbed Wire"],
      ["Part V", "Katorga"],
      ["Part VI", "Exile"],
      ["Part VII", "Stalin Is No More"],
    ],
    chapters: [
      null,
      { name: "Arrest", title: "Chapter 1", part: 0 },
      {
        name: "The History of Our Sewage Disposal System",
        title: "Chapter 2",
        part: 0,
      },
      { name: "The Interrogation", title: "Chapter 3", part: 0 },
      { name: "The Bluecaps", title: "Chapter 4", part: 0 },
      { name: "First Cell, First Love", title: "Chapter 5", part: 0 },
      { name: "That Spring", title: "Chapter 6", part: 0 },
      { name: "In The Engine Room", title: "Chapter 7", part: 0 },
      { name: "The Law as a Child", title: "Chapter 8", part: 0 },
      { name: "The Law Becomes Man", title: "Chapter 9", part: 0 },
      { name: "The Law Matures", title: "Chapter 10", part: 0 },
      { name: "The Supreme Measure", title: "Chapter 11", part: 0 },
      { name: "Tyurzak", title: "Chapter 12", part: 0 },
      { name: "The Ships of the Archipelago", title: "Chapter 1", part: 1 },
      { name: "The Ports of the Archipelago", title: "Chapter 2", part: 1 },
      { name: "The Slave Caravans", title: "Chapter 3", part: 1 },
      { name: "From Island to Island", title: "Chapter 4", part: 1 },
      { name: "The Fingers of Aurora", title: "Chapter 1", part: 2 },
      {
        name: "The Archipelago Rises from the Sea",
        title: "Chapter 2",
        part: 2,
      },
      { name: "The Archipleago Metastasizes", title: "Chapter 3", part: 2 },
      { name: "The Archipleago Hardens", title: "Chapter 4", part: 2 },
      { name: "What the Archipelago Stands On", title: "Chapter 5", part: 2 },
      { name: `They've Brought the Fascists!`, title: "Chapter 6", part: 2 },
      {
        name: "The Way of Life and Customs of the Natives",
        title: "Chapter 7",
        part: 2,
      },
      { name: "Women in Camp", title: "Chapter 8", part: 2 },
      { name: "The Trusties", title: "Chapter 9", part: 2 },
      { name: "In Place of Politicals", title: "Chapter 10", part: 2 },
      { name: "The Loyalists", title: "Chapter 11", part: 2 },
      { name: "Knock, Knock, Knock ...", title: "Chapter 12", part: 2 },
      { name: "Hand Over Your Second Skin Too!", title: "Chapter 13", part: 2 },
      { name: "Changing One's Fate!", title: "Chapter 14", part: 2 },
      { name: "Punishments", title: "Chapter 15", part: 2 },
      { name: "The Socially Friendly", title: "Chapter 16", part: 2 },
      { name: "The Kids", title: "Chapter 17", part: 2 },
      { name: "The Muses in Gulag", title: "Chapter 18", part: 2 },
      { name: "The Zeks as a Nation", title: "Chapter 19", part: 2 },
      { name: "The Dogs' Service", title: "Chapter 20", part: 2 },
      { name: "Campside", title: "Chapter 21", part: 2 },
      { name: "We Are Building", title: "Chapter 22", part: 2 },
      { name: "The Ascent", title: "Chapter 1", part: 3 },
      { name: "Of Corruption?", title: "Chapter 2", part: 3 },
      { name: "Our Muzzled Freedom", title: "Chapter 3", part: 3 },
      { name: "The Doomed", title: "Chapter 1", part: 4 },
      { name: "The First Whiff of Revolution", title: "Chapter 2", part: 4 },
      { name: "Chains, Chains ...", title: "Chapter 3", part: 4 },
      { name: "Why Did We Stand For It?", title: "Chapter 4", part: 4 },
      {
        name: "Poetry Under a Tombstone, Truth Under a Stone",
        title: "Chapter 5",
        part: 4,
      },
      { name: "The Committed Escaper", title: "Chapter 6", part: 4 },
      {
        name: "The White Kitten (Georgi Tenno's Tale)",
        title: "Chapter 7",
        part: 4,
      },
      { name: "Escapes--Morale and Mechanics", title: "Chapter 8", part: 4 },
      { name: "The Kids with Tommy Guns", title: "Chapter 9", part: 4 },
      {
        name: "Behind the Wire the Ground is Burning",
        title: "Chapter 10",
        part: 4,
      },
      { name: "Tearing at the Chains", title: "Chapter 11", part: 4 },
      { name: "The Forty Days of Kengir", title: "Chapter 12", part: 4 },
      {
        name: "Exile in the First Years of Freedom",
        title: "Chapter 1",
        part: 5,
      },
      { name: "The Peasant Plague", title: "Chapter 2", part: 5 },
      { name: "The Ranks of Exile Thicken", title: "Chapter 3", part: 5 },
      { name: "Nations in Exile", title: "Chapter 4", part: 5 },
      {
        name: "End of Sentence",
        title: "Chapter 5",
        part: 5,
      },
      { name: "The Good Life in Exile", title: "Chapter 6", part: 5 },
      {
        name: "Zeks at Liberty",
        title: "Chapter 7",
        part: 5,
      },
      {
        name: "Looking Back on It All",
        title: "Chapter 1",
        part: 6,
      },
      {
        name: "Rulers Change, the Archipelago Remains",
        title: "Chapter 2",
        part: 6,
      },
      { name: "The Law Today", title: "Chapter 3", part: 6 },
    ],
    quotes: [
      // {
      //   txt:
      //     "Arrest! Need it be said that it is a breaking point in your life, a bolt of lightning which has scored a direct hit on you? That it is an unassimilable spirtual earthquake not every person can cope with, as a result of which people often slip into insanity?",
      //   chapter: 1,
      //   p: 3,
      // },
      {
        txt: `Each of us is a center of the Universe, and that Universe is shattered when they hiss at you: "You are under arrest."`,
        chapter: 1,
        p: 3,
      },
      {
        txt: "Me? What for?",
        chapter: 1,
        p: 3,
      },
      {
        txt: `During the arrest of the locomotive engineer Inoshin, a tiny coffin stood in his room containing the body of his newly dead child. The "jurists" dumped the child's body out of the coffin and searched it.`,
        chapter: 1,
        p: 5,
      },
      // {
      //   txt:
      //     "In a night arrest the State Security men have a superiority in numbers; there are many of them, armed, against one person who hasn't even finished buttoning his trousers.",
      //   chapter: 1,
      //   p: 5,
      // },
      {
        txt:
          "They'll take you right off the operating table⁠—as they took N. M. Vorobyev, a school inspector, in 1936, in the middle of an operation for stomach ulcer⁠—and drag you off to a cell, as they did him, half-alive and all bloody.",
        chapter: 1,
        p: 8,
      },
      {
        txt:
          "[P]olitical arrests were distinguished in our country precisely by the fact that people were arrested who were guilty of nothing and were therefore unprepared to put up any resistance whatsoever.",
        chapter: 1,
        p: 9,
      },
      // {
      //   txt:
      //     "By and large, the *Organs* had no profound reasons for their choices of whom to arrest and who not to arrest. They merely had over-all assignments, quotas for a specific number of arrests.",
      //   chapter: 1,
      //   p: 9,
      // },
      {
        txt: `Others are being arrested en masse, and that's a bothesome fact, but in those other cases there is always some dark area: Maybe *he* was guilty ... ?" But as for you, you are obviously innocent! You still believe that the *Organs* are humanly logical institutions: they will set things straight and let you out.`,
        chapter: 1,
        p: 10,
      },
      {
        txt:
          "[R]esistance should have begun right there, at the moment of the arrest itself.",
        chapter: 1,
        p: 11,
      },
      // {
      //   txt:
      //     "You aren't gagged. You really can and you really out to *cry out*--to *cry out*--that you are being arrested! That villains in disguise are trapping people! That arrests are being made on the strength of false denunciations!",
      //   chapter: 1,
      //   p: 11,
      // },
      // {
      //   txt:
      //     "If many such outcries had been heard all over the city in the course of a day, would not our fellow citizens perhaps have begun to bristle?",
      //   chapter: 1,
      //   p: 11,
      // },
      {
        txt:
          "I had been arrested because of my correspondence with a school friend, and understood from what direction to expect danger.",
        chapter: 1,
        p: 15,
      },
      {
        txt:
          "[I]n 1921 the arrests of members of all non-Bolshevik parties were expanded and systematized. In fact, all Russia's political parties had been buried, except the victorious one.",
        chapter: 2,
        p: 22,
      },
      {
        txt: `The circles kept getting bigger, as they raked in ordinary believers as well, old people, and particularly women, who were the most believers of all and who, for many long years to come, would be called "nuns" in transit prisons and camps`,
        chapter: 2,
        p: 23,
      },
      {
        txt:
          "A person convinced that he possessed spiritual truth was required to conceal it from his own children!",
        chapter: 2,
        p: 23,
      },
      {
        txt:
          "The usual practice was to impose on them ever-increasing and finally intolerable taxes. At a certain point they could no longer pay; they were immediately arrested for bankruptcy, and their property was confiscated.",
        chapter: 2,
        p: 3,
      },
      {
        txt: `Like raging beasts, abandoning every concept of "humanity," abandoning all humane principles which has evolved through the millennia, the authoritties began to round up the very best farmers and their families, and to drive them, stripped of their possessions, naked, into the northern wastes, into the tundra and the taiga. `,
        chapter: 2,
        p: 26,
      },
      {
        txt:
          "Every city, every district, every military unit was assigned a specific quota of arrests to be carried out by a stipulated time.",
        chapter: 2,
        p: 29,
      },
      {
        txt:
          "A student's denunciation that a certain lecturer in a higher deducational institution kept citing Lenin and Marx frequently but Stalin not at all was all that was needed for the lecturer not to show up for lectures any more.",
        chapter: 2,
        p: 29,
      },
      // {
      //   txt:
      //     "[I]f you are destined to confess tomorrow that you organized an underground group to poison the city's water supply, and if today I shake hands with you on the street, that means I, too, am doomed.",
      //   chapter: 2,
      //   p: 29,
      // },
      {
        txt:
          "[S]imple failure to report the theft of state or collective farm property earned three years of camp or seven years of exile.",
        chapter: 2,
        p: 36,
      },
      {
        txt:
          "What about the *children* of his sworn enemies? They, too, must be imprisoned! They were growing up, and they might have notions of vengeance.",
        chapter: 2,
        p: 36,
      },
      {
        txt:
          "The time allotted for investigation was not used to unravel the crime but, in ninety-five cases out of a hundred, to exhaust, wear down, weaken, and render helpless the defendant, so that he would want it to end at any cost.",
        chapter: 3,
        p: 40,
      },
      {
        txt:
          "Once it was established that charges had to be brought at any cost and despite everything, threats, violence, tortures became inevitable.",
        chapter: 3,
        p: 41,
      },
      {
        txt:
          "[I]nterrogators were allowed to use violence and torture on an unlimited basis, at their own discretion, and in accordance with the demands of their work quotas and the amount of time they were given.",
        chapter: 3,
        p: 42,
      },
      {
        txt: "[T]he calculated torture of millions was being undertaken.",
        chapter: 3,
        p: 44,
      },
      // {
      //   txt:
      //     "[P]risoners awaiting interrogation were made to lie face down for several hours in the main corridor and forbidden to raise their heads or make a sound.",
      //   chapter: 3,
      //   p: 46,
      // },
      {
        txt:
          "Yelena Strutinskaya was forced to remain seated on a stool in the corridor for six days in such a way that she did not lean against anything, did not sleep, did not fall off, and did not get up from it. Six days! Just try to sit that way for six hours!",
        chapter: 3,
        p: 50,
      },
      {
        txt:
          "Sometimes even one day of standing is enough to deprive a person of all his strength and to force him to *testify* to *anyting at all*.",
        chapter: 3,
        p: 51,
      },
      {
        txt:
          "[T]he starvation technique, like interrogation at night, was an integral element in the entire system of coercion.",
        chapter: 3,
        p: 53,
      },
      {
        txt:
          "How ancient it all is, how medieval, how primitive! The only thing new about it was that it was applied in a socialist society!",
        chapter: 3,
        p: 54,
      },
      // {
      //   txt: `The Lefortovo Colonel Sidorov, in the postwar period, used to take a "penalty kick" with his overshoes at the dangling genitals of male prisoners.`,
      //   chapter: 3,
      //   p: 55,
      // },
      {
        txt:
          "The jailers pushed so many prisoners into the cell that not eveyone one had even a piece of floor",
        chapter: 3,
        p: 59,
      },
      {
        txt:
          "[T]hey might scrape the skin off a man's back with a grater till it bled and then oil it with turpentine.",
        chapter: 3,
        p: 60,
      },
      {
        txt:
          "[T]he majority of those in power, up to the very moment of their own arrest, were pitiless in arresting others",
        chapter: 3,
        p: 63,
      },
      {
        txt:
          "From today on, my body is useless and alien to me. Only my spirit and my conscience remain precious and important to me.",
        chapter: 3,
        p: 64,
      },
      {
        txt:
          "They understood that the cases were fabricated, yet they kept on working year after year. How could they?",
        chapter: 4,
        p: 67,
      },
      {
        txt:
          "Stalin could never be convinced that in any district, or city, or military unit, he might suddenly cease to have enemies.",
        chapter: 4,
        p: 68,
      },
      {
        txt: "Power is a poison well known for thousands of years.",
        chapter: 4,
        p: 69,
      },
      {
        txt:
          "From the moment you don that heavenly blue service cap, you stand higher than the publicly acknowledged power.",
        chapter: 4,
        p: 69,
      },
      {
        txt:
          "And if your opponent is so strong that he refuses to give in, all your methods have failed, and you are in a rage? Then don't control you fury! It's tremendously satisfying, that outburst!",
        chapter: 4,
        p: 70,
      },
      {
        txt:
          "Where did this wolf-tribe appear from among our people? Does it really stem from our own roots? Our own blood?",
        chapter: 4,
        p: 73,
      },
      {
        txt:
          "[I]f, by the time war broke out, I had already been wearing an NKVD officer's insignia on my blue tabs, what would I have become?",
        chapter: 4,
        p: 74,
      },
      {
        txt:
          "[T]he line dividing good and evil cuts through the heart of every human being. And who is willing to destroy a piece of his own heart?",
        chapter: 4,
        p: 75,
      },
      {
        txt: "From good to evil is one quaver, says the proverb.",
        chapter: 4,
        p: 75,
      },
      {
        txt:
          "To do evil a human being must first of all believe that what he's doing is good, or else that it's a well-considered act in conformity with natural law. Fortunately, it is in the nature of the human being to seek a *justication* for his actions.",
        chapter: 4,
        p: 77,
      },
      {
        txt:
          "Ideology--that is what gives evildoing its long-sought justification and gives the evildoer the necessary steadfastness and determination.",
        chapter: 4,
        p: 77,
      },
      {
        txt:
          "[J]ust so long as the threshold of evildoing is not crossed, the possibility of returning remains, and he himself is still within reach of our hope. But when, through the density of evil actions, the result either of their own extreme degree or of the absoluteness of his power, he suddenly crosses that threshold, he has left humanity behind, and without, perhaps, the possibility of return.",
        chapter: 4,
        p: 78,
      },
      {
        txt:
          "[I]n a quarter-century we have not tracked down anyone. We have not brought anyone to trial.",
        chapter: 4,
        p: 79,
      },
      {
        txt:
          "Here is a riddle not for us contemporaries to figure out: *Why* is Germany allowed to punish its evildoers and Russia is not?",
        chapter: 4,
        p: 79,
      },
      {
        txt:
          "First we submissively allowed them to massacre us by the millions, and then with devoted concern we tended the murderers in their prosperous old age.",
        chapter: 4,
        p: 80,
      },
      {
        txt:
          "[F]or the sake of our country and our children we have the duty to *seek them all out and bring them all to trial!*",
        chapter: 4,
        p: 80,
      },
      {
        txt:
          "We have to condemn publicly the very *idea* that some people have the right to repress others. In keeping silent about evil, in burying it so deep within us that no sign of it appears on the surface, we are *implanting* it, and it will rise up a thousandfold in the future.",
        chapter: 4,
        p: 81,
      },
      {
        txt:
          "You sit down and half-close your eyes and try to remember them all. How many different cells you were imprisoned in during your term!",
        chapter: 5,
        p: 82,
      },
      {
        txt: `Now for the first time you were about to see people who were not your enemies. Now for the first time you were about to see others who were alive, who were traveling your road, and whom you could join to yourself with the joyous word "we"`,
        chapter: 5,
        p: 86,
      },
      {
        txt:
          "A Motherland that betrays its soldiers--is that really a Motherland?",
        chapter: 5,
        p: 93,
      },
      {
        txt:
          "I felt that the story of these several million Russion prisoners had got me in its grip once and for all, like a pin through a specimen beetle. My own story of landing in prison seemed insignificant.",
        chapter: 6,
        p: 97,
      },
      {
        txt:
          "[W]as there ever so multimillioned foul a deed as this: to betray one's own soldiers and proclaim them traitors?",
        chapter: 6,
        p: 98,
      },
      {
        txt:
          "For not wanting to die from a German bullet, the prisoner had to die from a Soviet bullet for having been a prisoner of war!",
        chapter: 6,
        p: 99,
      },
      {
        txt:
          "At the downfall of the Third Reich, when it will become quite clear that the Soviet Union is increasing the pressure to extend its regime to all Europe and to the whole world, how could the West continue to support the Bolshevik dictatorship?",
        chapter: 6,
        p: 103,
      },
      {
        txt:
          "The West was fighting *only* against Hitler, and for this purpose *all* means and *all* allies were good, the Soviets above all.",
        chapter: 6,
        p: 103,
      },
      {
        txt:
          "In general, this war revealed to us that the worst thing in the world was to be a Russian.",
        chapter: 6,
        p: 105,
      },
      {
        txt:
          "In World War II the West kept defending its *own* freedom and defended it for *itself*. As for us and as for Eastern Europe, it buried us in an even more absolute and hopeless slavery.",
        chapter: 6,
        p: 106,
      },
      {
        txt:
          "The OSO did not claim to be handing a *sentence*. It did not sentence a person but, instead, *imposed an administrative penalty*",
        chapter: 7,
        p: 116,
      },
      {
        txt:
          "We forget everything. What we remember is not what actually happened, not history, but merely that hackneyed dotted line they have chosen to drive into our memories by incessant hammering.",
        chapter: 8,
        p: 120,
      },
      {
        txt:
          "Up until 1905, the death penalty was an exceptional measure in Russia.",
        chapter: 11,
        p: 130,
      },
      {
        txt: `If we are to judge by official documents, capital punishment was restored in all its force in June 1918. No it was not "restored"; instead a *new* era of executions was inaugurated.`,
        chapter: 11,
        p: 131,
      },
      {
        txt:
          "[H]unger strike is a purely moral weapon. It presupposes that the jailer has not entirely lost his conscience. Or that the jailer is afraid of public opinion.",
        chapter: 12,
        p: 137,
      },
      {
        txt:
          "Approximately in the middle of 1937, a new directive came: From now on prison administration *will not in any respect be responsible for those dying on hunger strikes!*",
        chapter: 12,
        p: 139,
      },
      {
        txt: `The *light* in the cells was always "rationed" on the windows and the frosted reinforced glass created a permanent twilight in the cells (darkness is an important factor in causing depression).`,
        chapter: 12,
        p: 141,
      },
      {
        txt: "One could get into a punishment cell for coughing.",
        chapter: 12,
        p: 142,
      },
      {
        txt:
          "Well, brothers, a prisoner transport! A prisoner transport! We're off to somewhere! Good Lord, bless us! Shall we gather up our bones?",
        chapter: 12,
        p: 145,
      },
      {
        txt:
          "[T]he loading and unloading of the dirty faces takes place far, far from the passenger platform and is seen only by switchmen and roadbed inspectors.",
        chapter: 13,
        p: 150,
      },
      {
        txt:
          "[A] Stolypin car might be *seven days* en route (with twenty-five people in a compartment).",
        chapter: 13,
        p: 152,
      },
      {
        txt:
          "As long there are any cubic centimeters of unbreathed air left in the compartment, even if it is beneath the upper shelves, even if between shoulders, legs, and heads, the compartment is ready to take additional prisoners.",
        chapter: 13,
        p: 152,
      },
      {
        txt:
          "[T]he prisoners argue about who's to drink first; they want the healthy prisoners to drink first, and only then those with tuberculosis, and last of all those with syphilis!",
        chapter: 13,
        p: 154,
      },
      {
        txt:
          "[B]y owning things and trembling about their fate aren't you forfeiting the rare opportunity of observing and understanding?",
        chapter: 13,
        p: 157,
      },
      {
        txt:
          "Own only what you can always carry with you: know languages, know countries, know people. Let your memory be your travel bag. Use your memory!",
        chapter: 13,
        p: 158,
      },
      {
        txt:
          "Now was the latrine bucket really an evil for the prisoner? On the contrary, it was the most merciful device of the prison administration. The actual horror began the moment there was *no* latrine bucket in the cell.",
        chapter: 14,
        p: 161,
      },
      {
        txt:
          "Human nature, if it changes at all, changes not much faster than the geological face of the earth.",
        chapter: 14,
        p: 164,
      },
      {
        txt:
          "[T]he main thing was to undermine, to crush the prisoner's will power so he wouldn't think of trying to escape, so that for a long time he wouldn't notice his new advantage: the fact that he had exchanged a stone-walled prison for a railroad car with thin plank walls.",
        chapter: 15,
        p: 169,
      },
      {
        txt:
          "The convoy does everything with intentional brusqueness, rudely, sharply, not spreaking one word in an ordinary human voice. After all, the purpose is to terrify and dishearten.",
        chapter: 15,
        p: 170,
      },
      {
        txt:
          "They don't heat the car, they don't protect the other prisoners from the thieves, they don't give you enough to drink, and they don't give you enough to eat--but on the other hand they don't let you sleep either.",
        chapter: 15,
        p: 170,
      },
      {
        txt:
          "When they unloaded a trainload from the Leningrad prisons (1942) in Solikamsk, the entire embankment was covered with corpses, and only a few got there alive.",
        chapter: 15,
        p: 171,
      },
      {
        txt:
          "[I]t was not unusual for the red trains to arrive nowhere, and the end of the journey often marked the opening day of a *new* camp.",
        chapter: 15,
        p: 171,
      },
      {
        txt:
          "How, in establishing the dictatorship of the proletariat, could they delay with a new type of prison?",
        chapter: 15,
        p: 177,
      },
      {
        txt:
          "Thus we can observe that the leading idea of the Archipelago-- forced labor-- had been advanced in the first month of the October revolution.",
        chapter: 17,
        p: 178,
      },
      {
        txt:
          "[A]ll the sick prisoners are carried out on blankets and laid out on the snow for three hours. When they have washed out the infirmary, they haul the patients in again.",
        chapter: 18,
        p: 188,
      },
      {
        txt:
          "Poles the thickness of an arm were set from wall to wall and prisoners were ordered to sit on these poles all day.",
        chapter: 18,
        p: 185,
      },
      {
        txt:
          "But how could they escape from Solovki? For half a year the sea was frozen over, but not solidly, and in places there was open water, and the snowstorms raged, and the frost bit hard, and things were enveloped in mists and darkness.",
        chapter: 18,
        p: 188,
      },
      {
        txt:
          "[F]orced labor should be set up in such a way that the prisoner should not earn anything from his work but that the state should derive economic profit from it.",
        chapter: 19,
        p: 193,
      },
      {
        txt:
          "The whole long history of the Archipelago, about which it has fallen to me to write this home-grown, homemade book, has, in the course of half a century, found in the Soviet Union almost no expression whatever in the printed word.",
        chapter: 19,
        p: 198,
      },
      {
        txt:
          "The prisoners were so famished that at Zarosshy Spring they ate the corpse of a horse which had been lying dead for more than a week and which not only stank but was covered with flies and maggots.",
        chapter: 20,
        p: 212,
      },
      {
        txt:
          "The prisoner did not know what barracks he would be in the morrow (and even when he returned from work he could not be certain that he would sleep in that place that night).",
        chapter: 21,
        p: 216,
      },
      {
        txt:
          "The zek [prisoner] was separated from his family on the first day of his arrest and, in 50 percent of all cases--forever.",
        chapter: 21,
        p: 217,
      },
      {
        txt:
          "You come to hate this forest, this beauty of the earth, whose praises have been sung in verse and prose.",
        chapter: 23,
        p: 221,
      },
      {
        txt:
          "[T]hey came to a cold, snowy woods, they stretched wire on the trees, and whoever managed to survive until the first barracks knew those barracks would be for the guard anyway.",
        chapter: 23,
        p: 225,
      },
      {
        txt:
          "Philosophers, psychologists, medical men, and writers could have observed in our camps, as nowhere else, in detail and on a large scale the special process of the narrowing of the intellectual and spiritual horizons of a human being, the reduction of the human being to an animal and the process of dying alive.",
        chapter: 23,
        p: 225,
      },
      {
        txt:
          "If black astonished head lice are crawling on the face of your neighbor on the bunks, it is a sure sign of death.",
        chapter: 23,
        p: 228,
      },
      {
        txt:
          "Mostly it was not a surgeon but a convoy guard who *verified* the corpse--to be certain the zek was really dead and not pretending. And for this they ran the corpse through with a bayonet or smashed the skull with a big mallet.",
        chapter: 23,
        p: 229,
      },
      {
        txt:
          "The corpses were hauled away on sledges or on carts, depending on the time of year. Sometimes, for convenience, they used one box for six corpses, and if they were no boxes, then they tied the hands and legs with cord so they didn't flop about.",
        chapter: 23,
        p: 229,
      },
      {
        txt:
          "You'd better make your arrangements, make your arrangements, inside *the camp compound*, darling, while it is being proposed in a gentlemanly way. There's cleanliness here, and laundry facilities, and decent clothes and unfatiguing work--and it's all yours.",
        chapter: 24,
        p: 233,
      },
      {
        txt: "Because not every one was lucky enough *to get propositioned*.",
        chapter: 24,
        p: 233,
      },
      {
        txt:
          "What if you said ... no? All right, that's your lookout! Put on britches and pea jacket. And go marching off to the woods, with your formless, fat exterior, and your frail inner being. You'll come crawling yet. You'll go down on bended knees.",
        chapter: 24,
        p: 233,
      },
      {
        txt:
          "And what of it if you loved someone out in freedom and wanted to remain true to him? What profit is there in the fidelity of a female corpse?",
        chapter: 24,
        p: 233,
      },
      {
        txt:
          "Obvious old age and obvious ugliness were the only defense for a woman there--nothing else. Attractiveness was a curse.",
        chapter: 24,
        p: 234,
      },
      {
        txt:
          "[E]verything that is feminine in a woman, whether it be constant or whether it be monthy, ceases to be.",
        chapter: 24,
        p: 235,
      },
      {
        txt:
          "[T]hese issues of whether to give birth or not, which were difficult enough for any woman at all, were still more confused for a woman camp inmate. And what would happen to the child subsequently?",
        chapter: 24,
        p: 237,
      },
      {
        txt:
          "A *deaf and dumb* carpenter got a term for counterrevolutionary *agitation*! How? He was laying floors in a club. Everything had been removed from a big hall, and there was no nail or hook anywhere. While he was working, he hung his jacket and his service cap on a bust of Lenin. Someone came in and saw it. 58, ten years.",
        chapter: 26,
        p: 240,
      },
      {
        txt: "A stone is not a human being, and even stones get crushed.",
        chapter: 28,
        p: 248,
      },
      {
        txt:
          "Oh, blessed are those pitiless tyrannies, those despotisms, those savage countries, where a person once arrested cannot be arrested a second time!",
        chapter: 29,
        p: 249,
      },
      {
        txt:
          "As long as our camps thrived and our exile lasted, this black threat hovered over the heads of the convicted: to be given a new term before they had finished the first one.",
        chapter: 29,
        p: 250,
      },
      {
        txt:
          "To defend yourself in that savage world was impossible. To go on strike was suicide. To go on hunger strikes was useless.",
        chapter: 30,
        p: 254,
      },
      {
        txt:
          "The continual escapes in one or another place, even those that did not succeed, were a true proof that the energy of the zeks had not yet been lost.",
        chapter: 30,
        p: 254,
      },
      {
        txt:
          "And even if you were fortunate enough to escape unscathed, how could you live afterward on a false passpot, with a false name, when documents were checked at every intersection, when suspicious eyes followed passers-by from behind every gateway?",
        chapter: 30,
        p: 255,
      },
      {
        txt:
          "The hostility of the surrounding population, encouraged by the authorities, became the principal hindrance to escapes.",
        chapter: 30,
        p: 256,
      },
      {
        txt:
          "But the desperate heart sometimes did not weigh things. It saw: the river was flowing and a log was floating down it--and one jump! We'll float on down.",
        chapter: 30,
        p: 256,
      },
      {
        txt:
          "[T]he punishment cell for work shirkers was a log frame *without a roof*.",
        chapter: 31,
        p: 259,
      },
      {
        txt:
          "Through its laws the Stalinist power said to the thieves clearly: Do not steal from me! Steal from the private persons! You see, private property is a belch from the past.",
        chapter: 32,
        p: 263,
      },
      {
        txt:
          "[A]ccording to the Progressive Doctrine, criminal activity arises only from the presence of classes; we have no classes in our country, therefore there is no crime and therefore you cannot write about it in the press!",
        chapter: 32,
        p: 263,
      },
      {
        txt:
          "It was the same with criminal activity as it was with malaria. It was simply announced one day that it no longer existed in our country, and from then on it became impossible to treat it or even to diagnose it.",
        chapter: 32,
        p: 264,
      },
      {
        txt:
          "In 1927 prisoners aged sixteen (they didn't count the younger ones) to twenty-four represented 48 percent of all prisoners.",
        chapter: 33,
        p: 267,
      },
      {
        txt: "They were assigned to dump the shit from latrines.",
        chapter: 33,
        p: 269,
      },
      {
        txt:
          "But the young people, by the laws of their young life, were not about to be flattened by this life style but, intead, grew into it and adapted to it.",
        chapter: 33,
        p: 269,
      },
      {
        txt:
          "The simplest reply to the overpowering injustices was to create injustices oneself! This was the easiest conclusion, and it would now become the rule of life of the kids for a long time to come (or even forever).",
        chapter: 33,
        p: 271,
      },
      {
        txt:
          "No one could avoid being cooked up in that marsh! No boy could remain a separate individual--he would be trampled, torn apart, ostracized, if he did not immediately declare himself a thieves' apprentice.",
        chapter: 33,
        p: 271,
      },
      {
        txt:
          "But suddenly, with diabolical speed, two or three kids would attack from the side. They knocked one old man to the ground, six hands frisked him all over, and they made off like a whirlwind.",
        chapter: 33,
        p: 274,
      },
      {
        txt: "[T]he weaker their victim, the more merciless were the kids.",
        chapter: 33,
        p: 274,
      },
      {
        txt:
          "[T]he personality of the prison keepers interest you only to the extent that it helps you evade their threats and exploit their weaknesses.",
        chapter: 36,
        p: 282,
      },
      {
        txt:
          "Thanks to this process of selection one can conclude that the percentage of the merciless and cruel among the camp keepers is much higher than in a random sample of the population.",
        chapter: 36,
        p: 282,
      },
      {
        txt:
          "[A]mong the camp keepers, who have passed through a severe negative-selection process--both in morality and mentality--the similiarity is astonishing, and we can, in all likelihood, describe without difficulty their basic *universal* characteristics.",
        chapter: 36,
        p: 283,
      },
      {
        txt:
          "Innumerable are the examples of senseless orders, the sole purpose of which was to demonstrate their power.",
        chapter: 36,
        p: 284,
      },
      {
        txt:
          "Unlimited power in the hands of limited people always leads to cruelty.",
        chapter: 36,
        p: 285,
      },
      {
        txt:
          "I have already deduced the generalized judgment that a camp keeper *could not be a decent person*--either he had to change direction of they got rid of him.",
        chapter: 36,
        p: 286,
      },
      {
        txt:
          "For Stalin's purposes the camps were a wonderful place into which he could herd millions as a form of intimidation.",
        chapter: 38,
        p: 291,
      },
      {
        txt:
          "The labor of the zeks was needed for degrading and particularly heavy work, which no one, under socialism, would wish to perform.",
        chapter: 38,
        p: 291,
      },
      {
        txt:
          "80 miles of canal were dug to a depth of over sixteen feet and top width of 280 feet. And almost all of it with pick, shovel, and wheelbarrow.",
        chapter: 38,
        p: 292,
      },
      {
        txt:
          "All that the camp inmates made for their own dear state was openly and blatantly botched: you could break the bricks they made with your bare hands; the paint would peel off the panels; the plaster would fall off; posts would fall down; tables rock; legs fall out; handles come off.",
        chapter: 38,
        p: 293,
      },
      {
        txt:
          "[N]ot only does the Archipelago not pay its own way, but the nation has to pay dearly for the additional satisfaction of having it.",
        chapter: 38,
        p: 296,
      },
      {
        txt: `Now in a swift staccato, as they joke in camp--"winter-summer, winter-summer"--but a long draw-out autumn, an endless winter, an unwilling spring, and only a summer that is short.`,
        chapter: 39,
        p: 299,
      },
      {
        txt: "Just not to perish from the disaster! It had to be survived.",
        chapter: 39,
        p: 300,
      },
      {
        txt:
          "I even image that, statistically speaking, there were fewer suicides per thousand of the population in camp than in freedom.",
        chapter: 39,
        p: 300,
      },
      {
        txt:
          "And maybe the government would have to soften up and begin to take pity on its subject?--well, hardly! Stalin wouldn't have been stopped at that. He would have merely picked up another twenty million people from freedom.",
        chapter: 39,
        p: 301,
      },
      {
        txt:
          "If these millions of helpless and pitiful vermin still did not put an end to themselves--this meant some kind of invicible feeling was alive inside them.",
        chapter: 39,
        p: 301,
      },
      {
        txt:
          "[I]f one has nothing to repent of--what then, what then does the prisoner think about all the time?",
        chapter: 39,
        p: 301,
      },
      {
        txt:
          "If I can only manage to survive--oh, how differently, how wisely, I am going to live! The day of our future *release*? It shines like a rising sun!",
        chapter: 39,
        p: 302,
      },
      {
        txt: `The proverb says: "Freedom spoils, and lack of freedom teaches.`,
        chapter: 39,
        p: 304,
      },
      {
        txt:
          "And the thought of freedom after a time even becomes a forced thought. Farfetched. Strange.",
        chapter: 39,
        p: 305,
      },
      {
        txt:
          "While they openly claim your labor and your body, to the point of exhaustion and even death, the camp keepers do not encroach at all on your thoughts.",
        chapter: 39,
        p: 305,
      },
      {
        txt:
          "No one can deprive you of your family and property--you have already been deprived of them. What does not exist--not even God can take away. And this is a basic freedom.",
        chapter: 39,
        p: 306,
      },
      {
        txt:
          "If it is the essence that counts, then the time has come to reconcile yourself to *general work*. To tatters. To torn skin on the hands. To a piece of bread which is smaller and worse. And perhaps ... to death. But while you're alive, you drag your way along proudly with an aching back.",
        chapter: 39,
        p: 308,
      },
      {
        txt:
          "Formerly you never forgave anyone. You judged people without mercy. And you praised people with equal lack of moderation. And now an understanding mildness has become the basis of your uncategorical judgments.",
        chapter: 39,
        p: 308,
      },
      {
        txt:
          "And now the rule of your life is this: Do not rejoice when you have found, do not weep when you have lost.",
        chapter: 39,
        p: 309,
      },
      {
        txt:
          "It is impossible to expel evil from the world in its entirety, but it is possible to constrict it within each person.",
        chapter: 39,
        p: 312,
      },
      {
        txt:
          "Camp life was organized in such a way that envy pecked at your soul from all sides, even the best defended-sould.",
        chapter: 40,
        p: 315,
      },
      {
        txt:
          "And how can one explain that certain unstable people found faith right there in camp, that they were strenghtened by it, and that they survived uncorrupted?",
        chapter: 40,
        p: 317,
      },
      {
        txt: `[P]eople became corrupted in camp who had already been corrupted out in freedom or who were ready for it.`,
        chapter: 40,
        p: 319,
      },
      {
        txt:
          "Yes, the camps were calculated and intended to corrupt. But this didn't mean that they succeeded in crushing *everyone*",
        chapter: 40,
        p: 319,
      },
      {
        txt:
          "Just as there is no minute when people are not dying or being born, so there was no minute when people were not being arrested.",
        chapter: 41,
        p: 321,
      },
      {
        txt:
          "[I]t would take only one careless word or gesture and he would fly off irrevocably into the abyss.",
        chapter: 41,
        p: 321,
      },
      {
        txt:
          "The security questionnaires were so detailed and so inquisitive that more than half the inhabitants of the country had a bad conscience and were constantly and permanently tormented by the approach of the period when they had to be filled out.",
        chapter: 41,
        p: 321,
      },
      {
        txt:
          "Informing one another of nothing, neither shouting nor groaning, and learning nothing from one another, we were completely in the hands of the newspaper and the official orators.",
        chapter: 41,
        p: 322,
      },
      {
        txt:
          "Any person who had let himself be recruited would, out of fear of public exposure, be very much interested in the continuing stability of the regime.",
        chapter: 41,
        p: 323,
      },
      {
        txt:
          "Every act of resistance to the government required heroism quite out of proportion to the magnitude of the act. It was safer to keep dynamite during the rule of Alexander II than it was to shelter the orphan of an enemy of the people under Stalin.",
        chapter: 41,
        p: 324,
      },
      {
        txt:
          "[W]e can assume that at least every third or at least every fifth case was the consequence of somebody's denunciation and that somebody was willing to provide evidence as a witness!",
        chapter: 41,
        p: 325,
      },
      {
        txt:
          "[E]very conversation of any kind with any other Soviet person called for lies.",
        chapter: 41,
        p: 326,
      },
      {
        txt:
          "But that was not all: Your children were growing up! And if the children were still little, then you had to decide what was the best way to bring them up; whether to start them off on lies instead of the truth (so that it would be *easier* for them to live) and then to lie forevermore in front of them; or to tell them the truth, with the risk that they might make a slip, that they might let it out, which meant that you had to instill into them from the start that the truth was murderous, that beyond the threshold of the house you had to lie, only like, just like papa and mama.",
        chapter: 41,
        p: 326,
      },
      {
        txt:
          "But once again we have adopted Stalin's yardstick: except as decreed by the Supreme Soviet, thou shalt not mate! Your body is, first and foremost, the property of the Fatherland.",
        chapter: 42,
        p: 333,
      },
      {
        txt:
          "Perhaps in fairness we should at last admit that those whom we seek to destroy have a right to hate us. Or have they no such right? Are they supposed to die gracefully?",
        chapter: 42,
        p: 340,
      },
      {
        txt:
          "Mankind is almost incapable of dispassionate, unemotional thinking.",
        chapter: 42,
        p: 340,
      },
      {
        txt:
          "[N]owhere in history, was there a regime more vicious, more bloodthirsty, and at the same time more cunning and ingenious that the Bolshevik, the self-styled Soviet regime.",
        chapter: 42,
        p: 342,
      },
      {
        txt:
          "[H]ow could we readily believe that the Western allies had entered this war not for the sake of freedom in general, but for their own Western European freedom, only against Nazism, intending to take full advantage of the Soviet armies and leave it at that? Was it not more natural for us to believe that our allies were true to the very *principle* of freedom and they would not abandon us to a worse tyranny?",
        chapter: 42,
        p: 342,
      },
      {
        txt:
          "[T]he handcuffs became an instrument of torture instead of a mere device to inhibit activity: they crushed the wrists, causing constant acute pain, and prisoners were kept like that for hours, always with their hands behind their backs, palms outward.",
        chapter: 44,
        p: 345,
      },
      {
        txt:
          "This is the point, this is where their power lies: no news could leak out. If somne muffled rumor did, with no confirmation from newspapers, with informers busily nosing it out, it would not get far enough to matter: there would be no outburst of public indignation.",
        chapter: 45,
        p: 353,
      },
      {
        txt:
          "[S]ociety was not ready. Because without a response from public opinion, a mutiny even in a huge camp has no scope for development.",
        chapter: 45,
        p: 345,
      },
      {
        txt:
          "No longer burdened with frivolous and superfluous knowledge, a prisoner's memory is astonishingly capacious, and can expand indefinitely. We have too little faith in memory!",
        chapter: 46,
        p: 355,
      },
      {
        txt:
          "[T]he sparks of the spirit cannot be kept from spreading, breaking through to each other. Like recognizes and is gathered to like in a manner none can explain.",
        chapter: 46,
        p: 360,
      },
      {
        txt:
          "[A]ll three would try to sit in the back row and when the truck slowed down at a turning they would jump, all three of them at once--right, left, and rear--past the guards, knocking them over if necesary. The guards would open fire, but they would not hit all three.",
        chapter: 47,
        p: 370,
      },
      {
        txt:
          "The question is this: Are you prepared to die? You are? Then you are also prepared to escape.",
        chapter: 47,
        p: 375,
      },
      {
        txt:
          "Guard away, you guard dogs! Your job is to keep us here, ours is to run away.",
        chapter: 47,
        p: 377,
      },
      {
        txt:
          "Can a man do without ideas of his own about good and evil, and merely derive them from the printed instructions and verbal orders of his superiors? Oaths! Those solemn pledges pronounced with a tremor in the voice and intended to defend the people against evildoers: see how easily they can be misdirected to the service of evildoers and against the people!",
        chapter: 50,
        p: 385,
      },
      {
        txt:
          "No, the surprising thing is not that mutinies and risings did not occur in the camps, but that in spite of everything they *did*.",
        chapter: 51,
        p: 386,
      },
      {
        txt:
          "A remarkable fresh breeze was blowing! On the surface, we were prisoners living in a camp just as before, but in reality we had become free--free because for the very first time in our lives, we had started saying openly and aloud all that we thoughts!",
        chapter: 51,
        p: 389,
      },
      {
        txt:
          "The revolution was gathering strength. The wind that seemed to have subsided had sprung up again in a hurricane to fill our eager lungs.",
        chapter: 51,
        p: 392,
      },
      {
        txt:
          "I remember very well my state of mind: a nauseated indifference of my fate; a momentary indifference whether I survived or not.",
        chapter: 52,
        p: 396,
      },
      {
        txt:
          "Why must we go on paying you till the day we die for the crime of being born into this unhappy world?",
        chapter: 52,
        p: 396,
      },
      {
        txt:
          "Damn and blast the lot of you, I'll serve my time all over again if you like!",
        chapter: 52,
        p: 398,
      },
      {
        txt:
          "It had taken only two days and two nights of united action--and look how our serfmasters had changed their tone!",
        chapter: 52,
        p: 399,
      },
      {
        txt:
          "But what happened had not gone for nothing, and our comrades had not fallen in vain. The atmostphere in the camp would never be as oppresive as before.",
        chapter: 52,
        p: 401,
      },
      {
        txt:
          "All that the downtrodden can do is go on hoping. After every disappointment they must find fresh reason for hope.",
        chapter: 53,
        p: 407,
      },
      {
        txt: `How could the prisoners call out through the walls, to the workers one, or two, or three kilometers away: "Brothers! We want only justice! They were murdering us for no crime of ours, they were treating us worse than dogs! Here are our demands"?`,
        chapter: 53,
        p: 411,
      },
      {
        txt:
          "Using cigarette paper, they pasted together an enormous air balloon.",
        chapter: 53,
        p: 411,
      },
      {
        txt:
          "A war of kites in the second half of the twentieth century! And all to silence a word of truth.",
        chapter: 53,
        p: 412,
      },
      {
        txt:
          "The zeks quite seriously prepared to advance against machine guns with pikes.",
        chapter: 53,
        p: 413,
      },
      {
        txt:
          "But when all these people gathered at meetings to decide whether to surrender or to hold on, they found themselves again in that heated climate where their personal opinions dissolved, and ceased to exist even for themselves.",
        chapter: 53,
        p: 415,
      },
      {
        txt:
          "Yet others ran right into the line of fire, either to fight or to seek a quicker death.",
        chapter: 53,
        p: 416,
      },
      {
        txt:
          "Women tried to shield men with their own bodies--and they, too, were bayoneted!",
        chapter: 53,
        p: 417,
      },
      {
        txt:
          "Some prisoners hid in the latrines, and were riddled with bullets there.",
        chapter: 53,
        p: 417,
      },
      {
        txt:
          "Exile was so common in Russia precisely because they weren't enough jails for long-term prisoners.",
        chapter: 54,
        p: 421,
      },
      {
        txt:
          "The most dreadful thing of all is that people are condemned to inactivity.",
        chapter: 54,
        p: 422,
      },
      {
        txt: "Exile was a temporary pen to hold sheep marked for slaughter.",
        chapter: 54,
        p: 423,
      },
      {
        txt:
          "Our country as well as our European neighbors keep silent about the six million people who were subsequently starved to death during the famine artificially brought about by the Bolsheviks.",
        chapter: 55,
        p: 424,
      },
      {
        txt:
          "Everything necessary seemed to have been done to ensure that these odious work fiends should die off quickly and rid our country of themselves and of bread.",
        chapter: 55,
        p: 430,
      },
      {
        txt:
          "No Genghis Khan ever destroyed so many peasants as our glorious *Organs*, under the leadership of the Party.",
        chapter: 55,
        p: 430,
      },
      {
        txt: `Exile made possible a speedy, reliable, and irreversible cleansing of any important region in the "mainland."`,
        chapter: 56,
        p: 433,
      },
      {
        txt:
          "[A]t the end of their sentences 58's, with minor exceptions, were to be *released into exile*.",
        chapter: 56,
        p: 434,
      },
      {
        txt:
          "Neatness and uniformity! That is the advantage of exiling whole nations at once!",
        chapter: 57,
        p: 437,
      },
      {
        txt:
          "[O]nce we had been declared enemies, the state would ever after assert the right of the stronger and trample us, crush us, squash us, until the day we died.",
        chapter: 58,
        p: 439,
      },
      {
        txt:
          "I cannot sleep! I walk and walk and walk in the moonlight. The donkeys sing their song. The camels sing. Every fiber in the me sings: I am free! I am free!",
        chapter: 58,
        p: 442,
      },
      {
        txt:
          "[O]nce the inhuman pressure from outside was lifted, the tension inside them also slackened. Such people are destroyed by a sudden drop of pressure.",
        chapter: 60,
        p: 445,
      },
      {
        txt:
          "The giant Chulpenyov, who had never caught a cold in seven years as a lumberjack, contracted a variety of illnesses once he was freed.",
        chapter: 60,
        p: 445,
      },
      {
        txt: "The hard times brace you, and the soft times drive you to drink.",
        chapter: 60,
        p: 445,
      },
      {
        txt:
          "This was your spiritual birthplace, and a secret part of your soul will remain here forever--while your feet trudge on into the dumb and unwelcoming expanse of *freedom*.",
        chapter: 60,
        p: 446,
      },
      {
        txt:
          "I felt as through I had torn my heart away from what was dearest and most precious to it, from my comrades in misfortune.",
        chapter: 60,
        p: 446,
      },
      {
        txt: `"What has changed, if all the laws providing for twenty-five years' imprisonment issued under Stalin are still in force?"`,
        chapter: 61,
        p: 453,
      },
      {
        txt: "Rulers change, the Archipelago remains.",
        chapter: 62,
        p: 457,
      },
      {
        txt: `All you freedom-loving "left-wing" thinkers in the West! You left laborites! You progressive American, German, and French students! As far as you are concerned, none of this amounts to much. As far as you are concerned, this whole book of mine is a waste of effort. You may suddenly understand it all someday--but only when you *yourselves* hear "hands behind your backs there!" and step ashore on our Archipelago.`,
        chapter: 63,
        p: 468,
      },
      {
        txt:
          "The same treacherous secrecy, the same fog of injustice, still hangs in our air, worse than the smoke of city chimneys.",
        chapter: 63,
        p: 468,
      },
    ],
  },
  ["economics-in-one-lesson"]: {
    title: "Economics in One Lesson",
    author: "Henry Hazlitt",
    date: 1946,
    parts: [
      ["Part One", "The Lesson"],
      ["Part Two", "The Lesson Applied"],
      ["Part Three", "The Lesson After Thirty Years"],
    ],
    chapters: [
      null, // intro
      { name: "The Lesson", title: "Chapter I", part: 0 },
      { name: "The Broken Window", title: "Chapter II", part: 1 },
      { name: "The Blessings of Destruction", title: "Chapter III", part: 1 },
      { name: "Public Works Mean Taxes", title: "Chapter IV", part: 1 },
      { name: "Taxes Discourage Production", title: "Chapter V", part: 1 },
      { name: "Credit Diverts Production", title: "Chapter VI", part: 1 },
      { name: "The Curse of Machine", title: "Chapter VII", part: 1 },
      { name: "Spread-the-Work Schemes", title: "Chapter VIII", part: 1 },
      {
        name: "Disbanding Troops and Bureaucrats",
        title: "Chapter IX",
        part: 1,
      },
      { name: "The Fetish of Full Employment", title: "Chapter X", part: 1 },
      { name: `Who's "Protected" by Tariffs?`, title: "Chapter XI", part: 1 },
      { name: "The Drive for Exports", title: "Chapter XII", part: 1 },
      { name: `"Parity" Prices`, title: "Chapter XIII", part: 1 },
      { name: "Saving the X Industry", title: "Chapter XIV", part: 1 },
      { name: "How the Price System Works", title: "Chapter XV", part: 1 },
      { name: `"Stabilizing" Commodities`, title: "Chapter XVI", part: 1 },
      { name: "Government Price-Fixing", title: "Chapter XVII", part: 1 },
      { name: "What Rent Control Does", title: "Chapter XVIII", part: 1 },
      { name: "Minimum Wage Laws", title: "Chapter XIX", part: 1 },
      { name: "Do Union Really Raise Wages", title: "Chapter XX", part: 1 },
      {
        name: `"Enough to Buy Back the Product"`,
        title: "Chapter XXI",
        part: 1,
      },
      { name: "The Function of Profits", title: "Chapter XXII", part: 1 },
      { name: "The Mirage of Inflation", title: "Chapter XXIII", part: 1 },
      { name: "The Assault on Saving", title: "Chapter XXIV", part: 1 },
      { name: "The Lesson Restated", title: "Chapter XXV", part: 1 },
      { name: "The Lesson After Thirty Years", title: "Chapter XXVI", part: 2 },
    ],

    quotes: [
      {
        txt:
          "Economics is haunted by more fallacies than any other study known to man.",
        chapter: 1,
      },
      // {
      //   txt:
      //     "The bad economist sees only the direct consequences of a proposed course; the good economist looks also at the longer and indirect consequences.",
      //   chapter: 1,
      // },
      // {
      //   txt:
      //     "Doesn't everybody know, in his personal life, that there are all sorts of indulgences delightful at the moment but disastrous in the end?",
      //   chapter: 1,
      // },
      {
        txt:
          "The art of economics consists in looking not merely at the immediate but at the the longer effects of any act or policy; it consists in tracing the consequences of that policy not merely for one group but for all groups.",
        chapter: 1,
      },
      // {
      //   txt:
      //     "It is often sadly remarked that the bad economists present their errors to the public better than the good economists present their truths.",
      //   chapter: 1,
      // },
      {
        txt:
          "[T]he demagogues and bad economists are presenting half-truths. They are speaking only of the immediate effect of a proposed policy or its effects upon a single group. As far as they go they may often be right.",
        chapter: 1,
      },
      // {
      //   txt:
      //     "the lesson will not be driven home, and the fallacies will continue to go unrecognized, unless both are illustrated by examples.",
      //   chapter: 1,
      // },
      // {
      //   txt:
      //     "A young hoodlum, heaves a brick through the window of a baker's shop.",
      //   chapter: 2,
      // },
      {
        txt:
          "[T]he broken-window fallacy, under a hundred disguises, is the most persistent in the history of economics",
        chapter: 3,
      },
      {
        txt:
          "[N]eed is not demand. Effective economic demand requires not merely need but corresponding purchasing power.",
        chapter: 3,
      },
      // {
      //   txt:
      //     "But as most people are so firmly in the habit of thinking of their wealth and income in terms of money, they consider themselves better off as these monetary totals rise, in spite of the fact that in terms of things they may have less and buy less.",
      //   chapter: 3,
      // },
      {
        txt:
          "No man burns down his own house on the theory that the need to rebuild it will stimulate his energies.",
        chapter: 3,
      },
      // {
      //   txt:
      //     "Many of the most frequent fallacies in economic reasoning come from the propensity, especially marked today, to think in terms of an abstraction-the collectivity, the 'nation'-and to forget or ignore the individuals who make it up and give it meaning.",
      //   chapter: 3,
      // },
      // {
      //   txt:
      //     "The supply of the thing they make is all that people have, in fact, to offer in exchange for the things they want.",
      //   chapter: 3,
      // },
      {
        txt:
          "Everywhere government spending is presented as a panacea for all our economics ills.",
        chapter: 4,
      },
      // {
      //   txt:
      //     "The world is full of so-called economists who in turn are full of schemes for getting something for nothing.",
      //   chapter: 4,
      // },
      // {
      //   txt:
      //     "inflation itself is merely a form, and a particularly vicious form, of taxation.",
      //   chapter: 4,
      // },
      {
        txt:
          "[E]very dollar of governement spending must be raised through a dollar of taxation.",
        chapter: 4,
      },
      // {
      //   txt:
      //     "for every public job created by the bridge project a private job has been destroyed somewhere else",
      //   chapter: 4,
      // },
      {
        txt:
          "[T]he cost to the taxpayers is spread over many years instead of being concentrated into one.",
        chapter: 4,
      },
      // {
      //   txt:
      //     "The jobs destroyed by the taxes for the housing are not seen, nor are the goods and services that were never made.",
      //   chapter: 4,
      // },
      {
        txt:
          "Again we must make an effort of the imagination to see the private power plants, the private homes, the typewriters and television sets that were never allowed to come into existence because of the money that was taken from people all over the country to build the photogenic Norris Dam.",
        chapter: 4,
      },
      // {
      //   txt:
      //     "the wealth created by government spending will fully compensate for the wealth destroyed by the taxes imposed to pay for that spending",
      //   p: 37,
      //   chapter: 5,
      // },
      {
        txt: "B is seen. A is forgotten.",
        p: 37,
        chapter: 5,
      },
      {
        txt:
          "If they lose the whole dollar when they lose, but can keep only a fraction of it when they win, they decide that it is foolish to take risks with their capital.",
        p: 38,
        chapter: 5,
      },
      {
        txt:
          "[C]apital to provide new private jobs is first prevented from coming into existence, and the part that does come into existence is then discouraged from starting new enterprises.",
        p: 38,
        chapter: 5,
      },
      {
        txt:
          "[T]he larger the percentage of the national income taken by taxes the greater the deterrent to private production and employment.",
        p: 39,
        chapter: 5,
      },
      {
        txt: `Government "Encouragement" to business is sometimes as much to be feared as government hostility. This suppposed encouragement often takes the form of a direct grant of government credit or a guarantee of private loans.`,
        p: 40,
        chapter: 6,
      },
      {
        txt:
          "Proposals for an increased volume of credit, therefore, are merely another name for proposals for an increased burden of debt.",
        p: 41,
        chapter: 6,
      },
      {
        txt:
          "[T]he government lenders will take risks which other people's money (the taxpayers) that private lenders will not take with their own money.",
        p: 42,
        chapter: 6,
      },
      // {
      //   txt: "What is put in the hands of B cannot be put into the hands of A.",
      //   p: 45,
      //   chapter: 6,
      // },
      {
        txt:
          "The government never lends or gives anything to business that it does no take away from business",
        p: 47,
        chapter: 6,
      },
      // {
      //   txt:
      //     "When the government makes loans or subsidies to business, what it does is to tax successful private business, what it does is to tax successful private business in order to support unsuccessful private business.",
      //   p: 47,
      //   chapter: 6,
      // },
      {
        txt:
          "Among the most viable of all economic delusions is the belief that machines on net balance create unemployment.",
        p: 49,
        chapter: 7,
      },
      {
        txt:
          "If it were indeed true that the introduction of labor-saving machinery is a cause of constantly mounting unemployment and misery, the logical conclusions to be drawn would be revolutionary, not only in the technical fields but for out whole concept of civilization. Not only should we have to regard all further technical progress as a calamity; we should have to regard all past technical progress with equal horror.",
        p: 54,
        chapter: 7,
      },
      {
        txt:
          "Why should freight be carried from Chicago to New York by railroad when we could employ enormously more men, for example, to carry it all on their backs?",
        p: 54,
        chapter: 7,
      },
      {
        txt:
          "The real result of the machine is to increase *production*, to raise the standard of living, to increase economic welfare.",
        p: 58,
        chapter: 7,
      },
      {
        txt: `[W]hat they then proceed to do is to keep their eyes *only* on Joe Smith, and to forget Tom Jones, who has just got a job operating one, and Daisy Miller, who can now buy a coat for half what it used to cost her.`,
        p: 59,
        chapter: 7,
      },
      {
        txt:
          "The householder who is forced to employ two men to do the work of one has, it is true, given employment to one extra man. But he has just that much less money left over to spend on something that would employ somebody else.",
        p: 62,
        chapter: 8,
      },
      {
        txt:
          "There is no limit to the amount of work to be done as long as any human or wish that work could fill remains unsatisfied.",
        p: 66,
        chapter: 8,
      },
      {
        txt:
          "When your money is taken by a thief, you get nothing in return. When your money is taken through taxes to support needless bureaucrats, precisely the same situation exists.",
        p: 70,
        chapter: 9,
      },
      {
        txt:
          "We cannot continuously have the fullest production without full employment. But we can very easily have full employment without full production.",
        p: 71,
        chapter: 10,
      },
      {
        txt:
          "Nothing is easier to achieve than full employment, once it is divorced from the goal of full production and taken as an end in itself.",
        p: 72,
        chapter: 10,
      },
      {
        txt: "Prisons and chain gangs have full employment.",
        p: 72,
        chapter: 10,
      },
      {
        txt:
          "Yet our legislators do not present Full Production bills in Congress but Full Employment bills.",
        p: 72,
        chapter: 10,
      },
      {
        txt:
          "The progress of civilization has meant the reduction of employment, not its increase.",
        p: 72,
        chapter: 10,
      },
      {
        txt:
          "The real question is not how many millions of jobs there will be in America ten years from now, but how much shall we produce, and what, in consequence, will be our standard of living?",
        p: 73,
        chapter: 10,
      },
      {
        txt:
          "Labor in each country is more fully employed in doing those things that it does best, instead of being forced to do things that it does inefficiently or badly.",
        p: 77,
        chapter: 11,
      },
      {
        txt:
          "[A]s a result of the articifial barrier erected against foreign goods, American labor, capital and land are deflected from what they can do more efficently to what they do less efficiently. Therefore, as a result of the tariff wall, the average productivity of American labor and capital is reduced.",
        p: 79,
        chapter: 11,
      },
      {
        txt:
          "On the one hand, we try to reduce the cost of transportation between England and America, or Canada and the United States, by developing faster and more efficient planes and ships, better roads and bridges, better locomotives or motor trucks. On the other hand, we offset this investment in efficient transportation by a tariff that makes it commercially even more difficult to transport goods than it was before.",
        p: 80,
        chapter: 11,
      },
      {
        txt:
          "The effect of a tariff, therefore, is to change the *structure* of American production. It changes the number of occupations, the kind of occupations, and the relative size of one industry as compared with another. It makes the industries in which we are comparatively inefficient larger, and the industries in which we are comparatively efficient smaller.",
        p: 82,
        chapter: 11,
      },
      {
        txt:
          "It is useless to deny that a tariff does benefit⁠—or at least *can* benefit⁠—*special interests*. True, it benefits them *at the expense of everyone else*.",
        p: 83,
        chapter: 11,
      },
      {
        txt:
          "[E]ven people in the protected industries, both as producers and consumers, begin to suffer from other people's production, and may finally be worse off even on net balance than if neither they nor anybody else had protection.",
        p: 83,
        chapter: 11,
      },
      {
        txt:
          "Without exports we can have no exports, for foreigners will have no funds with which to buy our goods.",
        p: 85,
        chapter: 12,
      },
      {
        txt:
          "Each of us must also sell something, even if for most of us it is our own services rather than goods, in order to get the purchasing power to buy.",
        p: 86,
        chapter: 12,
      },
      {
        txt: `If an automobile company lends a man $5,000 to buy a car priced at that amount, and the load is not repaid, the automobile company is not better off because it has "sold" the car.`,
        p: 87,
        chapter: 12,
      },
      {
        txt:
          "Collectively considered, the real reason a country needs export is to pay for its imports.",
        p: 89,
        chapter: 12,
      },
      {
        txt:
          "When at last disinterested writers recognize that the danger of the scheme's enactment is real, they are usually too late.",
        p: 90,
        chapter: 13,
      },
      {
        txt: `There is no sound reason for taking the particular price relationships that prevailed in a particular year or period and regarding them as sacrosant, or even as necessarily more "normal" than those of any other period.`,
        p: 91,
        chapter: 13,
      },
      {
        txt:
          "If the farmer then has $1 more purchasing power to buy industrial products, the city worker has precisely that much less purchasing power to buy industrial products.",
        p: 94,
        chapter: 13,
      },
      {
        txt: `If the city worker has to pay a higher price for woolen blankets or overcoats because of a tariff, is he "compensated" by having to pay a higher price also for cotton clothing and for foodstuffs?`,
        p: 96,
        chapter: 13,
      },
      {
        txt: "Who gains when everyone equally subsidizes everyone else?",
        p: 96,
        chapter: 13,
      },
      {
        txt: `In order that new inudstries may grow fast enough it is usually necessary that some old inustries should be allowed to shrink or die. In doing this they help to release the necessary capital and labor for the new industries.`,
        p: 102,
        chapter: 14,
      },
      {
        txt:
          "If we had tried to keep the horse-and-buggy trade artifically alive we should have slowed down the growth of the automobile industry and all the trades dependent on it.",
        p: 102,
        chapter: 14,
      },
      {
        txt:
          "It is recognized clearly in the case of an isolated individual or family that one occupation can expand *only at the expense of all other occupations*.",
        p: 105,
        chapter: 15,
      },
      // {
      //   txt:
      //     "How is the problem of alternatives applications of labor and capital, to meet thousands of different needs and wants of different urgencies, solved in such a society? It is solved precisely through the price system.",
      //   p: 105,
      //   chapter: 15,
      // },
      {
        txt:
          "Prices are determined by supply and demand, and demand is determined by how intensely people want a commodity and what they have to offer in exchange for it.",
        p: 106,
        chapter: 15,
      },
      {
        txt:
          "When people want more of a commodity, their competitive bidding raises its price. This increases the profits of the producers who make that product. This stimulates them to increase their production.",
        p: 107,
        chapter: 15,
      },
      {
        txt:
          "[I]t is just as essential for the health of a dynamic economy that dying industries should be allowed to die as that growing industries should be allowed to grow.",
        p: 108,
        chapter: 15,
      },
      {
        txt:
          "It is only the much vilified price system that solves the enormously complicated problem of deciding precisely how much of tens of thousands of different commodities and services should be produced in relation to each other.",
        p: 108,
        chapter: 15,
      },
      {
        txt:
          "The much-reviled speculators are not the enemy of the farmer; they are essential to his best welfare. The risks of fluctuating farm prices must be borne by somebody; they have in fact been borne in modern times chiefly by the professional speculators.",
        p: 111,
        chapter: 16,
      },
      {
        txt:
          "[W]hen speculators are doing their job well, the profits of farmers and millers will depend chiefly on their skill and industry in farming and milling, and not on market fluctuations.",
        p: 111,
        chapter: 16,
      },
      {
        txt:
          "To give farmers money for restricting production, or to give them the same amount of money for an artificially restricted production, is no different from forcing consumers or taxpayers to pay people for doing nothing at all.",
        p: 115,
        chapter: 16,
      },
      {
        txt:
          "Because there is less for everybody, because there is less to go around, real wages and real incomes must decline either through a fall in their monetary amount or through higher living costs.",
        p: 115,
        chapter: 16,
      },
      {
        txt:
          "[T]he consequences of fixing a maximum price for a particular commodity would be to bring about a shortage of that commodity.",
        p: 119,
        chapter: 17,
      },
      {
        txt:
          "What is forgotten is that subsidies are paid for by someone, and that no method has been discovered by which the community gets something for nothing.",
        p: 122,
        chapter: 17,
      },
      {
        txt:
          "The natural consequence of a thoroughgoing over-all price control which seeks to perpetuate a given historic price level, in brief, must ultimately be a completely regimented economy.",
        p: 122,
        chapter: 17,
      },
      {
        txt:
          "Each can see as producer that price control is restricting production in his line. But nearly everyone refuses to generalize this observation, for it means that he will have to pay more for the products of *others*.",
        p: 125,
        chapter: 17,
      },
      {
        txt:
          "Each one of us, in brief, has a multiple economic personality. Each one of us is producer, taxpayer, consumer. The policies he advocates depend upon the particular aspect under which he thinks of himself at the moment.",
        p: 125,
        chapter: 17,
      },
      {
        txt:
          "Rent control, however, encourages wasteful use of space. It discriminates in favor of those who already occupy houses or apartments in a particular city or region at the expense of those who find themselves on the outside.",
        p: 128,
        chapter: 18,
      },
      {
        txt:
          "Because of low fixed rents in old buildings, the tenants already in them, and legally protected against rent increases, are encouraged to use space wastefully, whether or not their families have grown smaller.",
        p: 128,
        chapter: 18,
      },
      {
        txt:
          "Builders or owners of preexisting apartment houses, finding themselves with restricted profits or perhaps even losses on their old apartments, will have little or no capital to put into new construction.",
        p: 129,
        chapter: 18,
      },
      {
        txt:
          "[W]here rent control is particularly unrealistic or oppressive, landlords will not even keep rented houses or apartments in tolerable repair.",
        p: 129,
        chapter: 18,
      },
      {
        txt:
          "[T]he more unrealistic and unjust the rent control is, the harder it is politically to get rid of it.",
        p: 131,
        chapter: 18,
      },
      {
        txt:
          "The politicians--remembering that tenants have more votes than landlords--cynically continue their rent control long after they have been forced to give up general price controls.",
        p: 132,
        chapter: 18,
      },
      {
        txt:
          "[R]ent control is not only increasingly futile, but increasingly destructive the more severe it is, and the longer it remains in effect.",
        p: 133,
        chapter: 18,
      },
      {
        txt:
          "Thinking has become so emotional and so politically biased on the subject of wages that in most discussions of them the plainest principle are ignored.",
        p: 134,
        chapter: 19,
      },
      {
        txt:
          "You cannot make a man worth a given amount by making it illegal for anyone to offer him anything less. You merely deprive him of the right to earn the amount that his abilities and situation would permit him to earn, while you deprive the community even of the moderate services that he is capable of rendering.",
        p: 135,
        chapter: 19,
      },
      {
        txt:
          "While some workers in the industry may be benefited from the higher wage, therefore, others will be thrown out of employment altogether.",
        p: 135,
        chapter: 19,
      },
      {
        txt:
          "There is no escape from the conclusion that the minimum wage will increase unemployment.",
        p: 136,
        chapter: 19,
      },
      {
        txt:
          "We cannot distribute more wealth than is created. We cannot in the long run pay labor as a whole more than it produces.",
        p: 139,
        chapter: 19,
      },
      {
        txt:
          "The more the individual worker produces, the more he increases the wealth of the whole community. The more he produces, the more his services are worth to consumers, and hence to employers.",
        p: 139,
        chapter: 19,
      },
      {
        txt:
          "Emotional economies has given birth to theories that calm examination cannot justify.",
        p: 143,
        chapter: 20,
      },
      {
        txt:
          "[H]eavy unemployment means that fewer goods are produced, that the nation is poorer, and that there is less for everybody.",
        p: 146,
        chapter: 20,
      },
      {
        txt:
          "There is actually no limit to the amount of work to be done. Work creates work. What A produces constitutes the demand for what B produces.",
        p: 150,
        chapter: 20,
      },
      {
        txt:
          "Functional prices are those that encourages the largest volume of production and the largest volume of sales. Functional wages are those that tend to bring about the highest volume of employment and the largest real payrolls.",
        p: 152,
        chapter: 21,
      },
      {
        txt:
          "An increase in costs of production, where the government controls prices and forbids any price increase, takes the profit from marginal producers, forces them out of business, means a shrinkage in production and a growth in unemployment.",
        p: 154,
        chapter: 21,
      },
      {
        txt:
          "[T]he chief effect of forcing up wage rates will be to force unemployment.",
        p: 155,
        chapter: 21,
      },
      {
        txt:
          "Equilibrium wages and prices are the wages and prices that equalize supply and demand.",
        p: 158,
        chapter: 21,
      },
      {
        txt:
          "[A]ny attempt to force prices either above or below their equilibrium levels (which are the levels towards which a free market constantly tends to bring them) will act to reduce the volume of employment and production below what it would otherwise have been.",
        p: 158,
        chapter: 21,
      },
      {
        txt:
          "The indignation shown by many people today at the mention of the very word *profit* indicates how little understanding there is of the vital function that profits play in our economy.",
        p: 159,
        chapter: 22,
      },
      {
        txt:
          "[G]overnmental policy almost everywhere today tends to assume that production will go on automatically, no matters what is done to discourage them.",
        p: 161,
        chapter: 22,
      },
      {
        txt:
          "One function of profits, in brief, is to guide and channel the factors of production so as to apportion the relative output of thousands of different commodities in accordance with demand.",
        p: 37,
        chapter: 22,
      },
      {
        txt:
          "Free prices and free profits will maximize production and relieve shortages quicker than any other system.",
        p: 162,
        chapter: 22,
      },
      {
        txt:
          "[P]rofits are achieved not by raising prices, but by introducing economies and efficiencies that cut costs of production.",
        p: 162,
        chapter: 22,
      },
      {
        txt:
          "[I]t seems desirable to ask why inflation has been constantly resorted to, why it has had immemorial popular appeal, and why its siren muisc has tempted one nation after another down the path to economic disaster.",
        p: 164,
        chapter: 23,
      },
      {
        txt: `The most obvious and yet the oldest and most stubborn error on which the appeal of inflation rests is that of confusing "money" with wealth.`,
        p: 164,
        chapter: 23,
      },
      {
        txt:
          "[S]o powerful is the verbal ambiguity that confuses money with wealth, that even those who at times recognize the confusion will slide back into it in the course of their reasoning.",
        p: 165,
        chapter: 23,
      },
      {
        txt:
          "The more knowing inflationists recognize that any substantial increase in the quantity of money will reduce the purchasing power of each individual monetary unit--in other words, that will lead to an increase in commodity prices.",
        p: 166,
        chapter: 23,
      },
      {
        txt:
          "[T]hey never stop to remind themselves that people collectively cannot buy twice as much goods as before unless twice as much goods are produced.",
        p: 166,
        chapter: 23,
      },
      {
        txt:
          "[I]f people want the goods, they assume, and have the money to pay for them, the goods will almost automatically be produced.",
        p: 167,
        chapter: 23,
      },
      {
        txt:
          "[T]he process of inflation is certain to affect the fortunes of one group differently from those of another. The first groups to receive the additional money will benefit the most.",
        p: 168,
        chapter: 23,
      },
      {
        txt:
          "[T]he gains of the first groups of producers to benefit by higher prices or wages from the inflation are necessarily at the expense of the losses suffered (as consumers) by the last groups of producers that are able to raise their prices or wages.",
        p: 169,
        chapter: 23,
      },
      {
        txt:
          "It is not even possible to halt an inflation, once embarked upon, at some preconceived point, or when prices have achieved a previously agreed upon level; for both political and economic forces will have got out of hand.",
        p: 170,
        chapter: 23,
      },
      {
        txt:
          "Each generation and country follows the same mirage. Each grasps for the same Dead Sea fruit that turns to dust and ashes in its mouth. For it is the nature of inflation to give birth to a thousand illusions.",
        p: 171,
        chapter: 23,
      },
      {
        txt: "Inflation is the opium of the people.",
        p: 174,
        chapter: 23,
      },
      {
        txt:
          "Deficit spending, once embarked upon, creates powerful vested interests which demand its continuance under all conditions.",
        p: 175,
        chapter: 23,
      },
      {
        txt:
          "Inflation itself is a form of taxation. It is perhaps the worst possible form, which usually bears hardest on those least able to pay.",
        p: 176,
        chapter: 23,
      },
      {
        txt:
          "The poor are usually more heavily taxed by inflation, in percentage terms, than the rich, for they do not have the same means of protecting themselves by speculative purchases of real equities.",
        p: 176,
        chapter: 23,
      },
      {
        txt:
          "[Inflation] discourages all prudence and thrift. It encourages squandering, gambling, reckless waste of all kinds. It often makes it more more profitable to speculate than to produce. It tears apart the whole fabric of stable economic relationships.",
        p: 176,
        chapter: 23,
      },
      {
        txt:
          "[Inflation] plants the seeds of fascism and communism. It leads men to demand totalitarian controls. It ends invariably in bitter disillusion and collapse.",
        p: 176,
        chapter: 23,
      },
      {
        txt:
          "[T]oday the ancien virtue of thrift, as well as its defense by the classical economists, is once more under attack, for allegedly new reasons, while the opposite doctrine of spending is in fashion.",
        p: 177,
        chapter: 24,
      },
      {
        txt:
          "[W]hen money is invested it is used to buy or build capital goods--houses or office buildings or factories or ships or trucks or machines.",
        p: 179,
        chapter: 24,
      },
      {
        txt:
          "The word *saving*, for example, is used sometimes to mean mere *hoarding* of money, and sometimes to mean *investment*, with no clear distinction, consistently maintained, between the two uses.",
        p: 180,
        chapter: 24,
      },
      {
        txt:
          "[W]hen business does not know what the government is going to do next, uncertainty is created. Profits are not reinvested. Firms and individuals allow cash balances to accumulate in their banks.",
        p: 181,
        chapter: 24,
      },
      {
        txt: `"saving" does not necessarily mean even a dollar's contraction in *total* spending.`,
        p: 181,
        chapter: 24,
      },
      {
        txt:
          "The saving has been used year after year to increase the quantity or improve the quality of existing machinery, and so to increase the nation's output of goods.",
        p: 183,
        chapter: 24,
      },
      {
        txt:
          "[D]ishoarding, as eccentric recluses die and their hoards are discovered and dissipated, probably offsets new hoarding.",
        p: 185,
        chapter: 24,
      },
      {
        txt:
          "[S]igns of a depression have already appeared, and have caused the hoarding, rather than that the hoarding has started the depression.",
        p: 185,
        chapter: 24,
      },
      {
        txt:
          "And just as the supply of and demand for any other commodity are equalized by price, so the supply of and demand for capital are equalized by interest rates.",
        p: 185,
        chapter: 24,
      },
      {
        txt:
          "If interest rates are artificially kept too low in relation to risks, there will be a reduction in both saving and lending.",
        p: 186,
        chapter: 24,
      },
      {
        txt:
          "It is true, no doubt, that an artificial reduction in the interest rate encourages increased borrowing.",
        p: 186,
        chapter: 24,
      },
      {
        txt:
          "The money rate will rise and a crisis will develop if the inflation is reversed, or merely brought to a halt, or even continued at a diminished rate.",
        p: 187,
        chapter: 24,
      },
      {
        txt:
          "Cheap money policies, in short, eventually bring about far more violent oscillations in business than those they are designed to remedy or prevent.",
        p: 187,
        chapter: 24,
      },
      {
        txt:
          "Almost the whole wealth of the modern world, nearly everything that distinguishes it from the pre-industrial world of the seventeeth century, consists of its accumulated capital.",
        p: 189,
        chapter: 24,
      },
      {
        txt:
          "[U]ntil everything can be produced at no cost at all--there is no assignable limit to the amount of new capital that can be absorbed.",
        p: 190,
        chapter: 24,
      },
      {
        txt:
          "Economics, as we have now seen again and again, is a science of recognizing *secondary* consequences. It is also a science of seeing *general* consequences.",
        p: 191,
        chapter: 25,
      },
      {
        txt:
          "[F]ew people recognize the necessary implications of the economic statements they are constantly making.",
        p: 192,
        chapter: 25,
      },
      {
        txt:
          "When they say, under nearly all conditions, that the way to recovery is to increase wage rates, they have found only another way of saying that the way to recovery is to increase costs of production.",
        p: 193,
        chapter: 25,
      },
      {
        txt:
          "[D]epth in economics consists in looking for all the consequences of a policy instead of merely resting one's gaze on those immediately visible.",
        p: 194,
        chapter: 25,
      },
      {
        txt: "What he consumes is identical with what he produces.",
        p: 195,
        chapter: 25,
      },
      {
        txt:
          "Just as there is no technical improvement that would not hurt someone, so there is no change in public taste or morals, even for the better, that would not hurt someone.",
        p: 197,
        chapter: 25,
      },
      {
        txt:
          "[T]he solution is never to reduce supplies arbitrarily, to prevent further inventions or discoveries, or to support people for continuing to perfrom a service that has lost its value.",
        p: 199,
        chapter: 25,
      },
      {
        txt:
          "[M]any things that seem to be true when we concentrate on a single economic group are seen to be illusions when the interests of everyone, as consumer no less than as producer, are considered.",
        p: 199,
        chapter: 25,
      },
      {
        txt:
          "There is no more certain way to deter employment than to harass and penalize employers.",
        p: 206,
        chapter: 26,
      },
      {
        txt:
          "In sum, so far as the politicians are concerned, the lesson that this book tried to instill more than thirty years ago does not seem to have been learned anywhere.",
        p: 207,
        chapter: 26,
      },
      {
        txt:
          "Governments everywhere are still trying to cure by public works the unemployment brought about by their own policies.",
        p: 207,
        chapter: 26,
      },
      {
        txt: `Governments, pushing up the commodity prices by inflating their currencies, continue to blame the higher prices on private producers, sellers, and "profiteers."`,
        p: 207,
        chapter: 26,
      },
      {
        txt:
          "[N]o nation is on a metallic standard, and practically every nation is swindling its own people by printing a chronically depreciating paper currency.",
        p: 208,
        chapter: 26,
      },
      {
        txt:
          "Practically all government attempts to redistribute wealth and income tend to smother productive incentives and lead toward general impoverishment.",
        p: 211,
        chapter: 26,
      },
      {
        txt:
          "Government's main economic function is to encourage and preserve a free market.",
        p: 211,
        chapter: 26,
      },
    ],
  },
  ["long-walk-to-freedom"]: {
    title: "Long Walk To Freedom",
    author: "Nelson Mandela",
    date: 1995,
    quotes: [
      {
        txt:
          "There is nothing like returning to a place that remains unchanged to find the ways in which you yourself have altered.",
      },
      {
        txt:
          "Politics, in my experience, is nothing but a racket to steal money from the poor.",
      },
      {
        txt:
          "Laws stripping people of their rights were inevitably described as laws restoring those rights.",
      },
      {
        txt:
          "It was a crime to walk through a Whites Only door, a crime to ride a Whites Only bus, a crime to use a Whites Only drinking fountain, a crime to walk on a Whites Only beach, a crime to be on the streets past eleven, a crime not to have a pass book and a crime to have the wrong signature in that book, a crime to be unemployed and a crime to be employed in the wrong place, a crime to live in certain places and a crime to have no place to live.",
      },
      {
        txt:
          "It is what we make out of what we have, not what we are given, that separates one person from another.",
      },
      {
        txt:
          "newspapers are only a poor shadow of reality; their information is important to a freedom fighter not because it reveals the truth, but because it discloses the biases and perceptions of both those who produce the paper and those who read it.",
      },
      {
        txt:
          "It is said that no one truly knows a nation until one has been inside its jails. A nation should not be judged by how it treats its highest citizens, but its lowest ones-and South Africa treated its imprisoned African citizens like animals.",
      },
      {
        txt:
          "When the women begin to take an active part in the struggle, no power on earth can stop us from achieving freedom in our lifetime.",
      },
    ],
  },
};
