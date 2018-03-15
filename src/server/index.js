import express  from 'express';
import path from 'path';

const proxy = require('express-http-proxy');
const app = express();

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');

  // console.log('Headers is set');
  next();
});
app.use(express.static(path.join(__dirname, '../..')));
app.all('/api/*', proxy('dev2.profeed.com.ua', {
  intercept: (rsp, data, req, res, callback) => {
    // rsp - original response from the target
    // console.log('Response from profeed ', data.toString('utf8'));
    try {
      data = data.toString('utf8');
      data = data ? JSON.parse(data) : {};
      // console.log('Response ', data);
      callback(null, JSON.stringify(data));
    } catch (e) {
      callback(null, JSON.stringify({ error : e }));
    }
  }
}));
app.use('/', (req, res) => {
  return res.end(renderHTML());
});

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : '';

function renderHTML() {
  return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Profeed</title>
          <link rel="stylesheet" href="${assetUrl}/public/assets/static/css/normalize.css">
          <link rel="stylesheet" href="${assetUrl}/public/assets/static/css/common.css">
          <link rel="stylesheet" href="${assetUrl}/public/assets/styles.css">
      </head>
      <body>
        <div id="react-view"></div>
        <script type="application/javascript" src="${assetUrl}/public/assets/bundle.js"></script>
      </body>
    </html>
  `;
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  // console.log(`Server listening on: ${PORT}`);
});
