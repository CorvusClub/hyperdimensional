require('dotenv').config();

const { Client } = require('pg');
const client = new Client();

const getDBClient = client.connect();

const Koa = require('koa');

const app = new Koa();

app.use(async ctx => {
  await getDBClient;
  const response = await client.query('SELECT NOW() as now');
  console.log(response);
  ctx.body = `{"f": "Hi World"}`;
});

app.listen(process.env.PORT || 7000);