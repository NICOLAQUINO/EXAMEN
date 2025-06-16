import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Home = () => (
  <div className="container py-5">
    <h2 className="text-center mb-4 text-danger fw-bold">Danzas Propias De La Academia</h2>
    <Accordion defaultActiveKey="0" alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Huayño – Región Andina</Accordion.Header>
        <Accordion.Body>
          Una danza de ritmo sereno originaria de las tierras andinas, el <strong>Huayño</strong> conserva un aire melancólico propio de las montañas. Tradicionalmente se baila en parejas que forman grandes círculos o filas enlazadas, tomados de la mano al compás de charangos y quenas. Aunque su tono inicial era triste y lamentoso, hoy el Huayño alterna versos de amor y nostalgia, recordando la vida campesina en las alturas de los Andes.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Morenada – Región Altiplano</Accordion.Header>
        <Accordion.Body>
          De las frías alturas de Oruro y Potosí surge la <strong>Morenada</strong>, un baile solemne del Altiplano boliviano. Su temática rememora la llegada de esclavos africanos a las minas de plata durante la colonia. Los danzantes llevan trajes pesados y máscaras negras con plumas largas, simbolizando la nieve de las montañas. El paso arrastrado refleja el esfuerzo de los mineros, y su ritmo profundo transmite orgullo y resistencia cultural.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Pujllay – Región de los Valles</Accordion.Header>
        <Accordion.Body>
          Originaria de Tarabuco, la <strong>Pujllay</strong> es una danza festiva que honra a la Pachamama. Recrea cómicamente las luchas indígenas contra los conquistadores con trajes coloridos y movimiento enérgico. Los bailarines imitan antiguos uniformes de batalla con moñas, espuelas y cascabeles, zapateando sobre la tierra fértil en una coreografía vibrante y alegre.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Taquirari – Región Oriente</Accordion.Header>
        <Accordion.Body>
          El <strong>Taquirari</strong> representa la alegría de los pueblos tropicales de Santa Cruz, Beni y Pando. Con ritmo veloz y tono romántico, sus pasos imitan el trote de caballos en las pampas orientales. Es una danza que se baila con sonrisas, pañuelos y mucho ritmo, evocando la vida junto a los ríos y la naturaleza del oriente boliviano.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Arete Guasu – Región del Chaco</Accordion.Header>
        <Accordion.Body>
          La <strong>Arete Guasu</strong>, que significa “fiesta grande” en guaraní, es una danza tradicional del Chaco boliviano. En carnaval, comunidades guaraníes celebran esta danza ritual con máscaras, bastones y arcos, representando la lucha entre el jaguar (espíritu indígena) y el toro (colono español). Es una coreografía potente que honra la historia, la identidad y la resistencia del pueblo chaqueño.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>
);

export default Home;
