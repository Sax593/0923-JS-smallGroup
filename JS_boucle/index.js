const librairy = [
  {
    name: "Harry potter",
    nbPage: 200,
  },
  {
    name: "Harry potter 2",
    nbPage: 200,
  },
  {
    name: "Harry potter 3",
    nbPage: 200,
  },
];

for (let i = 0; i < librairy.length; i++) {
  const bookName = [];
  bookName.push(librairy[i].name);
  console.log(bookName);
}
