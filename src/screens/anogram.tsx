import * as React from 'react';
import { Button, Col, Row, FormGroup, FormControl } from 'react-bootstrap';
import Header from '../commons/header';
import { AnogramState } from '../types/anogram';
class Anogram extends React.Component<{}, AnogramState> {
    constructor() {
        super();
        this.state = {
            obj: {
                word1: '',
                word2: '',
                answer: ''
            }
        };
    }
    anogramChecker = async (one: string, two: string) => {
        let mapper = new Map();
        let state = Object.assign({}, this.state);
        state.obj.answer = 'Match';
        this.setState(state);
        let first = one.split('');
        let second = two.split('');
        if (second.length !== first.length) {
            state.obj.answer = 'Not Match';
            this.setState(state);
            return;
        }
        await first.forEach(e => {
            mapper.set(e, e);
        });
        second.forEach(e => {
            if (!mapper.get(e)) {
                state.obj.answer = 'Not Match';
                this.setState(state);
            }
        });
    }
    clickHandler = () => {
        this.anogramChecker(this.state.obj.word1, this.state.obj.word2);
    }
    changeHandler = (e: any) => {
        const state = Object.assign({}, this.state);
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    render() {
        return (

            <Header title="Anogram Checker">
                <Row>
                    <FormGroup>
                        <Col className="text-center" sm={4}>
                            <FormControl name="word1" value={this.state.obj.word1} onChange={this.changeHandler} />
                        </Col>
                        <Col sm={4}>
                            <FormControl name="word2" value={this.state.obj.word2} onChange={this.changeHandler} />
                        </Col>
                        <Col sm={2}>
                            <Button onClick={this.clickHandler}>Check</Button>
                        </Col>
                        <Col md={2} xs={12}>
                            <p>Result: {this.state.obj.answer}</p>
                        </Col>
                    </FormGroup>
                </Row>
            </Header>
        );
    }
}

export default Anogram;