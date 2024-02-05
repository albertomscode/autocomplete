import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Grouped() {
  const options = employeeNames.map((option) => {
    const firstLetter = option.name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      id="grouped-demo"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.name}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Employee by categories" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const employeeNames = [
    { name: "Aria Thompson" },
    { name: "Elijah Parker" },
    { name: "Olivia Reynolds" },
    { name: "Jackson Mitchell" },
    { name: "Sophia Turner" },
    { name: "Liam Hayes" },
    { name: "Ava Cooper" },
    { name: "Lucas Bennett" },
    { name: "Emma Henderson" },
    { name: "Logan Phillips" },
    { name: "Isabella Simmons" },
    { name: "Mason Foster" },
    { name: "Amelia Jenkins" },
    { name: "Caden Murphy" },
    { name: "Mia Griffin" },
    { name: "Oliver Russell" },
    { name: "Harper Moore" },
    { name: "Carter Hayes" },
    { name: "Abigail Parker" },
    { name: "Landon Turner" },
    { name: "Grace Henderson" },
    { name: "Ethan Mitchell" },
    { name: "Chloe Reynolds" },
    { name: "Wyatt Simmons" },
    { name: "Madison Bennett" },
    { name: "Grayson Jenkins" },
    { name: "Lily Phillips" },
    { name: "Layla Foster" },
    { name: "Noah Simmons" },
    { name: "Zoe Turner" },
    { name: "Evelyn Russell" },
    { name: "Landon Parker" },
    { name: "Scarlett Griffin" },
    { name: "Benjamin Hayes" },
    { name: "Avery Moore" },
    { name: "Hudson Jenkins" },
    { name: "Ellie Mitchell" },
    { name: "Lincoln Foster" },
    { name: "Sofia Bennett" },
    { name: "Henry Reynolds" },
  ];
  