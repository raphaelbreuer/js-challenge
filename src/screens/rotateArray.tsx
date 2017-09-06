
import * as React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Header from '../commons/header';
import { RotateState } from '../types/rotate';
class RotateArray extends React.Component<{}, RotateState> {
    constructor() {
        super();
        this.state = {
            firstArray:
            [[1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]]
        };
    }
    //90 degrees each time
    rotateArray = async () => {
        (async () => {
            let rotate: any = [];
            await this.state.firstArray.forEach((e: any) => {
                rotate.push([]);
            });
            await this.state.firstArray.forEach((e: any) => {
                let counter = 0;
                e.forEach((e: any) => {
                    rotate[counter++].unshift(e);
                });
            });
            this.setState({ firstArray: rotate });
        })();
    }
    clickHandler = () => {
        this.rotateArray();
    }
    render() {
        return (

            <Header title="Rotate Array">
                <Row className="text-center">
                    {this.state.firstArray[0]}<br />
                    {this.state.firstArray[1]}<br />
                    {this.state.firstArray[2]}<br />
                    <Col sm={2}>
                        <Button onClick={this.clickHandler}>Rotate</Button>
                    </Col>
                </Row>
            </Header>
        );
    }
}

export default RotateArray;