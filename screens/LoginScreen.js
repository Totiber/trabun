import * as React from 'react';
import {  StyleSheet,
    ImageBackground,
    Image,
    Text, View,
} from 'react-native'
import { TouchableOpacity, TextInput, Card, Title, Paragraph, Button } from 'react-native-paper'

import Fondotrabun from '../img/background.png'
import logo from '../img/logo2.jpg'


class LoginScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = { text: '', text2: 'Ingrese su contraseña' };
    }

    static navigationOptions = {
        header: null,
        };

    render() {
    var {navigate} = this.props.navigation;
      return (
          <ImageBackground source={Fondotrabun} style={styles.backgroundContainer}>
              <Card style={styles.tarjeta}>
              <Card.Content style={styles.contenido} >
                <Image source={logo} style={styles.logo}></Image>
  
                <Title style={styles.titulo}>Bienvenido a TrabünClass</Title>
  
                <View style={styles.borderStyle}>
                <TextInput mode='outlined' style={styles.input} placeholder="Ingresa tu nombre usuario" label="Ingresa tu nombre usuario"/>
                </View>
                
                <TextInput mode='outlined' style={styles.input} placeholder="Ingresa tu contraseña" label="Ingresa tu contraseña"/>
  
                <Button mode='outlined' style={styles.boton} onPress={() => this.props.navigation.navigate('HomeScreen')} >
                        <Text style={styles.texto}  >
                        Ingresar</Text>
                </Button>

                <Paragraph>¿Haz olvidado tu contraseña?</Paragraph>
              </Card.Content>
              </Card>
          </ImageBackground>
      );
    }
  }

  export default LoginScreen;

  const styles = StyleSheet.create({
    contenido: {
          flex: 0,
          justifyContent: 'center',
          alignItems: 'center',
    },
    tarjeta: {
          flex: 0,
          width: 300,
          height: 500,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
    },
    backgroundContainer: {
          flex: 1,
          width: null,
          height: null,
          justifyContent: 'center',
          alignItems: 'center',
        },
    logo: {
          flex: 0,
          width: 150,
          height: 150,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
      },
      input: {
          flex: 0,
          height: 50,
          width: 240,
          justifyContent: 'center',
          alignItems: 'stretch',
          marginBottom: 25,
          borderRadius: 25,
          // overflow:"hidden",
    },
      titulo: {
            height: 50,
            justifyContent: 'center',
      },
      boton: {
            width: 200,
            marginBottom: 15,
            borderRadius: 25,
            backgroundColor: '#562583',
      },
      texto: {
            color: 'white',
            fontSize: 16,
            textAlign: 'center',
      }
  });
  