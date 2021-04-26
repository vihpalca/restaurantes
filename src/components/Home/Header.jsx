import React from 'react';
import styled from 'styled-components/native'
import ImageHeader from '../../../assets/images/header-home.png'


export default function Header() {
  return (
    <ImgContainer source={ImageHeader}>
      <Title>Descubra novos {"\n"}sabores</Title>
      <SubTitle>Aqui eu converso com você sobre {"\n"}nossa proposta</SubTitle>
    </ImgContainer>
  );
}

const ImgContainer = styled.ImageBackground `
  flex: 1;
  resizeMode: cover;
  max-height: 313;
  paddingVertical: 40;
  paddingHorizontal: 33;
`

const Title = styled.Text `
  fontFamily: PoppinsBold;
  fontStyle: normal;
  fontSize: 24;
  color: #333333;
`

const SubTitle = styled.Text `
  fontFamily: Poppins;
  fontStyle: normal;
  fontWeight: normal;
  fontSize: 18;
  lineHeight: 27;
  color: #333333;
  marginTop: 25;
`