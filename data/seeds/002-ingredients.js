
exports.seed = function(knex) {
  
  const ingredients = [
    {
      ingredientName: 'sausage'
    },
    {
      ingredientName: 'pasta'
    },
    {
      ingredientName: 'tomato sauce'
    },
    {
      ingredientName: 'ground beef'
    },
    {
      ingredientName: 'tortillas'
    },
    {
      ingredientName: 'beans'
    },
    {
      ingredientName: 'chili seasoning'
    }
  ]
  
      // Inserts seed entries
      return knex('ingredients').insert(ingredients);
    
};
