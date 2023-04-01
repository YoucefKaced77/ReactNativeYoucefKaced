import React, { Component } from 'react';
import Calendario from '../CalendarioComponent/CalendarioComponent';
import { EXCURSIONES } from '../../Comun/excursiones';

class Campobase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            excursiones: EXCURSIONES
        };
    }
    render() {
        return (
            <Calendario excursiones={this.state.excursiones} />
            );
        }
}

export default Campobase;