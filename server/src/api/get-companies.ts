import { Request, Response } from 'express';
import { getCompaniesFromFile, Company } from '../domain/companies';

export const getCompanies = (request: Request, response: Response) => {
  const companies: Company[] = getCompaniesFromFile();
  response.status(200).json(companies);
};