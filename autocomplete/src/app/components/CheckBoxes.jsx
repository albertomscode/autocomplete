import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags() {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={top20Songs}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title} - {option.artist}
        </li>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Checkboxes" placeholder="Favorites" />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top20Songs = [
    { title: 'Bohemian Rhapsody', artist: 'Queen', year: 1975 },
    { title: 'Like a Rolling Stone', artist: 'Bob Dylan', year: 1965 },
    { title: 'Billie Jean', artist: 'Michael Jackson', year: 1983 },
    { title: 'Imagine', artist: 'John Lennon', year: 1971 },
    { title: 'Hey Jude', artist: 'The Beatles', year: 1968 },
    { title: 'Purple Haze', artist: 'Jimi Hendrix', year: 1967 },
    { title: 'Stairway to Heaven', artist: 'Led Zeppelin', year: 1971 },
    { title: 'I Will Always Love You', artist: 'Whitney Houston', year: 1992 },
    { title: 'Thriller', artist: 'Michael Jackson', year: 1982 },
    { title: 'Like a Prayer', artist: 'Madonna', year: 1989 },
    { title: 'What\'s Going On', artist: 'Marvin Gaye', year: 1971 },
    { title: 'Hotel California', artist: 'Eagles', year: 1976 },
    { title: 'Smells Like Teen Spirit', artist: 'Nirvana', year: 1991 },
    { title: 'Wish You Were Here', artist: 'Pink Floyd', year: 1975 },
    { title: 'Rolling in the Deep', artist: 'Adele', year: 2010 },
    { title: 'Every Breath You Take', artist: 'The Police', year: 1983 },
    { title: 'Boogie Wonderland', artist: 'Earth, Wind & Fire', year: 1979 },
    { title: 'Dancing Queen', artist: 'ABBA', year: 1976 },
    { title: 'Sweet Child o\' Mine', artist: 'Guns N\' Roses', year: 1987 },
    { title: 'Despacito', artist: 'Luis Fonsi ft. Daddy Yankee', year: 2017 },
  ];
  