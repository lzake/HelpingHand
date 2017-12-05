import React from 'react';
import PropTypes from 'prop-types';
import {
    Jumbotron,
} from 'reactstrap';
import Sign from './Sign'

export default class Body extends React.Component {

    render() {
        return (
            <div ClassName="splash">
                <Jumbotron className="jumbo mb-0 rounded-0">
                    <style>
                        @import url( 'https://fonts.googleapis.com/css?family=Abril+Fatface');
                    </style>
                        <div className="maxWidth mt-5"><br/><br/>
                            <h4 className="display-8 text-white frontlog">Time to get started!</h4><br/>
                            <h6 className="lead text-white frontlog">Be the best
                                <em>
                                    <strong>You </strong>
                                </em>can be... today!</h6>
                            <p></p>
                            <p className="lead">
                                <Sign />
                            </p>
                    </div>

                </Jumbotron>
            </div>
        );
    };

}

Jumbotron.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    fluid: PropTypes.bool,
    className: PropTypes.string

}
