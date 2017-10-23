const knex = require("../db/knex.js");

  module.exports = {
  // GET ALL
  AllCompanies: function(req, res) {
    knex('company').then((result) => {
      res.render('ALL', {company: result})
    })
    .catch((err) => {
      console.error(err)
    });
  },
  AddCompany: function(req, res) {
  knex('company')
    .insert({
      name: req.body.name,
      description: req.body.description,
      suite: req.body.suite,
    }, '*')
    .then((result) => {

      res.redirect("/")
    })
    .catch((err) => {
      console.error(err);
    });
},
  // GET ONE COMPANY
 OneCompany: function(req, res){
   knex('company')
     .where('id', req.params.id)
     .then((companyResults)=>{

       knex('member')
       .where('company_id', req.params.id)
       .then((memberResults)=>{

         res.render('ONE', {company: companyResults[0], member: memberResults});
       })
     })
     .catch((err) => {
       console.error(err)
     });
 },

}
