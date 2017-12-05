import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button
} from 'reactstrap';
import LoginPage from './LoginPage'

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this
            .toggle
            .bind(this);
        this.toggleModal = this
            .toggleModal
            .bind(this);
        this.state = {
            isOpen: false,
            modal: false,
            cardStyle: 'card'
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    toggleModal() {
        this.setState({
            modal: !this.state.modal
        });
    }

    flipper1 = (e) => {
        e.preventDefault();
        this.setState({cardStyle: 'card flipped'})
    }

    flipper2 = (e) => {
        e.preventDefault();
        this.setState({cardStyle: 'card'})
    }
    render() {
        return (
            <div className="sticky-top">
                <style>
                    @import url( 'https://fonts.googleapis.com/css?family=Lobster');
                </style>
                <Navbar
                    color="faded"
                    light
                    expand="md"
                    className="navbar pl-5 bg-gray p-3 minny text-nowrap navbar-light navvie">
                    <NavbarBrand href="/">
                        <span className="logofont">HelpingHand</span>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} className="mt-3 pull-right border-white"/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto float-right" navbar>

                            <NavItem className="pull-right">
                                <LoginPage />
                            </NavItem>

                            <NavItem className="pull-right">
                                <Button
                                    className="btn mr-2 mt-2 p-3 btn-round h2 whiteoutline"
                                    color="info"
                                    href="/map/">
                                    Look around you!
                                </Button>
                            </NavItem>
                            <NavItem className="desktop-only  pr-5">&nbsp;</NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
