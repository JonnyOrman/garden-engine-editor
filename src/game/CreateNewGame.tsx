import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import Game from './Game';
import Scene from '../scene/Scene';
import CreateNewGameProps from './CreateNewGameProps';
import Name from '../fields/name/NameEditor';
import SceneEditor from '../scene/SceneEditor';

function CreateNewGame(props: CreateNewGameProps) {
  const [name, setName] = useState('');

  const [scene, setScene] = useState<Scene>({
    width: 0,
    height: 0,
  });

  const [game, setGame] = useState<Game>();

  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

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

      props.gameWriter.write(game).then(() => {
        navigate('/edit-game');
      });
    }
  };

  return (
    <Row>
      <h1 id="header">Create new game</h1>
      <Form onSubmit={submit}>
        <Name onChange={setName} props={props.nameProps} />
        <SceneEditor
          onChange={setScene}
          props={props.sceneProps}
          sceneDimensionProps={props.sceneDimensionProps}
        ></SceneEditor>
        <Button variant="primary" type="submit">
          Create
        </Button>
        {error && <span>{error}</span>}
      </Form>
    </Row>
  );
}

export default CreateNewGame;
