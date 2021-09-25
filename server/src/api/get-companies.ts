import fs from 'fs';
import { Request, Response } from 'express';

interface Companies {
  companyName: string;
  logo: string;
  specialities: string;
  city: string;
}

const getCompaniesFromFile = () => {
  try {
    const data = fs.readFileSync('src/data/companies.json', 'utf8');
    return JSON.parse(data).companies;
  } catch (err) {
    throw err;
  }
};

export const getCompanies = (request: Request, response: Response) => {
  const companies: Companies[] = getCompaniesFromFile();
  response.status(200).json(companies);
};
