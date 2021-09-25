import { useQuery, UseQueryResult } from 'react-query';

export type Company = {
  companyName: string;
  logo: string;
  specialities: string[];
  city: string;
};

type Specialities = {
  specialities: string[];
};

export const useCompanies = (): UseQueryResult<Company[] | undefined> =>
  useQuery(
    ['companies'],
    () =>
      fetch('http://localhost:4000/api/companies', { method: 'GET', mode: 'cors' }).then((res) =>
        res.json(),
      ),
    {
      staleTime: 5 * 60 * 1000,
    },
  );

export const useSpecialities = (): UseQueryResult<Specialities | undefined> =>
  useQuery(
    ['specialities'],
    () =>
      fetch('http://localhost:4000/api/specialities', { method: 'GET', mode: 'cors' }).then((res) =>
        res.json(),
      ),
    {
      staleTime: 5 * 60 * 1000,
    },
  );
