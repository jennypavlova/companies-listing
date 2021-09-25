import { Request, Response } from 'express';
import { getSpecialitiesFromCompanies } from '../domain/companies';

export const getSpecialities = (request: Request, response: Response) => {
  const specialities: string[] = getSpecialitiesFromCompanies();
  response.status(200).json({specialities: specialities});
};
