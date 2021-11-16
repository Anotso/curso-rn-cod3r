
exports.up = function(knex) {
  return knex.schema.createTable('tasks', table => {
        table.increments('id').primary()
        table.string('desc').notNull()
        table.date('estimateAt').notNull()
        table.boolean('doneAt').notNull()
        table.integer('userId').notNull().references('id').inTable('users')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tasks')
};
