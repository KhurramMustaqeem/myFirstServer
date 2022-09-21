import express from 'express';
const server = express();
const port = process.env.PORT || 3000;
server.get('/', (req, res) => {
  console.log(`someone is looking at u`);
  res.send('hey there!! Myself Khurram')
});

server.listen(port, () => {
  console.log(`App listning on port ${port}`);
});