import React, { useState } from 'react';
import styled from 'styled-components';
import { FullWidthComponent } from '../components/FullWidthComponent';
import Tab from './Tab';
import TabProps from './TabProps';

const Container = styled(FullWidthComponent)({
  height: '25px',
  display: 'flex',
});

export const WindowDock = () => {
  const [tabs, setTabs] = useState([
    {
      name: 'some tab',
      url: 'some/url',
    },
  ]);

  if (tabs && tabs.length > 0) {
    return (
      <Container>
        {tabs.map((tab: TabProps) => {
          return (
            <Tab
              key={tabs.indexOf(tab)}
              name={tab.name}
              onClick={() => {
                console.log('TODO - Tab onClick');
              }}
            />
          );
        })}
      </Container>
    );
  }

  return null;
};

export default WindowDock;
