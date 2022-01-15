import React,{useState} from 'react'
import { Button , Form ,Modal } from 'react-bootstrap';
import ReactDOM from 'react-dom';
const AddMovie = ({ setNewMovie }) => {
    const [show, setShow] = useState(false);
    const [newMovie, setMovie] = useState({
      name: "",
      rating: "",
      description: "",
      img: "",
    });
    const styleObject = {borderRadius :70}
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (e) => {
      setMovie({ ...newMovie, [e.target.name]: e.target.value });
    };
    return (
        <div>
            <>
      <Button style={styleObject} variant="primary" onClick={handleShow}>
      Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Movie name</Form.Label>
    <Form.Control type="text" name='name' onChange={handleChange} required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Rating</Form.Label>
    <Form.Control type="text"  name='rating'onChange={handleChange} required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text-area" name='description' onChange={handleChange} required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Url</Form.Label>
    <Form.Control type="url" name='img' onChange={handleChange} required/>
  </Form.Group>
</Form>  
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
                setNewMovie(newMovie)
              handleClose()
          }} >
           Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        </div>
    )
}

export default AddMovie
