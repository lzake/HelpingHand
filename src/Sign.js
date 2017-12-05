import React from 'react';
import {Button, Modal, ModalBody} from 'reactstrap';

export default class Sign extends React.Component {

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
            <div>
                <style>
                    @import url( 'https://fonts.googleapis.com/css?family=Lobster');
                </style>

                <Button
                    className="btn mr-2 mt-2 p-3 btn-round h2 whiteoutline"
                    color="info"
                    onClick={this.toggleModal}>
                    Login / Sign-up
                    <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggleModal}
                        className={this.props.className}>

                        <ModalBody>
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="flip">
                                            <div className={this.state.cardStyle}>
                                                <div className="face front">
                                                    <div className="panel panel-default">
                                                        <form className="form-horizontal">

                                                            <br/>

                                                            <span className="logofont">HelpingHand</span>
                                                            <br/>
                                                            <br/>
                                                            <br/>
                                                            <br/>
                                                            <label className="createorlog">Log in and lets get started!</label>
                                                            <br/>
                                                            <br/>

                                                            <input
                                                                name="userName"
                                                                className="form-control"
                                                                placeholder="Email"
                                                                type="email"
                                                                minlength="6"
                                                                maxLength="40"
                                                                required/>
                                                            <input
                                                                name="password"
                                                                className="form-control"
                                                                placeholder="Password"
                                                                type="password"
                                                                minlength="6"
                                                                maxLength="40"
                                                                required/>
                                                            <button className="btn btn-primary btn-block" type="submit">LOG IN</button>
                                                            <br/><br/><br/><br/>
                                                            <p className="text-center">
                                                                <button type="button" className="btn btn-outline-primary btn-round">
                                                                    <a
                                                                        className="createorlog"
                                                                        onClick={this
                                                                        .flipper1
                                                                        .bind(this)}>Create new account?</a>

                                                                </button>
                                                                <br/><br/>
                                                            </p>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="face back">
                                                    <div className="panel panel-default">
                                                        <form className="form-horizontal" data-toggle="validator" role="form">
                                                            <br/>
                                                            <span className="logofont">HelpingHand</span>
                                                            <br/>
                                                            <br/>
                                                            <input
                                                                name="userName"
                                                                className="form-control"
                                                                placeholder="Username"
                                                                minlength="6"
                                                                maxLength="40"
                                                                type="text"
                                                                required/>
                                                            <input
                                                                name="email1"
                                                                className="form-control"
                                                                placeholder="Email"
                                                                type="email"
                                                                minlength="6"
                                                                maxLength="40"
                                                                required/>
                                                            <input
                                                                name="email2"
                                                                className="form-control"
                                                                placeholder="Confirm Email"
                                                                type="email"
                                                                minlength="6"
                                                                maxLength="40"
                                                                required/>
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                placeholder="Password (min 6 characters)"
                                                                minlength="6"
                                                                maxLength="20"
                                                                id="inputPassword"
                                                                required/>
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                minlength="6"
                                                                maxLength="20"
                                                                placeholder="Confirm Password"
                                                                data-match="#inputPassword"
                                                                data-match-error="Whoops, these don't match"
                                                                required/>
                                                            <button
                                                                className="btn btn-primary btn-block"
                                                                type="submit"
                                                                onClick={this.validateFields, console.log()}>SIGN UP</button><br/>
                                                            <p className="text-center">
                                                                <button type="button" className="btn btn-outline-primary btn-round">
                                                                    <a
                                                                        className="fliper-btn createorlog"
                                                                        onClick={this
                                                                        .flipper2
                                                                        .bind(this)}>Already have an account?</a>
                                                                </button>
                                                            </p>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>

                    </Modal>

                </Button>

            </div>
        );
    }
}