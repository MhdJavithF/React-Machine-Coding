import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Home = () => {
    return (
        <Row xs={1} md={2} lg={4}>
            <Col>
                <Link to="/counter" style={{ textDecoration: 'none' }}>
                    <Card className='mt-4' style={{ width: '18rem', cursor: 'pointer', maxHeight:'195px', minHeight:'195px' }}>
                        <Card.Header>Counter</Card.Header>
                        <Card.Body>
                            <Card.Title>Counter with undo and redo functionalities</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link to="/dropdown" style={{ textDecoration: 'none' }}>
                    <Card className='mt-4' style={{ width: '18rem', cursor: 'pointer', maxHeight:'195px', minHeight:'195px' }}>
                        <Card.Header>Dropdown</Card.Header>
                        <Card.Body>
                            <Card.Title>Dropdown with Outside click close</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link to="/refdemo" style={{ textDecoration: 'none' }}>
                    <Card className='mt-4' style={{ width: '18rem', cursor: 'pointer', maxHeight:'195px', minHeight:'195px' }}>
                        <Card.Header>Toggle</Card.Header>
                        <Card.Body>
                            <Card.Title>Toggling by using useRef</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link to="/arrflatten" style={{ textDecoration: 'none' }}>
                    <Card className='mt-4' style={{ width: '18rem', cursor: 'pointer', maxHeight:'195px', minHeight:'195px' }}>
                        <Card.Header>Array Flatten</Card.Header>
                        <Card.Body>
                            <Card.Title>Array flattening without inbuilt Array.flat()</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link to="/objfllaten" style={{ textDecoration: 'none' }}>
                    <Card className='mt-4' style={{ width: '18rem', cursor: 'pointer', maxHeight:'195px', minHeight:'195px' }}>
                        <Card.Header>Object Flatten</Card.Header>
                        <Card.Body>
                            <Card.Title>Recursive flatten deeply nested objects</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link to="/countdowntimer" style={{ textDecoration: 'none' }}>
                    <Card className='mt-4' style={{ width: '18rem', cursor: 'pointer', maxHeight:'195px', minHeight:'195px' }}>
                        <Card.Header>Count Down</Card.Header>
                        <Card.Body>
                            <Card.Title>Count down timer with [start] [pause] [reset]</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link to="/countdown" style={{ textDecoration: 'none' }}>
                    <Card className='mt-4' style={{ width: '18rem', cursor: 'pointer', maxHeight:'195px', minHeight:'195px' }}>
                        <Card.Header>Count Down</Card.Header>
                        <Card.Body>
                            <Card.Title>Auto count down timer with 10sec</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link to="/kanban" style={{ textDecoration: 'none' }}>
                    <Card className='mt-4' style={{ width: '18rem', cursor: 'pointer', maxHeight:'195px', minHeight:'195px' }}>
                        <Card.Header>Kanban Board</Card.Header>
                        <Card.Body>
                            <Card.Title>Moving forward task by clicking on task</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link to="/pokiemon" style={{ textDecoration: 'none' }}>
                    <Card className='mt-4' style={{ width: '18rem', cursor: 'pointer', maxHeight:'195px', minHeight:'195px' }}>
                        <Card.Header>Pokiemon</Card.Header>
                        <Card.Body>
                            <Card.Title>Fetching api by selecting options</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link to="/inputform" style={{ textDecoration: 'none' }}>
                    <Card className='mt-4' style={{ width: '18rem', cursor: 'pointer', maxHeight:'195px', minHeight:'195px' }}>
                        <Card.Header>Input Form</Card.Header>
                        <Card.Body>
                            <Card.Title>Moving forward task by clicking on task</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Card className='mt-4' style={{ width: '18rem', cursor: 'pointer', maxHeight:'195px', minHeight:'195px' }}>
                        <Card.Header>Loading...</Card.Header>
                        <Card.Body>
                            <Card.Title>Coming soon...</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        </Row>
    )
}

export default Home