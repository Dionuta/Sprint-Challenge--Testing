

exports.up = async function(knex, Promise) {
    await knex.schema.createTable('games', (tbl) =>{
        tbl.increments('id')
        tbl.string('title').notNullable()
        tbl.string('gener').notNullable()
        tbl.integer('releaseYear')
    })
}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('games')
  };
