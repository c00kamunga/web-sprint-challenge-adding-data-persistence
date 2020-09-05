
exports.up = async function(knex) {
  await knex.schema.createTable('project', tbl => {
      tbl.increments('id')
      tbl.string('name').notNullable().unique()
      tbl.string('description')
      tbl.boolean('completed').defaultTo(false).notNullable()
  })

  await knex.schema.createTable("resource", tbl => {
      tbl.increments('id')
      tbl.string('name').notNullable().unique()
      tbl.string('description')
  })

  await knex.schema.dropTableIfExists('project_resources', tbl => {
      tbl.integer('project_id').references('id').inTable('project').onDelete('SET NULL').onUpdate('CASCADE')
      tbl.integer('resource_id').references('id').inTable('resource').onDelete('SET NULL').onUpdate('CASCADE')
      tbl.primary(['project_id', 'resource_id'])
  })

  await knex.schema.createTable('task', tbl => {
      tbl.integer('project_id').references('id').inTable('project').onDelete('SET NULL').onUpdate('CASCADE')
      tbl.string('description').notNullable().unique()
      tbl.string('notes')
      tbl.boolean('completed').defaultTo(false).notNullable()
  })
};



exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('task')
    await knex.schema.dropTableIfExists('project_resources')
    await knex.schema.dropTableIfExists('resource')
    await knex.schema.dropTableIfExists('project')    
};

