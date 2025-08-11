import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FiExternalLink } from 'react-icons/fi';
import { SearchContext } from '../Context/SearchContext';

const Home = () => {

    const { searchTerm } = useContext(SearchContext);

    const cards = [
        { title: "Counter", desc: "Counter with [undo] and [redo] functionalities", path: "/counter" },
        { title: "Dropdown", desc: "Dropdown with Outside click close", path: "/dropdown" },
        { title: "Toggle", desc: "Toggling by using useRef", path: "/toggle" },
        { title: "Array Flatten", desc: "Array flattening without inbuilt Array.flat()", path: "/arrflatten" },
        { title: "Object Flatten", desc: "Recursive flatten deeply nested objects", path: "/objflatten" },
        { title: "Count Down", desc: "Count down timer with [start] [pause] [reset]", path: "/countdowntimer" },
        { title: "Count Down Auto", desc: "Auto count down timer with 10sec", path: "/countdown" },
        { title: "Kanban Board", desc: "Moving forward task by clicking on task", path: "/kanban" },
        { title: "Pokemon", desc: "Fetching API by selecting options", path: "/pokiemon" },
        { title: "Input Form", desc: "Moving forward task by clicking on task", path: "/inputform" },
        { title: "Loading...", desc: "Coding soon...", path: "#" },
    ];

    const gradientClasses = [
        'gradient-1', 'gradient-2', 'gradient-3',
        'gradient-4', 'gradient-5', 'gradient-6'
    ];

    const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return (
        <div className='animated-bg'>
            <h1 className="text-center mb-4 gradient-title">
                React.js Machine Coding Practice
            </h1>

            <Row xs={1} md={2} lg={4} className="g-4">
                {filteredCards.map((card, index) => (
                    <Col key={index}>
                        <Card
                            className={`custom-card ${gradientClasses[index % gradientClasses.length]}`}
                            style={{ maxHeight: '190px', minHeight: '190px', maxWidth: '450px', minWidth: '400px' }} >
                            <Card.Header>{card.title}</Card.Header>
                            <Card.Body>
                                <Card.Title>{card.desc}</Card.Title>
                                {/* <Card.Text>{card.desc}</Card.Text> */}
                                <div className="mt-3 text-center">
                                    <Link to={card.path} style={{ textDecoration: 'none' }}>
                                        <Button variant="light" className="preview-btn">
                                            <FiExternalLink size={18} /> Click here to Preview
                                        </Button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Home;
