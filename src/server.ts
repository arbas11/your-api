import express from 'express';
import { json } from 'body-parser';

const app = express();
app.use(express());

const port = process.env.PORT_SERVER || 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}: hello from your api brother!`);
});
