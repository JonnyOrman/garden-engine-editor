import { useNavigate } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Header1 from './headers/Header1';
import PrimaryButton from './buttons/PrimaryButton';

const Container = styled.div({
  width: '100%',
  height: '100%',
  position: 'absolute',
});

const Content = styled.div({
  display: 'flex',
  justifyContent: 'space-around',
});

function Home() {
  const navigate = useNavigate();

  const goToCreateNewGame = () => {
    navigate('/create-new-game');
  };

  const goToEditGame = () => {
    navigate('/edit-game');
  };

  return (
    <Container>
      <Header1 text="Garden Engine Editor" />

      <Content>
        <PrimaryButton text="Create new game" onClick={goToCreateNewGame} />
        <PrimaryButton text="Edit game" onClick={goToEditGame} />
      </Content>
    </Container>
  );
}

export default Home;
