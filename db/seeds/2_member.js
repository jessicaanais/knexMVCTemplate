
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('member').del()
    .then(function () {
      // Inserts seed entries
      return knex('member').insert([
        {company_id: 1, First_name: "Charlie", Last_name: "Smith", email:"charlie@gmail.com", position: "Cashier"},
        {company_id: 1, First_name: "Justin", Last_name: "Lopez", email:"justin@gmail.com", position: "Manager"},
        {company_id: 1, First_name: "Diego", Last_name: "Jones", email:"justin@gmail.com", position: "Assisant Manager"},
        {company_id: 2, First_name: "Michael", Last_name: "Johnson", email:"michael@gmail.com", position: "Cashier"},
        {company_id: 2, First_name: "Emma", Last_name: "Brown", email:"emma@gmail.com", position: "Manager"},
        {company_id: 2, First_name: "Shay", Last_name: "Jones", email:"shay@gmail.com", position: "Assisant Manager"},
        {company_id: 3, First_name: "Martin", Last_name: "William", email:"martin@gmail.com", position: "Cashier"},
        {company_id: 3, First_name: "Allen", Last_name: "Miller", email:"allen@gmail.com", position: "Manager"},
        {company_id: 3, First_name: "Rose", Last_name: "Young", email:"rose@gmail.com", position: "Assisant Manager"}
      ]);
    });
};
