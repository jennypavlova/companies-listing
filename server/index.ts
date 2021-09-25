import express from 'express';
import cors from 'cors';
import { getCompanies } from './src/api/get-companies';
import { getSpecialities } from './src/api/get-specialities';

const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});

app.get('/api/companies', cors(), getCompanies);
app.get('/api/specialities', cors(), getSpecialities);
