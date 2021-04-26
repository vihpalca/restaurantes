import React, { useState } from 'react';
import styled from 'styled-components/native';
import ArrowBackImage from '../../../assets/icons/arrow_back_black.png';
import SearchIcon from '../../../assets/icons/search.png';

export default function Header(props) {
  const [value, setValue] = useState('');

  return (
    <ContainerHeader>
      <ButtonArrow onPress={() => props.navigation.goBack()}>
        <ArrowBack source={ArrowBackImage} />
      </ButtonArrow>  
      <ContainerTitles>
        <TextSearch>Resultados para</TextSearch>
        <ValueSearch>{ props.textSearch }</ValueSearch>
      </ContainerTitles>
      <ContainerInput>
        <ImageSearch source={SearchIcon} />
        <InputSearch 
          numberOfLines={1}
          onChangeText={text => setValue(text)}
          placeholder="Encontre um restaurante"
          value={value}
          onSubmitEditing={() => props.changeText(value)}
          inlineImageLeft='search'
        />
      </ContainerInput>
    </ContainerHeader>
  );
}

const ContainerHeader = styled.View `
  flex: 0.22;
  paddingVertical: 40;
  paddingHorizontal: 33;
  backgroundColor: #fff;
`

const ButtonArrow = styled.TouchableOpacity `
  width: 10;
  height: 10;
  marginBottom: -15;
  backgroundColor: #fff;
`

const ContainerTitles = styled.View `
  display: flex;
  flexDirection: column;
  alignItems: center;
  justifyContent: center;
  marginTop: 10;
`

const TextSearch = styled.Text `
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #808080;
`

const ValueSearch = styled.Text `
  font-family: PoppinsBold;
  font-style: normal;
  font-size: 16px;
  color: #333333;
  marginTop: 5;
`

const ArrowBack = styled.Image ``


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

const ContainerInput = styled.View `
  display: flex;
  flexDirection: row;
  alignItems: center;
  marginBottom: 30;
`
