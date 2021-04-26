import React from 'react';
import styled from 'styled-components/native'
import Header from '../components/Home/Header';
import ContentList from '../components/Home/ContentList';


export default function Home({ navigation }) {
  return (
    <Wrapper>
      <Header />
      <ContentList navigation={navigation} />
    </Wrapper>
  );
}

const Wrapper = styled.View `
  flex: 1;
  backgroundColor: #fff;
`