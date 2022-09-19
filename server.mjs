import express from 'express';
const server = express();
const port = process.env.PORT || 3000;
server.get('/', (req, res) => {
  console.log(`someone is looking at u`);
  res.send('I LOVE YOU YUMNA')
});

server.listen(port, () => {
  console.log(`App listning on port ${port}`);
});