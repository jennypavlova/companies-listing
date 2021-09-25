import fs from 'fs';

export type Company = {
  companyName: string;
  logo: string;
  specialities: string[];
  city: string;
}

export const getCompaniesFromFile = () => {
  try {
    const data = fs.readFileSync('src/data/companies.json', 'utf8');
    return JSON.parse(data).companies;
  } catch (err) {
    throw err;
  }
};

export const getSpecialitiesFromCompanies = () => {
    const companies: Company[] = getCompaniesFromFile();
    return companies
      .flatMap((company) => company.specialities)
      .filter((speciality, index, array) => array.indexOf(speciality) === index);
};