import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact (){
    return (
    <div className="contact">
    <Container >
    <Row>
    <Col xs={6}><h1>Contact Me</h1></Col>
    <Col><p>
I am currently searching for opportunities for a front-end developer role.
If there is any vacancy my inbox is always open. Whether
you have any further questions or just want to say hi,
I will do my best to get back to you!
</p></Col>
</Row>
</Container>
    </div>
   )}
   
export default Contact;