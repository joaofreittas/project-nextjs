import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import Menu from './layout/Menu';

export default class Sobre extends Component {


    render(){
        return (
            <div>
                <Container>
                    <Menu></Menu>
                </Container>
            </div>
        )
    }
}