import express from 'express';
import { getCompanies } from './src/api/get-companies';

const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});

app.get('/companies', getCompanies);
