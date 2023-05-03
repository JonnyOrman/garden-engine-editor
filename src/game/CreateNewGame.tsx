import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import Game from './Game';
import Scene from '../scene/Scene';
import CreateNewGameProps from './CreateNewGameProps';
import Name from '../fields/Name';
import React from 'react';
import SceneDimension from '../fields/SceneDimension';

function CreateNewGame(props: CreateNewGameProps) {
  const [name, setName] = useState('');

  const [sceneWidth, setSceneWidth] = useState(0);
  const [sceneHeight, setSceneHeight] = useState(0);

  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const submit = async (e: any) => {
    console.log('submitted');

    e.preventDefault();

    const game: Game = {
      name: name,
      scene: {
        width: sceneWidth,
        height: sceneHeight,
      } as Scene,
      content: {
        objects: [],
      },
      objects: [],
    };

    props.gameWriter.write(game).then(() => {
      navigate('/edit-game');
    });
  };

  return (
    <Row>
      <h1>Create new game</h1>
      <Form onSubmit={submit}>
        <Name onChange={setName} props={props.nameProps} />
        <SceneDimension
          dimension="Width"
          onChange={setSceneWidth}
          props={props.sceneDimensionProps}
        />
        <SceneDimension
          dimension="Height"
          onChange={setSceneHeight}
          props={props.sceneDimensionProps}
        />
        <Button variant="primary" type="submit">
          Create
        </Button>
        {error && <span>{error}</span>}
      </Form>
    </Row>
  );
}

export default CreateNewGame;
