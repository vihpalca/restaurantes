import React from 'react';
import styled from 'styled-components/native'
import ArrowBackImage from '../../../assets/icons/arrow_back_white.png'


export default function Header({navigation, image}) {
  return (
    <ImgContainer source={{uri: image}}>
      <ButtonArrow onPress={() => navigation.goBack()}>
        <ArrowBack source={ArrowBackImage} />
      </ButtonArrow>
    </ImgContainer>
  );
}

const ImgContainer = styled.ImageBackground `
  flex: 1;
  resizeMode: cover;
  height: 159;
  paddingVertical: 40;
  paddingHorizontal: 33;
`

const ButtonArrow = styled.TouchableOpacity ``

const ArrowBack = styled.Image ``

