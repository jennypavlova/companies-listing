import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import React from 'react';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '16ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

type Props = {
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export const SearchInput: React.FC<Props> = ({ onChange }) => {
  return (
    <StyledInputBase
      placeholder="Company name"
      inputProps={{ 'aria-label': 'search' }}
      onChange={onChange}
    />
  );
};
