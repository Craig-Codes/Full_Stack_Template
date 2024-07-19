// src/index.ts
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json())
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

app.get('/equipment', (req, res) => {
  res.json({message:'Test'});
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
