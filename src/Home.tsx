import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import React from 'react';

function Home() {
  const navigate = useNavigate();

  const goToCreateNewGame = () => {
    navigate('/create-new-game');
  };

  const goToEditGame = () => {
    navigate('/edit-game');
  };

  return (
    <Col>
      <h1 id="header">Garden Engine Editor</h1>

      <Row>
        <Col className="d-flex justify-content-center">
          <button id="create-new-game" onClick={goToCreateNewGame}>
            Create new game
          </button>
        </Col>
        <Col className="d-flex justify-content-center">
          <button id="edit-game" onClick={goToEditGame}>
            Edit game
          </button>
        </Col>
      </Row>
    </Col>
  );
}

export default Home;
