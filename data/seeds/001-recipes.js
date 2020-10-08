
exports.seed = function(knex) {

      const recipes = [
        {
          recipeName: 'lasagna',
          instructions: 'cook pasta, layer on meat and sauce'
        },
        {
          recipeName: 'tacos',
          instructions: 'cook meat, put in tortillas, add toppings'
        },
        {
          recipeName: 'chili',
          instructions: 'put meat and beans and cheese in big pot and heat it up real real good'
        },
      ];
  
      // Inserts seed entries
      return knex('recipes').insert(recipes);
   
};
