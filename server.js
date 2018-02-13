const express = require('express');
const request = require('request');
const static = require('express-static');

var app = express();

app.use('/api/suggest/:term?', function(req, res) {
  let delay = 0;
  const term = req.params.term || '';

  if (term.toLowerCase() === 'sessel') {
    // Set fake timeout for that word
    delay = 3000;
  }

  setTimeout((() => {
    // Use fake timeout, use your own api
    req.pipe(request("https://m.xxxlutz.at/m/mobile/at/v1/fhsuggest?term=" + term)).pipe(res);
  }), delay);
});

app.get('*', static('public'));

app.listen(process.env.PORT || 8000);

console.log('Visit http://localhost:8000 in your browser');