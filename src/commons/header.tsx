import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid } from 'react-bootstrap';
import { HeaderProps } from '../types/header';
class Header extends React.Component<HeaderProps, any> {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="jumbotron text-center">
                    {this.props.title}
                    <h3>
                        <Link to="/"><Button>Main Page</Button></Link>
                    </h3>
                </div>
                <Grid>
                    {this.props.children}
                </Grid>
            </div>
        );
    }
}

export default Header;