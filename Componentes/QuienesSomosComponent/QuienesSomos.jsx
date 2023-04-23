import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Card } from '@rneui/themed';
import { SafeAreaView, FlatList } from 'react-native';
import { ListItem, Avatar } from '@rneui/themed';
import { baseUrl } from '../../Comun/comun';
import { connect } from 'react-redux';


function RenderQuienesSomos() {

    return(
        <Card>
            <Card.Title>Un poco de historia</Card.Title>  
            <Card.Divider/>
            <Text style={{margin: 20}}>
            El nacimiento del club de montaña Gaztaroa se remonta a la 
            primavera de 1976 cuando jóvenes aficionados a la montaña y 
            pertenecientes a un club juvenil decidieron crear la sección 
            montañera de dicho club. Fueron unos comienzos duros debido sobre 
            todo a la situación política de entonces. Gracias al esfuerzo 
            económico de sus socios y socias se logró alquilar una bajera. 
            Gaztaroa ya tenía su sede social.
            Desde aquí queremos hacer llegar nuestro agradecimiento a todos 
            los montañeros y montañeras que alguna vez habéis pasado por el 
            club aportando vuestro granito de arena.
            Gracias!
            </Text>
        </Card> 
    );

}

const mapStateToProps = state => {
    return {
        actividades: state.actividades
    }
}

class QuienesSomos extends Component {

    render() {
        const { navigate } = this.props.navigation;    
        const renderItem = ({item, index}) => {
            console.log({uri:baseUrl + item.imagen})
            return (
                <Card>
                    <ListItem
                    key={index}
                    bottomDivider>
                        <Avatar source={{uri:baseUrl + item.imagen}} />
                        <ListItem.Content>
                            <ListItem.Title>{item.nombre}</ListItem.Title>
                            <ListItem.Subtitle>{item.descripcion}</ListItem.Subtitle>
                        </ListItem.Content>   
                    </ListItem> 
                </Card>
            );
        };
        return(
            <SafeAreaView>
                <RenderQuienesSomos/>
                <FlatList 
                    data={this.props.actividades.actividades}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </SafeAreaView>
        );
    }
}

export default connect(mapStateToProps)(QuienesSomos);