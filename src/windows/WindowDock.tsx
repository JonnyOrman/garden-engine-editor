import React from 'react';
import styled from 'styled-components';
import { FullWidthComponent } from '../components/FullWidthComponent';
import Tab from './Tab';
import TabProps from './TabProps';
import useTabs from './useTabs';

const Container = styled(FullWidthComponent)({
  height: '25px',
  display: 'flex',
});

export const WindowDock = () => {
  const tabs = useTabs();

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
