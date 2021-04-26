import React from 'react';
import styled from 'styled-components/native'

export default function Description({ restaurant }) {
  return (
    <ContainerHub>
      <ContainerTitle>
        <Logo source={{uri: restaurant.logo}} />
        <Name>{restaurant.name}</Name>
      </ContainerTitle>
      <ContainerDescription>
        <Title>Descrição</Title>
        <DescriptionText>{restaurant.description}</DescriptionText>
      </ContainerDescription>
      <ContainerDescription>
        <Title>Contato</Title>
        <DescriptionText>{restaurant.telephone}</DescriptionText>
        <DescriptionText>{restaurant.website}</DescriptionText>
      </ContainerDescription>
      <ContainerDescription>
        <Title>Faixa de preço</Title>
        <DescriptionText>{restaurant.price_range}</DescriptionText>
      </ContainerDescription>
      <ContainerDescription>
        <HorizontalLine />
      </ContainerDescription>
      <ContainerDescription>
        <Title>Horário de funcionamento</Title>
        <DescriptionText>{restaurant.opening_hours}</DescriptionText>
      </ContainerDescription>
      <ContainerDescription>
        <Title>Formas de pagamento</Title>
        <DescriptionText>{restaurant.payment_methods}</DescriptionText>
      </ContainerDescription>
      
    </ContainerHub>
  );
}

const ContainerHub = styled.View `
  flex: 0.5;
  background: #FFFFFF;
  boxShadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
  borderTopLeftRadius: 32;
  borderTopRightRadius: 32;
  paddingHorizontal: 30;
`
const Logo = styled.Image `
  height: 119;
  width: 119;
  borderRadius: 200;
  borderWidth: 1px;
  borderColor: #fff;
`

const ContainerTitle = styled.View `
  display: flex;
  alignItems: center;
  marginTop: -90;
`

const Name = styled.Text `
  font-family: PoppinsBold;
  font-style: normal;
  font-size: 20px;
  color: #333333;
  marginTop: 20;
`

const ContainerDescription = styled.View `
  marginTop: 30;
`

const Title = styled.Text `
  font-family: PoppinsBold;
  font-style: normal;
  font-size: 15px;
  color: #333333;
`

const DescriptionText = styled.Text `
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #808080;
`

const HorizontalLine = styled.View `
  borderBottomColor: #CCCCCC;
  borderBottomWidth: 1;
`