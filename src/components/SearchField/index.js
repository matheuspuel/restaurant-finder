import React, {useState} from 'react';
import TextField, {Input} from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";

function SearchField({setQuery}) {
  const [searchString, setSearchString] = useState('')

  function handleKeyPress({key}) {
    if (key === 'Enter') {
      setQuery(searchString)
    }
  }

  return (
    <TextField
      label="Search Restaurants"
      outlined
      trailingIcon={<MaterialIcon role='button' icon='search'/>}
    >
      <Input
        autoFocus
        value={searchString}
        onChange={e => setSearchString(e.currentTarget.value)}
        onKeyPress={handleKeyPress}
      />
    </TextField>
  )
    ;
}

export default SearchField;