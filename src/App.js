import './App.css';
import ContactForm from './component/ContactForm';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactList from './component/ContactList';

function App() {
  return (
    <div>
      <h1 className="title">연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm/>
          </Col>
          <Col>
            <ContactList/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
