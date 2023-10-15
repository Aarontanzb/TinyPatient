import express from 'express';
const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/', (_req, res) => {
  console.log('test');
  res.send('response');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});