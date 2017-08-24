import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';
import Header from '../commons/header';
class Main extends React.Component<{}, {}> {
    constructor() {
        super();
    }

    render() {
        return (
            <Header title="Js Challenge">
                <Row>
                    <Col>
                        <span> <Link to="/anogram"><Button>Anogram Page</Button></Link> </span>
                    </Col>
                </Row>
            </Header>
        );
    }
}

export default Main;