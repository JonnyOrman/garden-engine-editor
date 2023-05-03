import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

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
      <h1>Garden Engine Editor</h1>

      <Row>
        <Col className="d-flex justify-content-center">
          <button onClick={goToCreateNewGame}>Create new game</button>
        </Col>
        <Col className="d-flex justify-content-center">
          <button onClick={goToEditGame}>Edit game</button>
        </Col>
      </Row>
    </Col>
  );
}

export default Home;
