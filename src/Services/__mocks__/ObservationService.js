const observations = [
  {
    id: 1,
    birdName: "Parrot",
    birdRarity: "Rare",
    date: "Thu Feb 14 2019 11:08:10 GMT+0200 (Eastern European Standard Time)",
    notes: "Parrot testbird"
  },
  {
    id: 2,
    birdName: "Crow",
    birdRarity: "Common",
    date: "Sat Feb 09 2019 20:05:54 GMT+0200 (Eastern European Standard Time)",
    notes: "Crow the wise bird"
  },
  {
    id: 3,
    birdName: "Seagul",
    birdRarity: "Common",
    date: "Sat Feb 09 2019 12:05:54 GMT+0200 (Eastern European Standard Time)",
    notes: "Seabird"
  },
  {
    id: 4,
    birdName: "Eagle",
    birdRarity: "Rare",
    date: "Wed Feb 13 2019 20:47:57 GMT+0200 (Eastern European Standard Time)",
    notes: "Screaming eagle"
  },
  {
    id: 5,
    birdName: "Mockingbird",
    birdRarity: "Extremely Rare",
    date: "Sat Feb 09 2019 20:01:54 GMT+0200 (Eastern European Standard Time)",
    notes: "Legendary testbird"
  }
];

const getAll = () => {
    return Promise.resolve(observations)
}

export default { getAll, observations}
