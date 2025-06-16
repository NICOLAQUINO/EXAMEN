import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

const OfertaCursos = () => {
  const cursos = [
    { nombre: 'Saya', descripcion: 'Danza afroboliviana', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/CORSO%2C_LA_PAZ_-_BOLIVIA%2C_SAYA_AFROBOLIVIANA_1.jpg/1200px-CORSO%2C_LA_PAZ_-_BOLIVIA%2C_SAYA_AFROBOLIVIANA_1.jpg', precio: 100 },
    { nombre: 'Tinku', descripcion: 'Ritual de combate andino', imagen: 'https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2025/2/11/tinkus_11.jpg?itok=h-Blq3ZN', precio: 120 },
    { nombre: 'Caporal', descripcion: 'Danza festiva y moderna', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdijPLkkIQ0k9pFr1NaRBt3DNzTD01a362Kw&s', precio: 110 }
  ];

  const [show, setShow] = useState(false);
  const [precio, setPrecio] = useState(0);

  const handleShow = (p) => {
    setPrecio(p);
    setShow(true);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center text-success mb-4">Oferta de Cursos</h2>
      <div className="row">
        {cursos.map((curso, i) => (
          <div className="col-md-4" key={i}>
            <Card className="mb-4 shadow-lg border-0 rounded-4">
              <Card.Img variant="top" src={curso.imagen} style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body className="text-center">
                <Card.Title className="text-primary fw-bold">{curso.nombre}</Card.Title>
                <Card.Text>{curso.descripcion}</Card.Text>
                <Button variant="outline-primary" onClick={() => handleShow(curso.precio)}>Ver precio</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title>Precio del Curso</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center fs-4">Precio: <strong>Bs {precio}</strong></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OfertaCursos;
