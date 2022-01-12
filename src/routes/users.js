const { Router, response } = require('express');
const router = Router();

//const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
//import fetch from 'node-fetch';
//const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const fetch = require('node-fetch');


router.get('/', async (req, res) => {

    const delay = ms => new Promise(res => setTimeout(res, ms));

    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data =>{
        res.json(data);
        console.log(data);
      })
      .catch(function(error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
      });
});




module.exports = router;