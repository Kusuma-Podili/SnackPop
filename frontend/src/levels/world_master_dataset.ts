/**
 * 150-Level Master Multi-World Level Dataset
 */

export interface MultiWorldLevelConfig {
  levelNumber: number;
  worldNumber: number;
  worldName: string;
  title: string;
  moves: number;
  targetScore: number;
  stars: [number, number, number];
  objective: string;
  blockers: { r: number; c: number; type: string }[];
  holes: { r: number; c: number }[];
  tip: string;
}

export const MASTER_MULTI_WORLD_DATASET: MultiWorldLevelConfig[] = [
  {
    levelNumber: 1,
    worldNumber: 1,
    worldName: 'Morning Bakery',
    title: 'World 1 - Stage 1',
    moves: 25,
    targetScore: 1000,
    stars: [1000, 1800, 2800],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Morning Bakery!'
  },
  {
    levelNumber: 2,
    worldNumber: 1,
    worldName: 'Morning Bakery',
    title: 'World 1 - Stage 2',
    moves: 25,
    targetScore: 1350,
    stars: [1350, 2430, 3780],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Morning Bakery!'
  },
  {
    levelNumber: 3,
    worldNumber: 1,
    worldName: 'Morning Bakery',
    title: 'World 1 - Stage 3',
    moves: 25,
    targetScore: 1700,
    stars: [1700, 3060, 4760],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Morning Bakery!'
  },
  {
    levelNumber: 4,
    worldNumber: 1,
    worldName: 'Morning Bakery',
    title: 'World 1 - Stage 4',
    moves: 25,
    targetScore: 2050,
    stars: [2050, 3690, 5740],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
      { r: 4, c: 0, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Morning Bakery!'
  },
  {
    levelNumber: 5,
    worldNumber: 1,
    worldName: 'Morning Bakery',
    title: 'World 1 - Stage 5',
    moves: 25,
    targetScore: 2400,
    stars: [2400, 4320, 6720],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Morning Bakery!'
  },
  {
    levelNumber: 6,
    worldNumber: 1,
    worldName: 'Morning Bakery',
    title: 'World 1 - Stage 6',
    moves: 24,
    targetScore: 2750,
    stars: [2750, 4950, 7700],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
    ],
    holes: [
      { r: 3, c: 3 }, { r: 3, c: 4 }, { r: 4, c: 3 }, { r: 4, c: 4 }
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Morning Bakery!'
  },
  {
    levelNumber: 7,
    worldNumber: 1,
    worldName: 'Morning Bakery',
    title: 'World 1 - Stage 7',
    moves: 24,
    targetScore: 3100,
    stars: [3100, 5580, 8680],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Morning Bakery!'
  },
  {
    levelNumber: 8,
    worldNumber: 1,
    worldName: 'Morning Bakery',
    title: 'World 1 - Stage 8',
    moves: 24,
    targetScore: 3450,
    stars: [3450, 6210, 9660],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Morning Bakery!'
  },
  {
    levelNumber: 9,
    worldNumber: 1,
    worldName: 'Morning Bakery',
    title: 'World 1 - Stage 9',
    moves: 24,
    targetScore: 3800,
    stars: [3800, 6840, 10640],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Morning Bakery!'
  },
  {
    levelNumber: 10,
    worldNumber: 1,
    worldName: 'Morning Bakery',
    title: 'World 1 - Stage 10',
    moves: 24,
    targetScore: 4150,
    stars: [4150, 7470, 11620],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Morning Bakery!'
  },
  {
    levelNumber: 11,
    worldNumber: 2,
    worldName: 'Fast Food Fiesta',
    title: 'World 2 - Stage 11',
    moves: 24,
    targetScore: 4500,
    stars: [4500, 8100, 12600],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Fast Food Fiesta!'
  },
  {
    levelNumber: 12,
    worldNumber: 2,
    worldName: 'Fast Food Fiesta',
    title: 'World 2 - Stage 12',
    moves: 24,
    targetScore: 4850,
    stars: [4850, 8730, 13580],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
    ],
    holes: [
      { r: 3, c: 3 }, { r: 3, c: 4 }, { r: 4, c: 3 }, { r: 4, c: 4 }
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Fast Food Fiesta!'
  },
  {
    levelNumber: 13,
    worldNumber: 2,
    worldName: 'Fast Food Fiesta',
    title: 'World 2 - Stage 13',
    moves: 24,
    targetScore: 5200,
    stars: [5200, 9360, 14560],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Fast Food Fiesta!'
  },
  {
    levelNumber: 14,
    worldNumber: 2,
    worldName: 'Fast Food Fiesta',
    title: 'World 2 - Stage 14',
    moves: 24,
    targetScore: 5550,
    stars: [5550, 9990, 15540],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
      { r: 4, c: 0, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Fast Food Fiesta!'
  },
  {
    levelNumber: 15,
    worldNumber: 2,
    worldName: 'Fast Food Fiesta',
    title: 'World 2 - Stage 15',
    moves: 24,
    targetScore: 5900,
    stars: [5900, 10620, 16520],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Fast Food Fiesta!'
  },
  {
    levelNumber: 16,
    worldNumber: 2,
    worldName: 'Fast Food Fiesta',
    title: 'World 2 - Stage 16',
    moves: 23,
    targetScore: 6250,
    stars: [6250, 11250, 17500],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Fast Food Fiesta!'
  },
  {
    levelNumber: 17,
    worldNumber: 2,
    worldName: 'Fast Food Fiesta',
    title: 'World 2 - Stage 17',
    moves: 23,
    targetScore: 6600,
    stars: [6600, 11880, 18480],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Fast Food Fiesta!'
  },
  {
    levelNumber: 18,
    worldNumber: 2,
    worldName: 'Fast Food Fiesta',
    title: 'World 2 - Stage 18',
    moves: 23,
    targetScore: 6950,
    stars: [6950, 12510, 19460],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
    ],
    holes: [
      { r: 3, c: 3 }, { r: 3, c: 4 }, { r: 4, c: 3 }, { r: 4, c: 4 }
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Fast Food Fiesta!'
  },
  {
    levelNumber: 19,
    worldNumber: 2,
    worldName: 'Fast Food Fiesta',
    title: 'World 2 - Stage 19',
    moves: 23,
    targetScore: 7300,
    stars: [7300, 13140, 20440],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Fast Food Fiesta!'
  },
  {
    levelNumber: 20,
    worldNumber: 2,
    worldName: 'Fast Food Fiesta',
    title: 'World 2 - Stage 20',
    moves: 23,
    targetScore: 7650,
    stars: [7650, 13770, 21420],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Fast Food Fiesta!'
  },
  {
    levelNumber: 21,
    worldNumber: 3,
    worldName: 'Italian Piazza',
    title: 'World 3 - Stage 21',
    moves: 23,
    targetScore: 8000,
    stars: [8000, 14400, 22400],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Italian Piazza!'
  },
  {
    levelNumber: 22,
    worldNumber: 3,
    worldName: 'Italian Piazza',
    title: 'World 3 - Stage 22',
    moves: 23,
    targetScore: 8350,
    stars: [8350, 15030, 23380],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Italian Piazza!'
  },
  {
    levelNumber: 23,
    worldNumber: 3,
    worldName: 'Italian Piazza',
    title: 'World 3 - Stage 23',
    moves: 23,
    targetScore: 8700,
    stars: [8700, 15660, 24360],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Italian Piazza!'
  },
  {
    levelNumber: 24,
    worldNumber: 3,
    worldName: 'Italian Piazza',
    title: 'World 3 - Stage 24',
    moves: 23,
    targetScore: 9050,
    stars: [9050, 16290, 25340],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
      { r: 4, c: 0, type: 'FROSTING' },
    ],
    holes: [
      { r: 3, c: 3 }, { r: 3, c: 4 }, { r: 4, c: 3 }, { r: 4, c: 4 }
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Italian Piazza!'
  },
  {
    levelNumber: 25,
    worldNumber: 3,
    worldName: 'Italian Piazza',
    title: 'World 3 - Stage 25',
    moves: 23,
    targetScore: 9400,
    stars: [9400, 16920, 26320],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Italian Piazza!'
  },
  {
    levelNumber: 26,
    worldNumber: 3,
    worldName: 'Italian Piazza',
    title: 'World 3 - Stage 26',
    moves: 22,
    targetScore: 9750,
    stars: [9750, 17550, 27300],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Italian Piazza!'
  },
  {
    levelNumber: 27,
    worldNumber: 3,
    worldName: 'Italian Piazza',
    title: 'World 3 - Stage 27',
    moves: 22,
    targetScore: 10100,
    stars: [10100, 18180, 28280],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Italian Piazza!'
  },
  {
    levelNumber: 28,
    worldNumber: 3,
    worldName: 'Italian Piazza',
    title: 'World 3 - Stage 28',
    moves: 22,
    targetScore: 10450,
    stars: [10450, 18810, 29260],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Italian Piazza!'
  },
  {
    levelNumber: 29,
    worldNumber: 3,
    worldName: 'Italian Piazza',
    title: 'World 3 - Stage 29',
    moves: 22,
    targetScore: 10800,
    stars: [10800, 19440, 30240],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Italian Piazza!'
  },
  {
    levelNumber: 30,
    worldNumber: 3,
    worldName: 'Italian Piazza',
    title: 'World 3 - Stage 30',
    moves: 22,
    targetScore: 11150,
    stars: [11150, 20070, 31220],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
    ],
    holes: [
      { r: 3, c: 3 }, { r: 3, c: 4 }, { r: 4, c: 3 }, { r: 4, c: 4 }
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Italian Piazza!'
  },
  {
    levelNumber: 31,
    worldNumber: 4,
    worldName: 'Sweet Tooth Kingdom',
    title: 'World 4 - Stage 31',
    moves: 22,
    targetScore: 11500,
    stars: [11500, 20700, 32200],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Sweet Tooth Kingdom!'
  },
  {
    levelNumber: 32,
    worldNumber: 4,
    worldName: 'Sweet Tooth Kingdom',
    title: 'World 4 - Stage 32',
    moves: 22,
    targetScore: 11850,
    stars: [11850, 21330, 33180],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Sweet Tooth Kingdom!'
  },
  {
    levelNumber: 33,
    worldNumber: 4,
    worldName: 'Sweet Tooth Kingdom',
    title: 'World 4 - Stage 33',
    moves: 22,
    targetScore: 12200,
    stars: [12200, 21960, 34160],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Sweet Tooth Kingdom!'
  },
  {
    levelNumber: 34,
    worldNumber: 4,
    worldName: 'Sweet Tooth Kingdom',
    title: 'World 4 - Stage 34',
    moves: 22,
    targetScore: 12550,
    stars: [12550, 22590, 35140],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
      { r: 4, c: 0, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Sweet Tooth Kingdom!'
  },
  {
    levelNumber: 35,
    worldNumber: 4,
    worldName: 'Sweet Tooth Kingdom',
    title: 'World 4 - Stage 35',
    moves: 22,
    targetScore: 12900,
    stars: [12900, 23220, 36120],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Sweet Tooth Kingdom!'
  },
  {
    levelNumber: 36,
    worldNumber: 4,
    worldName: 'Sweet Tooth Kingdom',
    title: 'World 4 - Stage 36',
    moves: 21,
    targetScore: 13250,
    stars: [13250, 23850, 37100],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
    ],
    holes: [
      { r: 3, c: 3 }, { r: 3, c: 4 }, { r: 4, c: 3 }, { r: 4, c: 4 }
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Sweet Tooth Kingdom!'
  },
  {
    levelNumber: 37,
    worldNumber: 4,
    worldName: 'Sweet Tooth Kingdom',
    title: 'World 4 - Stage 37',
    moves: 21,
    targetScore: 13600,
    stars: [13600, 24480, 38080],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Sweet Tooth Kingdom!'
  },
  {
    levelNumber: 38,
    worldNumber: 4,
    worldName: 'Sweet Tooth Kingdom',
    title: 'World 4 - Stage 38',
    moves: 21,
    targetScore: 13950,
    stars: [13950, 25110, 39060],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Sweet Tooth Kingdom!'
  },
  {
    levelNumber: 39,
    worldNumber: 4,
    worldName: 'Sweet Tooth Kingdom',
    title: 'World 4 - Stage 39',
    moves: 21,
    targetScore: 14300,
    stars: [14300, 25740, 40040],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Sweet Tooth Kingdom!'
  },
  {
    levelNumber: 40,
    worldNumber: 4,
    worldName: 'Sweet Tooth Kingdom',
    title: 'World 4 - Stage 40',
    moves: 21,
    targetScore: 14650,
    stars: [14650, 26370, 41020],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Sweet Tooth Kingdom!'
  },
  {
    levelNumber: 41,
    worldNumber: 5,
    worldName: 'Gourmet Galaxy',
    title: 'World 5 - Stage 41',
    moves: 21,
    targetScore: 15000,
    stars: [15000, 27000, 42000],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Gourmet Galaxy!'
  },
  {
    levelNumber: 42,
    worldNumber: 5,
    worldName: 'Gourmet Galaxy',
    title: 'World 5 - Stage 42',
    moves: 21,
    targetScore: 15350,
    stars: [15350, 27630, 42980],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
    ],
    holes: [
      { r: 3, c: 3 }, { r: 3, c: 4 }, { r: 4, c: 3 }, { r: 4, c: 4 }
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Gourmet Galaxy!'
  },
  {
    levelNumber: 43,
    worldNumber: 5,
    worldName: 'Gourmet Galaxy',
    title: 'World 5 - Stage 43',
    moves: 21,
    targetScore: 15700,
    stars: [15700, 28260, 43960],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Gourmet Galaxy!'
  },
  {
    levelNumber: 44,
    worldNumber: 5,
    worldName: 'Gourmet Galaxy',
    title: 'World 5 - Stage 44',
    moves: 21,
    targetScore: 16050,
    stars: [16050, 28890, 44940],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
      { r: 4, c: 0, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Gourmet Galaxy!'
  },
  {
    levelNumber: 45,
    worldNumber: 5,
    worldName: 'Gourmet Galaxy',
    title: 'World 5 - Stage 45',
    moves: 21,
    targetScore: 16400,
    stars: [16400, 29520, 45920],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Gourmet Galaxy!'
  },
  {
    levelNumber: 46,
    worldNumber: 5,
    worldName: 'Gourmet Galaxy',
    title: 'World 5 - Stage 46',
    moves: 20,
    targetScore: 16750,
    stars: [16750, 30150, 46900],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Gourmet Galaxy!'
  },
  {
    levelNumber: 47,
    worldNumber: 5,
    worldName: 'Gourmet Galaxy',
    title: 'World 5 - Stage 47',
    moves: 20,
    targetScore: 17100,
    stars: [17100, 30780, 47880],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Gourmet Galaxy!'
  },
  {
    levelNumber: 48,
    worldNumber: 5,
    worldName: 'Gourmet Galaxy',
    title: 'World 5 - Stage 48',
    moves: 20,
    targetScore: 17450,
    stars: [17450, 31410, 48860],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
    ],
    holes: [
      { r: 3, c: 3 }, { r: 3, c: 4 }, { r: 4, c: 3 }, { r: 4, c: 4 }
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Gourmet Galaxy!'
  },
  {
    levelNumber: 49,
    worldNumber: 5,
    worldName: 'Gourmet Galaxy',
    title: 'World 5 - Stage 49',
    moves: 20,
    targetScore: 17800,
    stars: [17800, 32040, 49840],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Gourmet Galaxy!'
  },
  {
    levelNumber: 50,
    worldNumber: 5,
    worldName: 'Gourmet Galaxy',
    title: 'World 5 - Stage 50',
    moves: 20,
    targetScore: 18150,
    stars: [18150, 32670, 50820],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Gourmet Galaxy!'
  },
  {
    levelNumber: 51,
    worldNumber: 6,
    worldName: 'Tokyo Ramen Street',
    title: 'World 6 - Stage 51',
    moves: 20,
    targetScore: 18500,
    stars: [18500, 33300, 51800],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Tokyo Ramen Street!'
  },
  {
    levelNumber: 52,
    worldNumber: 6,
    worldName: 'Tokyo Ramen Street',
    title: 'World 6 - Stage 52',
    moves: 20,
    targetScore: 18850,
    stars: [18850, 33930, 52780],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Tokyo Ramen Street!'
  },
  {
    levelNumber: 53,
    worldNumber: 6,
    worldName: 'Tokyo Ramen Street',
    title: 'World 6 - Stage 53',
    moves: 20,
    targetScore: 19200,
    stars: [19200, 34560, 53760],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Tokyo Ramen Street!'
  },
  {
    levelNumber: 54,
    worldNumber: 6,
    worldName: 'Tokyo Ramen Street',
    title: 'World 6 - Stage 54',
    moves: 20,
    targetScore: 19550,
    stars: [19550, 35190, 54740],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
      { r: 4, c: 0, type: 'FROSTING' },
    ],
    holes: [
      { r: 3, c: 3 }, { r: 3, c: 4 }, { r: 4, c: 3 }, { r: 4, c: 4 }
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Tokyo Ramen Street!'
  },
  {
    levelNumber: 55,
    worldNumber: 6,
    worldName: 'Tokyo Ramen Street',
    title: 'World 6 - Stage 55',
    moves: 20,
    targetScore: 19900,
    stars: [19900, 35820, 55720],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Tokyo Ramen Street!'
  },
  {
    levelNumber: 56,
    worldNumber: 6,
    worldName: 'Tokyo Ramen Street',
    title: 'World 6 - Stage 56',
    moves: 19,
    targetScore: 20250,
    stars: [20250, 36450, 56700],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Tokyo Ramen Street!'
  },
  {
    levelNumber: 57,
    worldNumber: 6,
    worldName: 'Tokyo Ramen Street',
    title: 'World 6 - Stage 57',
    moves: 19,
    targetScore: 20600,
    stars: [20600, 37080, 57680],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Tokyo Ramen Street!'
  },
  {
    levelNumber: 58,
    worldNumber: 6,
    worldName: 'Tokyo Ramen Street',
    title: 'World 6 - Stage 58',
    moves: 19,
    targetScore: 20950,
    stars: [20950, 37710, 58660],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Tokyo Ramen Street!'
  },
  {
    levelNumber: 59,
    worldNumber: 6,
    worldName: 'Tokyo Ramen Street',
    title: 'World 6 - Stage 59',
    moves: 19,
    targetScore: 21300,
    stars: [21300, 38340, 59640],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Tokyo Ramen Street!'
  },
  {
    levelNumber: 60,
    worldNumber: 6,
    worldName: 'Tokyo Ramen Street',
    title: 'World 6 - Stage 60',
    moves: 19,
    targetScore: 21650,
    stars: [21650, 38970, 60620],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
    ],
    holes: [
      { r: 3, c: 3 }, { r: 3, c: 4 }, { r: 4, c: 3 }, { r: 4, c: 4 }
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Tokyo Ramen Street!'
  },
  {
    levelNumber: 61,
    worldNumber: 7,
    worldName: 'Parisian Patisserie',
    title: 'World 7 - Stage 61',
    moves: 19,
    targetScore: 22000,
    stars: [22000, 39600, 61600],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Parisian Patisserie!'
  },
  {
    levelNumber: 62,
    worldNumber: 7,
    worldName: 'Parisian Patisserie',
    title: 'World 7 - Stage 62',
    moves: 19,
    targetScore: 22350,
    stars: [22350, 40230, 62580],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Parisian Patisserie!'
  },
  {
    levelNumber: 63,
    worldNumber: 7,
    worldName: 'Parisian Patisserie',
    title: 'World 7 - Stage 63',
    moves: 19,
    targetScore: 22700,
    stars: [22700, 40860, 63560],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Parisian Patisserie!'
  },
  {
    levelNumber: 64,
    worldNumber: 7,
    worldName: 'Parisian Patisserie',
    title: 'World 7 - Stage 64',
    moves: 19,
    targetScore: 23050,
    stars: [23050, 41490, 64540],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
      { r: 4, c: 0, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Parisian Patisserie!'
  },
  {
    levelNumber: 65,
    worldNumber: 7,
    worldName: 'Parisian Patisserie',
    title: 'World 7 - Stage 65',
    moves: 19,
    targetScore: 23400,
    stars: [23400, 42120, 65520],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Parisian Patisserie!'
  },
  {
    levelNumber: 66,
    worldNumber: 7,
    worldName: 'Parisian Patisserie',
    title: 'World 7 - Stage 66',
    moves: 18,
    targetScore: 23750,
    stars: [23750, 42750, 66500],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
    ],
    holes: [
      { r: 3, c: 3 }, { r: 3, c: 4 }, { r: 4, c: 3 }, { r: 4, c: 4 }
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Parisian Patisserie!'
  },
  {
    levelNumber: 67,
    worldNumber: 7,
    worldName: 'Parisian Patisserie',
    title: 'World 7 - Stage 67',
    moves: 18,
    targetScore: 24100,
    stars: [24100, 43380, 67480],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Parisian Patisserie!'
  },
  {
    levelNumber: 68,
    worldNumber: 7,
    worldName: 'Parisian Patisserie',
    title: 'World 7 - Stage 68',
    moves: 18,
    targetScore: 24450,
    stars: [24450, 44010, 68460],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Parisian Patisserie!'
  },
  {
    levelNumber: 69,
    worldNumber: 7,
    worldName: 'Parisian Patisserie',
    title: 'World 7 - Stage 69',
    moves: 18,
    targetScore: 24800,
    stars: [24800, 44640, 69440],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Parisian Patisserie!'
  },
  {
    levelNumber: 70,
    worldNumber: 7,
    worldName: 'Parisian Patisserie',
    title: 'World 7 - Stage 70',
    moves: 18,
    targetScore: 25150,
    stars: [25150, 45270, 70420],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Parisian Patisserie!'
  },
  {
    levelNumber: 71,
    worldNumber: 8,
    worldName: 'Mexican Cantina',
    title: 'World 8 - Stage 71',
    moves: 18,
    targetScore: 25500,
    stars: [25500, 45900, 71400],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Mexican Cantina!'
  },
  {
    levelNumber: 72,
    worldNumber: 8,
    worldName: 'Mexican Cantina',
    title: 'World 8 - Stage 72',
    moves: 18,
    targetScore: 25850,
    stars: [25850, 46530, 72380],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
    ],
    holes: [
      { r: 3, c: 3 }, { r: 3, c: 4 }, { r: 4, c: 3 }, { r: 4, c: 4 }
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Mexican Cantina!'
  },
  {
    levelNumber: 73,
    worldNumber: 8,
    worldName: 'Mexican Cantina',
    title: 'World 8 - Stage 73',
    moves: 18,
    targetScore: 26200,
    stars: [26200, 47160, 73360],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Mexican Cantina!'
  },
  {
    levelNumber: 74,
    worldNumber: 8,
    worldName: 'Mexican Cantina',
    title: 'World 8 - Stage 74',
    moves: 18,
    targetScore: 26550,
    stars: [26550, 47790, 74340],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
      { r: 4, c: 0, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Mexican Cantina!'
  },
  {
    levelNumber: 75,
    worldNumber: 8,
    worldName: 'Mexican Cantina',
    title: 'World 8 - Stage 75',
    moves: 18,
    targetScore: 26900,
    stars: [26900, 48420, 75320],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Mexican Cantina!'
  },
  {
    levelNumber: 76,
    worldNumber: 8,
    worldName: 'Mexican Cantina',
    title: 'World 8 - Stage 76',
    moves: 17,
    targetScore: 27250,
    stars: [27250, 49050, 76300],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Mexican Cantina!'
  },
  {
    levelNumber: 77,
    worldNumber: 8,
    worldName: 'Mexican Cantina',
    title: 'World 8 - Stage 77',
    moves: 17,
    targetScore: 27600,
    stars: [27600, 49680, 77280],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Mexican Cantina!'
  },
  {
    levelNumber: 78,
    worldNumber: 8,
    worldName: 'Mexican Cantina',
    title: 'World 8 - Stage 78',
    moves: 17,
    targetScore: 27950,
    stars: [27950, 50310, 78260],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
    ],
    holes: [
      { r: 3, c: 3 }, { r: 3, c: 4 }, { r: 4, c: 3 }, { r: 4, c: 4 }
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Mexican Cantina!'
  },
  {
    levelNumber: 79,
    worldNumber: 8,
    worldName: 'Mexican Cantina',
    title: 'World 8 - Stage 79',
    moves: 17,
    targetScore: 28300,
    stars: [28300, 50940, 79240],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Mexican Cantina!'
  },
  {
    levelNumber: 80,
    worldNumber: 8,
    worldName: 'Mexican Cantina',
    title: 'World 8 - Stage 80',
    moves: 17,
    targetScore: 28650,
    stars: [28650, 51570, 80220],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Mexican Cantina!'
  },
  {
    levelNumber: 81,
    worldNumber: 9,
    worldName: 'Spice Kingdom',
    title: 'World 9 - Stage 81',
    moves: 17,
    targetScore: 29000,
    stars: [29000, 52200, 81200],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Spice Kingdom!'
  },
  {
    levelNumber: 82,
    worldNumber: 9,
    worldName: 'Spice Kingdom',
    title: 'World 9 - Stage 82',
    moves: 17,
    targetScore: 29350,
    stars: [29350, 52830, 82180],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Spice Kingdom!'
  },
  {
    levelNumber: 83,
    worldNumber: 9,
    worldName: 'Spice Kingdom',
    title: 'World 9 - Stage 83',
    moves: 17,
    targetScore: 29700,
    stars: [29700, 53460, 83160],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Spice Kingdom!'
  },
  {
    levelNumber: 84,
    worldNumber: 9,
    worldName: 'Spice Kingdom',
    title: 'World 9 - Stage 84',
    moves: 17,
    targetScore: 30050,
    stars: [30050, 54090, 84140],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
      { r: 4, c: 0, type: 'FROSTING' },
    ],
    holes: [
      { r: 3, c: 3 }, { r: 3, c: 4 }, { r: 4, c: 3 }, { r: 4, c: 4 }
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Spice Kingdom!'
  },
  {
    levelNumber: 85,
    worldNumber: 9,
    worldName: 'Spice Kingdom',
    title: 'World 9 - Stage 85',
    moves: 17,
    targetScore: 30400,
    stars: [30400, 54720, 85120],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Spice Kingdom!'
  },
  {
    levelNumber: 86,
    worldNumber: 9,
    worldName: 'Spice Kingdom',
    title: 'World 9 - Stage 86',
    moves: 16,
    targetScore: 30750,
    stars: [30750, 55350, 86100],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Spice Kingdom!'
  },
  {
    levelNumber: 87,
    worldNumber: 9,
    worldName: 'Spice Kingdom',
    title: 'World 9 - Stage 87',
    moves: 16,
    targetScore: 31100,
    stars: [31100, 55980, 87080],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Spice Kingdom!'
  },
  {
    levelNumber: 88,
    worldNumber: 9,
    worldName: 'Spice Kingdom',
    title: 'World 9 - Stage 88',
    moves: 16,
    targetScore: 31450,
    stars: [31450, 56610, 88060],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Spice Kingdom!'
  },
  {
    levelNumber: 89,
    worldNumber: 9,
    worldName: 'Spice Kingdom',
    title: 'World 9 - Stage 89',
    moves: 16,
    targetScore: 31800,
    stars: [31800, 57240, 89040],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Spice Kingdom!'
  },
  {
    levelNumber: 90,
    worldNumber: 9,
    worldName: 'Spice Kingdom',
    title: 'World 9 - Stage 90',
    moves: 16,
    targetScore: 32150,
    stars: [32150, 57870, 90020],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
    ],
    holes: [
      { r: 3, c: 3 }, { r: 3, c: 4 }, { r: 4, c: 3 }, { r: 4, c: 4 }
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Spice Kingdom!'
  },
  {
    levelNumber: 91,
    worldNumber: 10,
    worldName: 'Cosmic Banquet',
    title: 'World 10 - Stage 91',
    moves: 16,
    targetScore: 32500,
    stars: [32500, 58500, 91000],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Cosmic Banquet!'
  },
  {
    levelNumber: 92,
    worldNumber: 10,
    worldName: 'Cosmic Banquet',
    title: 'World 10 - Stage 92',
    moves: 16,
    targetScore: 32850,
    stars: [32850, 59130, 91980],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Cosmic Banquet!'
  },
  {
    levelNumber: 93,
    worldNumber: 10,
    worldName: 'Cosmic Banquet',
    title: 'World 10 - Stage 93',
    moves: 16,
    targetScore: 33200,
    stars: [33200, 59760, 92960],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Cosmic Banquet!'
  },
  {
    levelNumber: 94,
    worldNumber: 10,
    worldName: 'Cosmic Banquet',
    title: 'World 10 - Stage 94',
    moves: 16,
    targetScore: 33550,
    stars: [33550, 60390, 93940],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
      { r: 4, c: 0, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Cosmic Banquet!'
  },
  {
    levelNumber: 95,
    worldNumber: 10,
    worldName: 'Cosmic Banquet',
    title: 'World 10 - Stage 95',
    moves: 16,
    targetScore: 33900,
    stars: [33900, 61020, 94920],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Cosmic Banquet!'
  },
  {
    levelNumber: 96,
    worldNumber: 10,
    worldName: 'Cosmic Banquet',
    title: 'World 10 - Stage 96',
    moves: 15,
    targetScore: 34250,
    stars: [34250, 61650, 95900],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
    ],
    holes: [
      { r: 3, c: 3 }, { r: 3, c: 4 }, { r: 4, c: 3 }, { r: 4, c: 4 }
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Cosmic Banquet!'
  },
  {
    levelNumber: 97,
    worldNumber: 10,
    worldName: 'Cosmic Banquet',
    title: 'World 10 - Stage 97',
    moves: 15,
    targetScore: 34600,
    stars: [34600, 62280, 96880],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Cosmic Banquet!'
  },
  {
    levelNumber: 98,
    worldNumber: 10,
    worldName: 'Cosmic Banquet',
    title: 'World 10 - Stage 98',
    moves: 15,
    targetScore: 34950,
    stars: [34950, 62910, 97860],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Cosmic Banquet!'
  },
  {
    levelNumber: 99,
    worldNumber: 10,
    worldName: 'Cosmic Banquet',
    title: 'World 10 - Stage 99',
    moves: 15,
    targetScore: 35300,
    stars: [35300, 63540, 98840],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Cosmic Banquet!'
  },
  {
    levelNumber: 100,
    worldNumber: 10,
    worldName: 'Cosmic Banquet',
    title: 'World 10 - Stage 100',
    moves: 15,
    targetScore: 35650,
    stars: [35650, 64170, 99820],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Cosmic Banquet!'
  },
  {
    levelNumber: 101,
    worldNumber: 11,
    worldName: 'Alpine Chocolate Peak',
    title: 'World 11 - Stage 101',
    moves: 15,
    targetScore: 36000,
    stars: [36000, 64800, 100800],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Alpine Chocolate Peak!'
  },
  {
    levelNumber: 102,
    worldNumber: 11,
    worldName: 'Alpine Chocolate Peak',
    title: 'World 11 - Stage 102',
    moves: 15,
    targetScore: 36350,
    stars: [36350, 65430, 101780],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
    ],
    holes: [
      { r: 3, c: 3 }, { r: 3, c: 4 }, { r: 4, c: 3 }, { r: 4, c: 4 }
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Alpine Chocolate Peak!'
  },
  {
    levelNumber: 103,
    worldNumber: 11,
    worldName: 'Alpine Chocolate Peak',
    title: 'World 11 - Stage 103',
    moves: 15,
    targetScore: 36700,
    stars: [36700, 66060, 102760],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Alpine Chocolate Peak!'
  },
  {
    levelNumber: 104,
    worldNumber: 11,
    worldName: 'Alpine Chocolate Peak',
    title: 'World 11 - Stage 104',
    moves: 15,
    targetScore: 37050,
    stars: [37050, 66690, 103740],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
      { r: 4, c: 0, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Alpine Chocolate Peak!'
  },
  {
    levelNumber: 105,
    worldNumber: 11,
    worldName: 'Alpine Chocolate Peak',
    title: 'World 11 - Stage 105',
    moves: 15,
    targetScore: 37400,
    stars: [37400, 67320, 104720],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Alpine Chocolate Peak!'
  },
  {
    levelNumber: 106,
    worldNumber: 11,
    worldName: 'Alpine Chocolate Peak',
    title: 'World 11 - Stage 106',
    moves: 14,
    targetScore: 37750,
    stars: [37750, 67950, 105700],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Alpine Chocolate Peak!'
  },
  {
    levelNumber: 107,
    worldNumber: 11,
    worldName: 'Alpine Chocolate Peak',
    title: 'World 11 - Stage 107',
    moves: 14,
    targetScore: 38100,
    stars: [38100, 68580, 106680],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Alpine Chocolate Peak!'
  },
  {
    levelNumber: 108,
    worldNumber: 11,
    worldName: 'Alpine Chocolate Peak',
    title: 'World 11 - Stage 108',
    moves: 14,
    targetScore: 38450,
    stars: [38450, 69210, 107660],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
    ],
    holes: [
      { r: 3, c: 3 }, { r: 3, c: 4 }, { r: 4, c: 3 }, { r: 4, c: 4 }
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Alpine Chocolate Peak!'
  },
  {
    levelNumber: 109,
    worldNumber: 11,
    worldName: 'Alpine Chocolate Peak',
    title: 'World 11 - Stage 109',
    moves: 14,
    targetScore: 38800,
    stars: [38800, 69840, 108640],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Alpine Chocolate Peak!'
  },
  {
    levelNumber: 110,
    worldNumber: 11,
    worldName: 'Alpine Chocolate Peak',
    title: 'World 11 - Stage 110',
    moves: 14,
    targetScore: 39150,
    stars: [39150, 70470, 109620],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Alpine Chocolate Peak!'
  },
  {
    levelNumber: 111,
    worldNumber: 12,
    worldName: 'Caribbean Tiki Grill',
    title: 'World 12 - Stage 111',
    moves: 14,
    targetScore: 39500,
    stars: [39500, 71100, 110600],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Caribbean Tiki Grill!'
  },
  {
    levelNumber: 112,
    worldNumber: 12,
    worldName: 'Caribbean Tiki Grill',
    title: 'World 12 - Stage 112',
    moves: 14,
    targetScore: 39850,
    stars: [39850, 71730, 111580],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Caribbean Tiki Grill!'
  },
  {
    levelNumber: 113,
    worldNumber: 12,
    worldName: 'Caribbean Tiki Grill',
    title: 'World 12 - Stage 113',
    moves: 14,
    targetScore: 40200,
    stars: [40200, 72360, 112560],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Caribbean Tiki Grill!'
  },
  {
    levelNumber: 114,
    worldNumber: 12,
    worldName: 'Caribbean Tiki Grill',
    title: 'World 12 - Stage 114',
    moves: 14,
    targetScore: 40550,
    stars: [40550, 72990, 113540],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
      { r: 4, c: 0, type: 'FROSTING' },
    ],
    holes: [
      { r: 3, c: 3 }, { r: 3, c: 4 }, { r: 4, c: 3 }, { r: 4, c: 4 }
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Caribbean Tiki Grill!'
  },
  {
    levelNumber: 115,
    worldNumber: 12,
    worldName: 'Caribbean Tiki Grill',
    title: 'World 12 - Stage 115',
    moves: 14,
    targetScore: 40900,
    stars: [40900, 73620, 114520],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Caribbean Tiki Grill!'
  },
  {
    levelNumber: 116,
    worldNumber: 12,
    worldName: 'Caribbean Tiki Grill',
    title: 'World 12 - Stage 116',
    moves: 13,
    targetScore: 41250,
    stars: [41250, 74250, 115500],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Caribbean Tiki Grill!'
  },
  {
    levelNumber: 117,
    worldNumber: 12,
    worldName: 'Caribbean Tiki Grill',
    title: 'World 12 - Stage 117',
    moves: 13,
    targetScore: 41600,
    stars: [41600, 74880, 116480],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Caribbean Tiki Grill!'
  },
  {
    levelNumber: 118,
    worldNumber: 12,
    worldName: 'Caribbean Tiki Grill',
    title: 'World 12 - Stage 118',
    moves: 13,
    targetScore: 41950,
    stars: [41950, 75510, 117460],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Caribbean Tiki Grill!'
  },
  {
    levelNumber: 119,
    worldNumber: 12,
    worldName: 'Caribbean Tiki Grill',
    title: 'World 12 - Stage 119',
    moves: 13,
    targetScore: 42300,
    stars: [42300, 76140, 118440],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Caribbean Tiki Grill!'
  },
  {
    levelNumber: 120,
    worldNumber: 12,
    worldName: 'Caribbean Tiki Grill',
    title: 'World 12 - Stage 120',
    moves: 13,
    targetScore: 42650,
    stars: [42650, 76770, 119420],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
    ],
    holes: [
      { r: 3, c: 3 }, { r: 3, c: 4 }, { r: 4, c: 3 }, { r: 4, c: 4 }
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Caribbean Tiki Grill!'
  },
  {
    levelNumber: 121,
    worldNumber: 13,
    worldName: 'Mediterranean Olive Grove',
    title: 'World 13 - Stage 121',
    moves: 13,
    targetScore: 43000,
    stars: [43000, 77400, 120400],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Mediterranean Olive Grove!'
  },
  {
    levelNumber: 122,
    worldNumber: 13,
    worldName: 'Mediterranean Olive Grove',
    title: 'World 13 - Stage 122',
    moves: 13,
    targetScore: 43350,
    stars: [43350, 78030, 121380],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Mediterranean Olive Grove!'
  },
  {
    levelNumber: 123,
    worldNumber: 13,
    worldName: 'Mediterranean Olive Grove',
    title: 'World 13 - Stage 123',
    moves: 13,
    targetScore: 43700,
    stars: [43700, 78660, 122360],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Mediterranean Olive Grove!'
  },
  {
    levelNumber: 124,
    worldNumber: 13,
    worldName: 'Mediterranean Olive Grove',
    title: 'World 13 - Stage 124',
    moves: 13,
    targetScore: 44050,
    stars: [44050, 79290, 123340],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
      { r: 4, c: 0, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Mediterranean Olive Grove!'
  },
  {
    levelNumber: 125,
    worldNumber: 13,
    worldName: 'Mediterranean Olive Grove',
    title: 'World 13 - Stage 125',
    moves: 13,
    targetScore: 44400,
    stars: [44400, 79920, 124320],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Mediterranean Olive Grove!'
  },
  {
    levelNumber: 126,
    worldNumber: 13,
    worldName: 'Mediterranean Olive Grove',
    title: 'World 13 - Stage 126',
    moves: 12,
    targetScore: 44750,
    stars: [44750, 80550, 125300],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
    ],
    holes: [
      { r: 3, c: 3 }, { r: 3, c: 4 }, { r: 4, c: 3 }, { r: 4, c: 4 }
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Mediterranean Olive Grove!'
  },
  {
    levelNumber: 127,
    worldNumber: 13,
    worldName: 'Mediterranean Olive Grove',
    title: 'World 13 - Stage 127',
    moves: 12,
    targetScore: 45100,
    stars: [45100, 81180, 126280],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Mediterranean Olive Grove!'
  },
  {
    levelNumber: 128,
    worldNumber: 13,
    worldName: 'Mediterranean Olive Grove',
    title: 'World 13 - Stage 128',
    moves: 12,
    targetScore: 45450,
    stars: [45450, 81810, 127260],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Mediterranean Olive Grove!'
  },
  {
    levelNumber: 129,
    worldNumber: 13,
    worldName: 'Mediterranean Olive Grove',
    title: 'World 13 - Stage 129',
    moves: 12,
    targetScore: 45800,
    stars: [45800, 82440, 128240],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Mediterranean Olive Grove!'
  },
  {
    levelNumber: 130,
    worldNumber: 13,
    worldName: 'Mediterranean Olive Grove',
    title: 'World 13 - Stage 130',
    moves: 12,
    targetScore: 46150,
    stars: [46150, 83070, 129220],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Mediterranean Olive Grove!'
  },
  {
    levelNumber: 131,
    worldNumber: 14,
    worldName: 'Enchanted Candy Forest',
    title: 'World 14 - Stage 131',
    moves: 12,
    targetScore: 46500,
    stars: [46500, 83700, 130200],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Enchanted Candy Forest!'
  },
  {
    levelNumber: 132,
    worldNumber: 14,
    worldName: 'Enchanted Candy Forest',
    title: 'World 14 - Stage 132',
    moves: 12,
    targetScore: 46850,
    stars: [46850, 84330, 131180],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
    ],
    holes: [
      { r: 3, c: 3 }, { r: 3, c: 4 }, { r: 4, c: 3 }, { r: 4, c: 4 }
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Enchanted Candy Forest!'
  },
  {
    levelNumber: 133,
    worldNumber: 14,
    worldName: 'Enchanted Candy Forest',
    title: 'World 14 - Stage 133',
    moves: 12,
    targetScore: 47200,
    stars: [47200, 84960, 132160],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Enchanted Candy Forest!'
  },
  {
    levelNumber: 134,
    worldNumber: 14,
    worldName: 'Enchanted Candy Forest',
    title: 'World 14 - Stage 134',
    moves: 12,
    targetScore: 47550,
    stars: [47550, 85590, 133140],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
      { r: 4, c: 0, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Enchanted Candy Forest!'
  },
  {
    levelNumber: 135,
    worldNumber: 14,
    worldName: 'Enchanted Candy Forest',
    title: 'World 14 - Stage 135',
    moves: 12,
    targetScore: 47900,
    stars: [47900, 86220, 134120],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Enchanted Candy Forest!'
  },
  {
    levelNumber: 136,
    worldNumber: 14,
    worldName: 'Enchanted Candy Forest',
    title: 'World 14 - Stage 136',
    moves: 11,
    targetScore: 48250,
    stars: [48250, 86850, 135100],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Enchanted Candy Forest!'
  },
  {
    levelNumber: 137,
    worldNumber: 14,
    worldName: 'Enchanted Candy Forest',
    title: 'World 14 - Stage 137',
    moves: 11,
    targetScore: 48600,
    stars: [48600, 87480, 136080],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Enchanted Candy Forest!'
  },
  {
    levelNumber: 138,
    worldNumber: 14,
    worldName: 'Enchanted Candy Forest',
    title: 'World 14 - Stage 138',
    moves: 11,
    targetScore: 48950,
    stars: [48950, 88110, 137060],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
    ],
    holes: [
      { r: 3, c: 3 }, { r: 3, c: 4 }, { r: 4, c: 3 }, { r: 4, c: 4 }
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Enchanted Candy Forest!'
  },
  {
    levelNumber: 139,
    worldNumber: 14,
    worldName: 'Enchanted Candy Forest',
    title: 'World 14 - Stage 139',
    moves: 11,
    targetScore: 49300,
    stars: [49300, 88740, 138040],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Enchanted Candy Forest!'
  },
  {
    levelNumber: 140,
    worldNumber: 14,
    worldName: 'Enchanted Candy Forest',
    title: 'World 14 - Stage 140',
    moves: 11,
    targetScore: 49650,
    stars: [49650, 89370, 139020],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Enchanted Candy Forest!'
  },
  {
    levelNumber: 141,
    worldNumber: 15,
    worldName: 'Imperial Dim Sum Palace',
    title: 'World 15 - Stage 141',
    moves: 11,
    targetScore: 50000,
    stars: [50000, 90000, 140000],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Imperial Dim Sum Palace!'
  },
  {
    levelNumber: 142,
    worldNumber: 15,
    worldName: 'Imperial Dim Sum Palace',
    title: 'World 15 - Stage 142',
    moves: 11,
    targetScore: 50350,
    stars: [50350, 90630, 140980],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Imperial Dim Sum Palace!'
  },
  {
    levelNumber: 143,
    worldNumber: 15,
    worldName: 'Imperial Dim Sum Palace',
    title: 'World 15 - Stage 143',
    moves: 11,
    targetScore: 50700,
    stars: [50700, 91260, 141960],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Imperial Dim Sum Palace!'
  },
  {
    levelNumber: 144,
    worldNumber: 15,
    worldName: 'Imperial Dim Sum Palace',
    title: 'World 15 - Stage 144',
    moves: 11,
    targetScore: 51050,
    stars: [51050, 91890, 142940],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
      { r: 4, c: 0, type: 'FROSTING' },
    ],
    holes: [
      { r: 3, c: 3 }, { r: 3, c: 4 }, { r: 4, c: 3 }, { r: 4, c: 4 }
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Imperial Dim Sum Palace!'
  },
  {
    levelNumber: 145,
    worldNumber: 15,
    worldName: 'Imperial Dim Sum Palace',
    title: 'World 15 - Stage 145',
    moves: 11,
    targetScore: 51400,
    stars: [51400, 92520, 143920],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Imperial Dim Sum Palace!'
  },
  {
    levelNumber: 146,
    worldNumber: 15,
    worldName: 'Imperial Dim Sum Palace',
    title: 'World 15 - Stage 146',
    moves: 10,
    targetScore: 51750,
    stars: [51750, 93150, 144900],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Imperial Dim Sum Palace!'
  },
  {
    levelNumber: 147,
    worldNumber: 15,
    worldName: 'Imperial Dim Sum Palace',
    title: 'World 15 - Stage 147',
    moves: 10,
    targetScore: 52100,
    stars: [52100, 93780, 145880],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Imperial Dim Sum Palace!'
  },
  {
    levelNumber: 148,
    worldNumber: 15,
    worldName: 'Imperial Dim Sum Palace',
    title: 'World 15 - Stage 148',
    moves: 10,
    targetScore: 52450,
    stars: [52450, 94410, 146860],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
      { r: 1, c: 2, type: 'FROSTING' },
      { r: 2, c: 4, type: 'FROSTING' },
      { r: 3, c: 6, type: 'FROSTING' },
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Imperial Dim Sum Palace!'
  },
  {
    levelNumber: 149,
    worldNumber: 15,
    worldName: 'Imperial Dim Sum Palace',
    title: 'World 15 - Stage 149',
    moves: 10,
    targetScore: 52800,
    stars: [52800, 95040, 147840],
    objective: 'TARGET_SCORE',
    blockers: [
    ],
    holes: [
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Imperial Dim Sum Palace!'
  },
  {
    levelNumber: 150,
    worldNumber: 15,
    worldName: 'Imperial Dim Sum Palace',
    title: 'World 15 - Stage 150',
    moves: 10,
    targetScore: 53150,
    stars: [53150, 95670, 148820],
    objective: 'CLEAR_FROSTING',
    blockers: [
      { r: 0, c: 0, type: 'FROSTING' },
    ],
    holes: [
      { r: 3, c: 3 }, { r: 3, c: 4 }, { r: 4, c: 3 }, { r: 4, c: 4 }
    ],
    tip: 'Match 3 in a row or swap adjacent snacks to pop and clear Imperial Dim Sum Palace!'
  },
];
