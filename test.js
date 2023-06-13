const axios = require('axios');

axios.get('http://15.206.120.219:3000/')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
