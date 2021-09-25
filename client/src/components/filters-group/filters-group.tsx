import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import * as React from 'react';

import { useSpecialities } from '../../hooks/companies-hooks';

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FiltersGroup: React.FC<Props> = ({ onChange }) => {
  const { isFetched: loadingSpecialities, error: errorSpecialities, data } = useSpecialities();

  if (!loadingSpecialities) {
    return <div>Loading...</div>;
  }

  if (errorSpecialities) {
    return <div>An error has occurred: {errorSpecialities}</div>;
  }

  return (
    <div>
      {data?.specialities?.map((name) => (
        <FormControlLabel
          key={name}
          control={<Checkbox onChange={onChange} value={name} />}
          label={name}
        />
      ))}
    </div>
  );
  // }
};
