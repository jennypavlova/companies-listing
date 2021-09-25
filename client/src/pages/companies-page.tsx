import Alert from '@mui/material/Alert';
import List from '@mui/material/List';
import React, { useState, useEffect } from 'react';

import { CompanyCard } from '../components/company-card/company-card';
import { FiltersGroup } from '../components/filters-group/filters-group';
import { SearchAppBar } from '../components/search-app-bar';
import { useCompanies } from '../hooks/companies-hooks';

export const CompaniesPage: React.FC = () => {
  const { isLoading, isFetched, error, data: companies } = useCompanies();
  const [filteredCompanies, setFilteredCompanies] = useState(companies ?? []);
  const [searchFilters, setSearchFilters] = useState({
    byCompanyName: '',
    bySpecialties: [] as string[],
  });

  useEffect(() => {
    if (isFetched && companies) {
      setFilteredCompanies(
        companies.filter(
          (company) =>
            (!searchFilters.byCompanyName ||
              company.companyName.includes(searchFilters.byCompanyName)) &&
            searchFilters.bySpecialties.every((filteredSpecialty) =>
              company.specialities.includes(filteredSpecialty),
            ),
        ),
      );
    }
  }, [isFetched, companies, searchFilters]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error has occurred: {error}</div>;
  }

  const handleSearch = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchFilters({ ...searchFilters, byCompanyName: event.currentTarget.value });
  };

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSearchFilters({
        ...searchFilters,
        bySpecialties: [event.currentTarget.value, ...searchFilters.bySpecialties],
      });
    } else {
      setSearchFilters({
        ...searchFilters,
        bySpecialties: searchFilters.bySpecialties.filter(
          (specialty) => specialty !== event.currentTarget.value,
        ),
      });
    }
  };

  return (
    <div className="CompaniesPage">
      <SearchAppBar onChange={handleSearch} />
      <FiltersGroup onChange={handleFilter} />
      {filteredCompanies.length === 0 && <Alert severity="warning">No companied found</Alert>}
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {filteredCompanies?.map((company) => (
          <CompanyCard key={company?.companyName} company={company} />
        ))}
      </List>
    </div>
  );
};
