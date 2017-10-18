
exports.up = function(knex, Promise) {
  return knex.schema.createTable('member',(table)=>{
  table.increments();
  table.integer('company_id')
    .notNullable()
    .references('id')
    .inTable('company')
    .onDelete('CASCADE')
    .index();
  table.string('First_name');
  table.string('Last_name');
  table.string('email');
  table.string('position');
  table.timestamps(true, true);
 })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('member')
};
