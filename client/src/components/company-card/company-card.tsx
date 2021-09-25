import LocationCityIcon from '@mui/icons-material/LocationCity';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';

type Props = {
  company: {
    companyName: string;
    logo: string;
    specialities: string[];
    city: string;
  };
};

export const CompanyCard: React.FC<Props> = ({ company }) => {
  const { companyName, logo, specialities, city } = company;
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar src={logo} alt={companyName} />
      </ListItemAvatar>
      <ListItemText
        primary={companyName}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {city}
            </Typography>
            <LocationCityIcon />
          </React.Fragment>
        }
      />
      <Stack direction="row" spacing={1}>
        {specialities.map((speciality) => (
          <Chip key={speciality} label={speciality} variant="outlined" />
        ))}
      </Stack>
    </ListItem>
  );
};
