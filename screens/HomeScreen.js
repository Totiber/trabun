import * as React from 'react';
import { StyleSheet, ScrollView, View, Text, SafeAreaView } from 'react-native'
import { Card, Title, Paragraph, Button, Searchbar  } from 'react-native-paper'
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import MapView from 'react-native-maps';

import Icon from 'react-native-vector-icons/FontAwesome'


class HomeScreen extends React.Component{

            render() {
                  return(
                        <Title style={styles.titulo}>Bienvenido a TrabünClass</Title>
                  );
            }
}

class vistaInicio extends React.Component {
      // static navigationOptions = { title: 'Welcome', header: { visible:false } };
      static navigationOptions = {
            header: null,
            };
    
      render() {
            var {navigate} = this.props.navigation;
            return (
                  <ScrollView>
                  <Card>
                  <Card.Title
                  title="Card Title"
                  subtitle="Card Subtitle"
                  />
                  <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                  <Card.Content>
                        <Title>WEA</Title>
                        <Paragraph>Card content</Paragraph>
                  </Card.Content>
                  <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                  </Card.Actions>
                  </Card>
                  <Card>
                  <Card.Title
                  title="Card Title"
                  subtitle="Card Subtitle"
                  />
                  <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                  <Card.Content>
                        <Title>Card title</Title>
                        <Paragraph>Card content</Paragraph>
                  </Card.Content>
                  <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                  </Card.Actions>
                  </Card>
                  <Card>
                  <Card.Title
                  title="Card Title"
                  subtitle="Card Subtitle"
                  />
                  <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                  <Card.Content>
                        <Title>Card title</Title>
                        <Paragraph>Card content</Paragraph>
                  </Card.Content>
                  <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                  </Card.Actions>
                  </Card>
                  <Card>
                  <Card.Title
                  title="Card Title"
                  subtitle="Card Subtitle"
                  />
                  <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                  <Card.Content>
                        <Title>Card title</Title>
                        <Paragraph>Card content</Paragraph>
                  </Card.Content>
                  <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                  </Card.Actions>
                  </Card>
                  <Card>
                  <Card.Title
                  title="Card Title"
                  subtitle="Card Subtitle"
                  />
                  <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                  <Card.Content>
                        <Title>Card title</Title>
                        <Paragraph>Card content</Paragraph>
                  </Card.Content>
                  <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                  </Card.Actions>
                  </Card>
              </ScrollView>
           )
      }
}

class vistaPerfil extends React.Component {
      render() {
            return (
                  <View style={styles.container}>
                        <Text>Perfil</Text>
                  </View>
           )
      }
}
class vistaMapa extends React.Component {
      static navigationOptions = {
            header: null,
            };
      render() {
            return (
                  <View style={mapa.container}>
                  <MapView
                    style={mapa.map}
                    region={{
                      latitude: -28.574818,
                      longitude: -70.761574,
                      latitudeDelta: 0.015,
                      longitudeDelta: 0.0121,
                    }}
                  >
                  </MapView>
                </View>
           )
      }
}
class vistaBuscar extends React.Component {
      state = {
            firstQuery: '',
          };
          
      render() {
            const { firstQuery } = this.state;
            return (
                  <Searchbar
                  placeholder="Search"
                  onChangeText={query => { this.setState({ firstQuery: query }); }}
                  value={firstQuery}
                />
           )
      }
}

export default createMaterialBottomTabNavigator({  
      HomeScreen: { screen: HomeScreen},
      Inicio: { screen: vistaInicio,
            navigationOptions:{
                  tabBarLabel: 'Inicio',
                  tabBarIcon: ({tintColor})=>(
                        <Icon name="home" color={tintColor} size={24}/>
                  )
            }},
      Perfil:  { screen: vistaPerfil,
            navigationOptions:{
                  tabBarLabel: 'Perfil',
                  tabBarIcon: ({tintColor})=>(
                        <Icon name="user" color={tintColor} size={24}/>
                  )
            }},
      Mapa:  { screen: vistaMapa,
            navigationOptions:{
                  tabBarLabel: 'Mapa',
                  tabBarIcon: ({tintColor})=>(
                        <Icon name="map-marker" color={tintColor} size={24}/>
                  )
            }},
      Buscar:  { screen: vistaBuscar,
            navigationOptions:{
                  tabBarLabel: 'Buscar',
                  tabBarIcon: ({tintColor})=>(
                        <Icon name="search" color={tintColor} size={24}/>
                  )
            }},
},{
            initialRouteName: 'Inicio',
            order: ['Inicio', 'Buscar','Mapa' ,'Perfil'],
            activeTintColor: '#706F6F',
            
            barStyle: { backgroundColor: '#562583' },
})
      

  const styles = StyleSheet.create({
    container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
    },
  });

  
  const mapa = StyleSheet.create({
      container: {
        ...StyleSheet.absoluteFillObject,
        height: 600,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
     });
