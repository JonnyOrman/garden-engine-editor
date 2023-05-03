import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import CreateNewGame from './game/CreateNewGame';
import EditGame from './game/EditGame';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameWriter from './game/GameWriter';
import GameReader from './game/GameReader';
import GameJsonWriter from './game/GameDataWriter';
import GameJsonReader from './game/GameDataReader';
import GameFilePathProvider from './game/GameFilePathProvider';
import JsonSerialiser from './JsonSerialiser';
import JsonParser from './JsonParser';
import React from 'react';
import SceneDimensionValidator from './fields/SceneDimensionValidator';
import ValidationOnChangeHandler from './fields/ValidationOnChangeHandler';
import NameValidator from './fields/NameValidator';
import ScaleValidator from './fields/ScaleValidator';
import RgbValidator from './fields/RgbValidator';
import Props from './fields/Props';
import Rgb from './fields/Rgb';
import TwoDPoint from './fields/TwoDPoint';
import TwoDPointValidator from './fields/TwoDPointValidator';
import SceneValidator from './scene/SceneValidator';

function App() {
  const [name, setName] = useState('');
  const [gameFilePathProvider, setGameFilePathProvider] = useState(
    new GameFilePathProvider('FILE_PATH/content.json')
  );
  const [gameJsonWriter, setGameJsonWriter] = useState(
    new GameJsonWriter(gameFilePathProvider)
  );
  const [gameJsonReader, setGameJsonReader] = useState(
    new GameJsonReader(gameFilePathProvider)
  );
  const [jsonSerialiser, setJsonSerialiser] = useState(new JsonSerialiser());
  const [jsonParser, setJsonParser] = useState(new JsonParser());
  const [gameWriter, setGameWriter] = useState(
    new GameWriter(jsonSerialiser, gameJsonWriter)
  );
  const [gameReader, setGameReader] = useState(
    new GameReader(gameJsonReader, jsonParser)
  );

  const [nameValidator, setNameValidator] = useState(new NameValidator());
  const [nameOnChangeHandler, setNameOnChangeHandler] = useState(
    new ValidationOnChangeHandler(nameValidator)
  );
  const [nameProps, setNameProps] = useState<Props<string>>({
    validator: nameValidator,
    onChangeHandler: nameOnChangeHandler,
  });

  const [sceneDimensionValidator, setSceneDimensionValidator] = useState(
    new SceneDimensionValidator()
  );
  const [sceneDimensionOnChangeHandler, setsceneDimensionOnChangeHandler] =
    useState(new ValidationOnChangeHandler(sceneDimensionValidator));
  const [sceneDimensionProps, setSceneDimensionProps] = useState({
    validator: sceneDimensionValidator,
    onChangeHandler: sceneDimensionOnChangeHandler,
  });

  const [sceneValidator, setSceneValidator] = useState(
    new SceneValidator(sceneDimensionValidator)
  );
  const [sceneOnChangeHandler, setsceneOnChangeHandler] = useState(
    new ValidationOnChangeHandler(sceneValidator)
  );
  const [sceneProps, setSceneProps] = useState({
    validator: sceneValidator,
    onChangeHandler: sceneOnChangeHandler,
  });

  const [scaleValidator, setScaleValidator] = useState(new ScaleValidator());
  const [scaleOnChangeHandler, setScaleOnChangeHandler] = useState(
    new ValidationOnChangeHandler(scaleValidator)
  );
  const [scaleProps, setScaleProps] = useState<Props<number>>({
    validator: scaleValidator,
    onChangeHandler: scaleOnChangeHandler,
  });

  const [rgbValidator, setRgbValidator] = useState(new RgbValidator());
  const [rgbOnChangeHandler, setRgbOnChangeHandler] = useState(
    new ValidationOnChangeHandler(rgbValidator)
  );
  const [rgbProps, setRgbProps] = useState<Props<Rgb>>({
    validator: rgbValidator,
    onChangeHandler: rgbOnChangeHandler,
  });

  const [twoDPointValidator, setTwoDPointValidator] = useState(
    new TwoDPointValidator()
  );
  const [twoDPointOnChangeHandler, setTwoDPointOnChangeHandler] = useState(
    new ValidationOnChangeHandler(twoDPointValidator)
  );
  const [twoDPointProps, setTwoDPointProps] = useState<Props<TwoDPoint>>({
    validator: twoDPointValidator,
    onChangeHandler: twoDPointOnChangeHandler,
  });

  return (
    <Container fluid className="h-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/create-new-game"
            element={
              <CreateNewGame
                gameWriter={gameWriter}
                nameProps={nameProps}
                sceneDimensionProps={sceneDimensionProps}
                sceneProps={sceneProps}
              />
            }
          />
          <Route
            path="/edit-game"
            element={
              <EditGame
                gameWriter={gameWriter}
                gameReader={gameReader}
                nameProps={nameProps}
                scaleProps={scaleProps}
                rgbProps={rgbProps}
                twoDPointProps={twoDPointProps}
                sceneDimensionProps={sceneDimensionProps}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
