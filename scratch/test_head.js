const https = require('https');

const url = 'https://static.wikia.nocookie.net/clashofclans/images/7/78/Combat_Planning_Music.mp3/revision/latest?cb=20250406085929';

https.request(url, { method: 'HEAD' }, (res) => {
    console.log('Headers for standard URL:');
    console.log(res.headers);
}).end();

const url2 = 'https://static.wikia.nocookie.net/clashofclans/images/7/78/Combat_Planning_Music.mp3';
https.request(url2, { method: 'HEAD' }, (res) => {
    console.log('Headers for url without revision:');
    console.log(res.headers);
}).end();
