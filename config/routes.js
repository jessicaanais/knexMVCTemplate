//Update the name of the controller below and rename the file.
const agency = require("../controllers/agency.js")
const member = require("../controllers/members.js")
module.exports = function(app){

  app.get('/', agency.AllCompanies);

  app.post('/company', agency.AddCompany);

  app.get('/company/:id', agency.OneCompany);

  app.post('/member/:company_id', member.AddMember);

}
