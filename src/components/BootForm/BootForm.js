import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BootForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        {/* <Form.Label>Email address</Form.Label> */}
        <h5>Enter Email To Receive Weekly Updates</h5>
        <Form.Control type="email" placeholder="Enter email"/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" style={{ float: 'right' }}>
        Submit
      </Button>
    </Form>
  );
}

export default BootForm;