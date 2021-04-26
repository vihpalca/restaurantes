import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native'
import { ActivityIndicator } from 'react-native'

export default function List({ navigation, textSearch = '' }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setData([]);
    loadRestaurants();
    return() => { 
      setData([]);
    };
  }, []);

  useEffect(() => {
    setData([]);
    loadRestaurants();
  }, [textSearch]);

  const loadRestaurants = async () => {
    setLoading(true);
    try {
      const resp = await (await fetch(`https://605d074f9386d200171ba209.mockapi.io/api/v1/restaurants?page=${page}&limit=10&search=${textSearch}`)).json();
      const _data = data.concat(resp.data);
      setData(_data);
      setPage(page + 1);
    } catch (error) {
      console.log(error);
    }
  }

  const renderFooter = () => {
    if (loading) return null;
    return (
      <ContainerLoading>
        <ActivityIndicator />
      </ContainerLoading>
    );
  };

  renderItem = ({ item }) => (
    <Card onPress={() => gotoDetail(item.id)}>
      <ImageCard source={{uri: item.image}}>
        <RestaurantName>{item.name}</RestaurantName>
      </ImageCard>
    </Card>
  );

  const gotoDetail = (id) => {
    navigation.navigate('Detail', { id });
  }

  return (
    <Wrapper>
      <Title>Restaurantes</Title>
        <SafeArea>
          <ListRestaurants
            style={{ marginTop: 0 }}
            contentContainerStyle={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={'2'}
            itemSeparatorComponent={'true'}
            onEndReached={loadRestaurants}
            onEndReachedThreshold={1}
            ListFooterComponent={renderFooter}
          />
        </SafeArea>
    </Wrapper>
  );
}


const Wrapper = styled.View `
  paddingHorizontal: 33;
  display: flex;
  flex: 1;
`

const ListRestaurants = styled.FlatList `
  display: flex;
  flex: 1;
`

const SafeArea = styled.SafeAreaView `
  display: flex;
  flex: 1;
`

const Title = styled.Text `
  fontFamily: PoppinsBold;
  fontStyle: normal;
  fontSize: 15;
  color: #333333;
`

const Card = styled.TouchableOpacity `
  width: 148;
  height: 160;
  marginTop: 20;
  marginRight: 50;
`

const ImageCard = styled.ImageBackground `
  flex: 1;
  display: flex;
  paddingVertical: 10;
  paddingHorizontal: 10;
  justifyContent: flex-end;
`

const RestaurantName = styled.Text `
  fontFamily: PoppinsBold;
  fontStyle: normal;
  fontSize: 16px;
  lineHeight: 18;
  color: #FFFFFF;
  flex-grow: 0;
  margin: 2px 0px;
`

const ContainerLoading = styled.View `
  alignSelf: center;
  marginVertical: 20;
`