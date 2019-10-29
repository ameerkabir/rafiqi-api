import express from 'express';
import cors from 'cors';
import compression from 'compression';
import bodyParser from 'body-parser';
import api from './src/routes';
import connectToDb from './src/db';
import  config from './src/config'

function startAPI() {
  const app = express()
    .use(cors())
    .use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
    .use(bodyParser.json({ type: '*/*', limit: '50mb' }))
    .use(compression())
    .use(api());

  const server = app.listen(config.port || 4000, () =>
    console.log(`Listening on http://localhost:${server.address().port}`)
  );
  connectToDb();

  return app;
}
startAPI();
