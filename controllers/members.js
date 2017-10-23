const knex = require("../db/knex.js");

module.exports = {
  AddMember: function(req, res) {
  knex('member')
    .insert({
      company_id: req.params.company_id,
      First_name: req.body.First_name,
      Last_name: req.body.Last_name,
      email: req.body.email,
      position: req.body.position
    }, '*')
    .then(() => {
      res.redirect(`/company/${req.params.company_id}`);
    })
 }
}
