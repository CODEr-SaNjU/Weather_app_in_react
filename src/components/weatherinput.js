
import React from 'react'
import Card from "react-bootstrap/Card";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'


const Weatherinput = (props) => {
    return (
        <>
            <Card className="bg-info text-dark card ">
            <Card.Title >Search your city weather here</Card.Title>
            <Card.Text>
                <form onSubmit={props.getWeather}>
                    <Form.Row>
                        <Col sm={10}>
                            <Form.Control name="city" placeholder="Search your city weather here " />
                        </Col>
                        <Col sm={2}>
                            <Button type="submit" variant="outline-warning">Search</Button>
                        </Col>
                    </Form.Row>
                </form>
            </Card.Text>
            </Card>
        </>
    )
}




export default Weatherinput;
