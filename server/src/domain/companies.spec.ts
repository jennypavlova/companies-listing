import { getCompaniesFromFile, getSpecialitiesFromCompanies } from './companies';

describe('getCompaniesFromFile', () => {
  it('should return companies list with all reqired properties', () => {
    expect(getCompaniesFromFile()[0].companyName).toBeDefined();
    expect(getCompaniesFromFile()[0].logo).toBeDefined();
    expect(getCompaniesFromFile()[0].specialities).toBeDefined();
    expect(getCompaniesFromFile()[0].specialities.length).toBeGreaterThan(0);
    expect(getCompaniesFromFile()[0].city).toBeDefined();
  });
  it('should inclide more than 1 company', () => {
    const result = getCompaniesFromFile();
    expect(result.length).toBeGreaterThan(1);
  });
});

describe('getSpecialitiesFromCompanies', () => {
  const spacialities = ['Electrical', 'Excavation', 'Plumbing'];
  it('should return an array with specialities', () => {
    expect(getSpecialitiesFromCompanies().length).toEqual(3);
    expect(getSpecialitiesFromCompanies()).toEqual(spacialities);
  });
});
