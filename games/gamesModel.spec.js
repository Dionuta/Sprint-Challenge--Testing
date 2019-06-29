const db = require("../data/dbConfig");

const Games = require("./gamesModel");

describe("the games model", () => {
  afterEach(async () => {
    await db("games").truncate();
  });

  describe("insert()", () => {
    it("should insert games into the db", async () => {
      await Games.insert({
        id: 1,
        title: "Pacman",
        gener: "Arcade",
        releaseYear: 1980
      });
      await Games.insert({
        id: 2,
        title: "Pacman 2",
        gener: "Arcade",
        releaseYear: 1984
      });

      const games = await db("games");

      expect(games).toHaveLength(2);
    });
    it("should return the new game on insert", async () => {
      const game = await Games.insert({
        id: 1,
        title: "Mortal Kombat 2",
        gener: "Arcade",
        releaseYear: 1994
      });
      expect(game).toEqual({
        id: 1,
        title: "Mortal Kombat 2",
        gener: "Arcade",
        releaseYear: 1994
      });
    });
  });
});
