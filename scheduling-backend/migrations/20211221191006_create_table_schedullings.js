
exports.up = function(knex) {
    return knex.schema.createTable('schedullings', table => {
        table.increments('id').primary()
        table.datetime('estimateAt').notNull()
        table.string('destination').notNull()
        table.string('messenger').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('schedullings')
};
