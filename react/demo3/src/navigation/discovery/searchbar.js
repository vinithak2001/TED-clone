import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search TED talks"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{
        padding:2,
        borderColor:'#000',
        margin:13
      }}
    />
  );
};

export default MyComponent;