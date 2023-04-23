import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Card } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import { baseUrl } from '../../Comun/comun';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    title: {
        color: 'chocolate',
        padding: 10,
        fontSize: 20,
        position: 'absolute',
        left: 0,
        padding: 10,
        fontSize: 30,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
    },
    card: {
        borderRadius: 10,
        overflow: 'hidden',
    },
    imageContainer: {
        position: 'relative',
    },
  });  

function RenderItem(props) {
    
        const item = props.item;
        
        if (item != null) {
            return(
                <Card containerStyle={styles.card} >
                <View style={styles.imageContainer}>
                  <Card.Image
                    source={{uri:baseUrl + item.imagen}}
                    style={styles.image}
                  ></Card.Image>
                  <Text style={styles.title}>{item.nombre}</Text>
                  <Text style={{margin: 20}}>
                        {item.descripcion}
                    </Text>
                </View>
              </Card>
            );
        }  
        else {
            return(<View></View>);
        }
}

const mapStateToProps = state => {
    return {
        actividades: state.actividades,
        excursiones: state.excursiones,
        cabeceras: state.cabeceras
    }
}

class Home extends Component {


    render() {
        
        return(
            <ScrollView>
                <RenderItem item={this.props.cabeceras.cabeceras.filter((cabecera) => cabecera.destacado)[0]} />
                <RenderItem item={this.props.excursiones.excursiones.filter((excursion) => excursion.destacado)[0]} />
                <RenderItem item={this.props.actividades.actividades.filter((actividad) => actividad.destacado)[0]} />
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Home);