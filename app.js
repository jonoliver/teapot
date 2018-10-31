const express = require('express');
const app = express();

const {
  HOST = 'http://localhost',
  PORT = '9999',
} = process.env;

const url = `${HOST}:${PORT}`;

const body = `
                       (
            _           ) )
         _,(_)._        ((
    ___,(_______).        )
  ,'__.   /      \\    /\\_
 /,' /  |""|      \\  /  /
| | |   |__|       |,  /
 \\.|                  /
  \. :           :    /
    \.            :.,'
      \-.________,-'

  ,d                                                  ,d
  88                                                  88
MM88MMM ,adPPYba, ,adPPYYba, 8b,dPPYba,   ,adPPYba, MM88MMM
  88   a8P_____88 ""      Y8 88P'    "8a a8"     "8a  88
  88   8PP""""""" ,adPPPPP88 88       d8 8b       d8  88
  88,  "8b,   ,aa 88,    ,88 88b,   ,a8" "8a,   ,a8"  88,
  "Y888  "Ybbd8"'  "8bbdP"Y8 88 YbbdP"'    "YbbdP"'   "Y888
                             88
`;
// good artists borrow, great artists steal
// http://ascii.co.uk/art/teapot

app.get('*', function (req, res) {
  if (req.headers['user-agent'] === 'teadrinker') {
    res.set('X-Powered-By', 'tea, obvs');
    res.status(418);
    res.send(body);
    return;
  }

  res.set('X-Powered-By', 'curl, obvs');
  res.status(404);
  res.send(`<pre>curl ${url} -H "User-Agent: teadrinker" -v</pre>`);
})

app.listen(PORT, console.log(`listening on ${url}`))

