import React, { useState } from 'react';
import styled from 'styled-components/native'
import List from '../Common/List';

import SearchIcon from '../../../assets/icons/search.png'

export default function ContentList({ navigation }) {
  const [value, setValue] = useState('');

  return (
    <ContainerHub>
      <ContainerInput>
        <ImageSearch source={SearchIcon} />
        <InputSearch 
          numberOfLines={1}
          onChangeText={text => setValue(text)}
          placeholder="Encontre um restaurante"
          value={value}
          onSubmitEditing={() => navigation.navigate('Search', { text: value })}
          //inlineImageLeft='search'
        />
      </ContainerInput>
      <List navigation={navigation} textSearch={''}/>
    </ContainerHub>
  );
}

const ContainerHub = styled.View `
  flex: 1;
  background: #FFFFFF;
  boxShadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
  borderTopLeftRadius: 32;
  borderTopRightRadius: 32;
  marginTop: -30;
`

const ContainerInput = styled.View `
  display: flex;
  flexDirection: row;
  alignItems: center;
  marginHorizontal: 30;
  marginBottom: 30;
`

const InputSearch = styled.TextInput `
  fontFamily: Poppins;
  fontStyle: normal;
  fontWeight: normal;
  fontSize: 14px;
  lineHeight: 21px;
  color: #666666;
  background: #FFFFFF;
  border: 1px solid #E6E6E6;
  width: 100%;
  height: 50;
  borderRadius: 8;
  marginTop: 30;
  paddingHorizontal: 40;
`

const ImageSearch = styled.Image `
  marginTop: 28;
  marginRight: -30;
  zIndex: 10;
`