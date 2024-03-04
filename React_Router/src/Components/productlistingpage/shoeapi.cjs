const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://shoes-collections.p.rapidapi.com/shoes',
  headers: {
    'X-RapidAPI-Key': '17ee4b7483mshd43c9abd6fee4cfp1033dbjsn13ce8a750095',
    'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com'
  }
};

const fetchData = async () => {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

fetchData();
