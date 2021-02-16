import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'reactstrap';
import './app.css'
import Menu from './layout/Menu'
const App = props => {


    return (
        <div>
            <Container>
                <Menu></Menu>
            </Container>
        </div>
    )
}

export default App