
const request = require('supertest');

const server = require('./server.js');

const db = require("../data/dbConfig.js");

describe('server.js', () => {

    it("should set the test env", () =>{
        expect(process.env.DB_ENV).toBe("testing");
   });

  describe('GET /', () => {

      it("it should return 200 using async/await", async() => {
          const res = await request(server).get("/");
          expect(res.status).toBe(200) 
      });

      
      it("it should return application/json using async/await", async() => {
          const res = await request(server).get("/");
          expect(res.type).toBe("application/json") 
      });

      it("it should return testing api is ready", async() => {
          const res = await request(server).get("/");
          expect(res.body).toEqual({message: "testing api is ready"})
      });
  });

  describe("GET /games", () =>{

    afterEach(async () => {
        await db('games').truncate();
     })

    it("should return empty array if there are no games ", async () =>{
        const res = await request(server).get("/games");
        expect(res.status).toBe(200);
        expect(res.body).toEqual([]);
    });

    it("respones type should be json", async () =>{
        const res = await request(server).get("/games");
        expect(res.type).toBe("application/json") ;
    });

    it("should return all games", async () =>{
        const games = [
            {id: 1, title: 'Pacman', gener: 'Arcade',  releaseYear: 1980},
            {id: 2, title: 'Street Fighter', gener: 'Arcade',  releaseYear: 1987},
            {id: 3, title: 'Mortal Kombat', gener: 'Arcade',  releaseYear: 1992},
        ]

        await db("games").insert(games);
        
       const res = await request(server).get("/games");
       expect(res.status).toBe(200);
       expect(res.body).toEqual(games);

    })
  })

  describe('post /games', () => {

    it('response with 422 if info missing', async () => {
        const games = {
            title: 'Pacman', 
            releaseYear: 1980 
          };
        const response = await request(server).post('/games').send(games);
        expect(response.status).toBe(422);
    })
})

});