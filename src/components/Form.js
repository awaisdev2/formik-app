import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

export default function Forms() {
  return (
    <Container>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      </Form>
    </Container>
  )
}
