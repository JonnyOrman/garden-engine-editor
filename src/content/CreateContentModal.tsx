import { useState } from 'react';
import CreateContentModalProps from './CreateContentModalProps';
import React from 'react';
import CreateEquilateralTriangle from './triangle/EquilateralTriangle/CreateEquilateralTriangle';
import useContentTypes from './useContentTypes';
import { VerticalComponent } from '../components/VerticalComponent';
import styled from 'styled-components';
import SelectItem from '../selectors/SelectItem';
import Window from '../windows/Window';
import { Dropdown } from '../selectors/Dropdown';
import Component from '../components/Component';
import CreateTriangle from './triangle/CreateTriangle';
import CreateRectangle from './rectangle/CreateRectangle';

const CreateContentModalComponent = styled(VerticalComponent)({
  backgroundColor: '#2f2f2f',
  display: 'flex',
  flexDirection: 'column',
});

const Body = styled.div({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
});

const TypeSelect = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

const SelectedType = styled.div({
  flexGrow: 1,
});

function CreateContentModal(props: CreateContentModalProps) {
  const [type, setType] = useState('Triangle');

  const contentTypes = useContentTypes();

  const contentTypeOptions: SelectItem<string>[] = contentTypes.map(
    (contentType) => {
      return {
        name: contentType.name,
        value: contentType.type,
      };
    }
  );

  return (
    <CreateContentModalComponent>
      <Window
        content={() => {
          return (
            <Component>
              <Body>
                <TypeSelect>
                  <Dropdown options={contentTypeOptions} onChange={setType} />
                </TypeSelect>
                <SelectedType>
                  {type == 'Triangle' && <CreateTriangle />}
                  {type == 'Rectangle' && <CreateRectangle />}
                  {type == 'EquilateralTriangle' && (
                    <CreateEquilateralTriangle />
                  )}
                </SelectedType>
              </Body>
            </Component>
          );
        }}
        closeWindow={props.onHide}
      />
    </CreateContentModalComponent>
  );
}

export default CreateContentModal;
