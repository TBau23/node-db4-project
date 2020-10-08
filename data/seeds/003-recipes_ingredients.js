
exports.seed = function(knex) {
  
    const recipes_ingredients = [
      {
        recipe_id: 1,
        ingredient_id: 1,
        quantity: "1 lb"
      },
      {
        recipe_id: 1,
        ingredient_id: 2,
        quantity: "2 regular boxes of lasagna noodles"
      },
      {
        recipe_id: 1,
        ingredient_id: 3,
        quantity: "1 jar"
      },
      {
        recipe_id: 1,
        ingredient_id: 4,
        quantity: "1 lb"
      },
      {
        recipe_id: 2,
        ingredient_id: 4,
        quantity: "1 lb"
      },
      {
        recipe_id: 2,
        ingredient_id: 5,
        quantity: "10 tortillas"
      },
      {
        recipe_id: 3,
        ingredient_id: 4,
        quantity: "1 lb"
      },
      {
        recipe_id: 3,
        ingredient_id: 6,
        quantity: "3 cans"
      },
      {
        recipe_id: 3,
        ingredient_id: 7,
        quantity: "2 Tbsp"
      },
    ];
      // Inserts seed entries
      return knex('recipes_ingredients').insert(recipes_ingredients);
    
};
