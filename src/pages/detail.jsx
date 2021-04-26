import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native'
import Header from '../components/Detail/Header';
import Description from '../components/Detail/Description';

export default function Detail({ route, navigation }) {
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    loadRestaurant();
    return() => setRestaurant({});
  }, []);

  const loadRestaurant = async () => {
    const { id } = route.params;
    if (!id) navigation.navigate('Home');

    try {
      const resp = await (await fetch(`https://605d074f9386d200171ba209.mockapi.io/api/v1/restaurants/${id}`)).json();
      setRestaurant(resp.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {restaurant ? (
        <Wrapper>
          <Header navigation={navigation} image={restaurant.image} />
          <Description restaurant={restaurant} />
        </Wrapper>
        ) : (
          <Loading />
        )}
    </>
  );
}

const Wrapper = styled.ScrollView `
  flex: 1;
  backgroundColor: #fff;
`

const Loading = styled.ActivityIndicator ``
