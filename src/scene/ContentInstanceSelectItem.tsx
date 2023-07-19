import React from 'react';
import ContentInstance from '../content/instances/ContentInstance';
import styled from 'styled-components';

const Component = styled.div({
  color: 'white',
});

export const ContentInstanceSelectItem = ({
  object,
}: {
  object: ContentInstance;
}) => {
  return (
    <Component>
      {object.name}, {object.type}
    </Component>
  );
};

export default ContentInstanceSelectItem;
