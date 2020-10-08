// you cannot create a foreign key referencing a field on a table
// that does not exist - the order of table creation matters
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
      tbl.increments()
      tbl.string("recipeName").notNullable().unique().index()
      tbl.string('instructions') 

  })
  .createTable('ingredients', tbl => {
        tbl.increments()
        tbl.string("ingredientName").notNullable().unique()
  })
  // must use unsigned on auto incrementing foreign keys
  .createTable('recipes_ingredients', tbl => {
      tbl.increments()

      tbl.integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate("CASCADE")

      tbl.integer('ingredient_id')
      .unsigned().references('id')
      .inTable('ingredients')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
      
      tbl.string('quantity').notNullable()


  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('recipes_ingredients')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes')
};
