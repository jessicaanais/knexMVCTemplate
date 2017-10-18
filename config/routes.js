//Update the name of the controller below and rename the file.
const agency = require("../controllers/agency.js")
module.exports = function(app){

  app.get('/company', agency.AllCompanies);

  app.post('/company', agency.AddCompany);

  app.get('/company/:id', agency.OneCompany);

}
