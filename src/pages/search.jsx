import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native'
import Header from '../components/Search/Header';
import List from '../components/Common/List';

export default function Search({ route, navigation }) {
  const [textSearch, setTextSearch] = useState('');

  const changeTextSearch = (value) => {
    setTextSearch(value);
  }

  useEffect(() => {
    let { text } = route.params;
    setTextSearch(text);
    return() => setTextSearch('');
  }, []);

  return (
    <Wrapper>
      <Header navigation={navigation} textSearch={textSearch} changeText={changeTextSearch}/>
      {textSearch !== '' && (
        <List navigation={navigation} textSearch={textSearch}  />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.View `
  flex: 1;
  backgroundColor: #fff;
`

