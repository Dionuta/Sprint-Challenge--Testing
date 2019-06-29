module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/games.db'
    },
    useNullAsDefault: true
  },

};