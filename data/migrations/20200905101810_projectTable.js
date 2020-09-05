
exports.up = async function(knex) {
  await knex.schema.createTable('project', tbl => {
      tbl.increments('id')
      tbl.string('name').notNullable().unique()
      tbl.string('description')
      tbl.boolean('completed').defaultTo(false).notNullable()
  })
};



exports.down = function(knex) {
await knex.schema.dropTableIfExists('project')    
};

