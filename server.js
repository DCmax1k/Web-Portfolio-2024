const express = require('express');
const app = express();

// Imports
require('dotenv').config();
const cookieParser = require('cookie-parser');
const { SitemapStream, streamToPromise } = require('sitemap');
const { createGzip } = require('zlib');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/client/build'));
app.use(cookieParser());

// Main route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html');
});

app.get('/submission', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html');
});

// Sitemap
let sitemap;
app.get('/sitemap.xml', async (req, res) => {
    res.header('Content-Type', 'application/xml');
    res.header('Content-Encoding', 'gzip');

    if (sitemap) {
        res.send(sitemap);
        return;
    }

    try {
      const smStream = new SitemapStream({ hostname: 'https://www.digitalcaldwell.com/' });
      const pipeline = smStream.pipe(createGzip());

      smStream.write({ url: '/'});

      // cache the response
      streamToPromise(pipeline).then(sm => sitemap = sm);
      
      smStream.end();

      // Show errors and response
      pipeline.pipe(res).on('error', (e) => {throw e});
    } catch (e) {
        console.log(e);
    }
});

app.listen(process.env.PORT || 3002, () => {
    console.log('Serving on port 3002...');
});