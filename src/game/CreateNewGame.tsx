import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import Game from './Game';
import Scene from '../scene/Scene';
import Name from '../fields/name/NameEditor';
import { SceneEditor } from '../scene/SceneEditor';
import { GameWriterContext } from './GameWriterContext';

function CreateNewGame() {
  const [name, setName] = useState('');

  const [scene, setScene] = useState<Scene>({
    width: 0,
    height: 0,
  });

  const [game, setGame] = useState<Game>();

  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const gameWriter = useContext(GameWriterContext);

  useEffect(() => {
    const game: Game = {
      name: name,
      scene: scene,
      content: {
        objects: [],
      },
      objects: [],
    };

    setGame(game);
  }, [name, scene]);

  const submit = async (e: any) => {
    if (game) {
      console.log('submitted');

      e.preventDefault();

      gameWriter.write(game).then(() => {
        navigate('/edit-game');
      });
    }
  };

  return (
    <Row>
      <h1 id="header">Create new game</h1>
      <Form onSubmit={submit}>
        <Name onChange={setName} />
        <SceneEditor onChange={setScene}></SceneEditor>
        <Button variant="primary" type="submit">
          Create
        </Button>
        {error && <span>{error}</span>}
      </Form>
    </Row>
  );
}

export default CreateNewGame;
