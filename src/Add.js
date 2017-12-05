import React from 'react';
import {
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

export default class Add extends React.Component {
    render() {
        return (
            <div className="container maxWidth mt-5">
                <Form className="bg-info text-white">
                    <FormGroup row className="maxWidth mt-5 bg-info text-white">
                        <Label for="newtitle" sm={1}>Title</Label>
                        <Col sm={10}>
                            <Input
                                type="text"
                                name="newtitle"
                                id="newtitle"
                                placeholder="What do you want to call this list item"/>
                        </Col>
                    </FormGroup>

                    <FormGroup row className="maxWidth mt-5 bg-info text-white">
                        <Label for="newdescription" sm={1}>Description</Label>
                        <Col sm={10}>
                            <Input
                                type="textarea"
                                name="newdescription"
                                id="newdescription"
                                placeholder="Tell me all about it 🙄"/>
                        </Col>
                    </FormGroup>

                    <FormGroup check row className="maxWidth mt-5 bg-info text-white">
                        <Col
                            sm={{
                            size: 10,
                            offset: 2
                        }}>
                            <Button className="btn-round-lg btn-lg px-4 btn-secondary whiteBG">Add item to list</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}