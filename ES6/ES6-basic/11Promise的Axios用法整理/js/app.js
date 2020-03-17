const axios = require('axios');

axios.get('http://localhost:3000/companies')
  .then(response => console.log(response))
  .catch(error => console.log(error))
