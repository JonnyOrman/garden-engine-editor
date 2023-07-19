import React from 'react';
import Name from '../../fields/name/NameEditor';
import { TrianglePoint } from './TrianglePoint';
import TrianglePointEditor from './TrianglePointEditor';
import Triangle from './Triangle';
import { useTriangleSubmitter } from './useTriangleSubmitter';
import { useSubmitter } from '../useSubmitter';
import Form from '../../forms/Form';

function CreateTriangle() {
  const defaultValue = {
    name: '',
    type: 'triangle',
    point1: {
      twoDPoint: {
        x: 0,
        y: 0,
      },
      rgb: {
        r: 0,
        g: 0,
        b: 0,
      },
    },
    point2: {
      twoDPoint: {
        x: 0,
        y: 0,
      },
      rgb: {
        r: 0,
        g: 0,
        b: 0,
      },
    },
    point3: {
      twoDPoint: {
        x: 0,
        y: 0,
      },
      rgb: {
        r: 0,
        g: 0,
        b: 0,
      },
    },
  };

  const [submit, handleChange, value] = useSubmitter<Triangle>(
    defaultValue,
    useTriangleSubmitter(),
    () => {}
  );

  const onNameValueChange = (newNameValue: string) => {
    handleChange<string>(newNameValue, (newNameValue: string) => {
      return {
        name: newNameValue,
        type: value.type,
        point1: value.point1,
        point2: value.point2,
        point3: value.point3,
      };
    });
  };

  const onPoint1ValueChange = (newPoint1Value: TrianglePoint) => {
    handleChange<TrianglePoint>(
      newPoint1Value,
      (newPoint1Value: TrianglePoint) => {
        return {
          name: value.name,
          type: value.type,
          point1: newPoint1Value,
          point2: value.point2,
          point3: value.point3,
        };
      }
    );
  };

  const onPoint2ValueChange = (newPoint2Value: TrianglePoint) => {
    handleChange<TrianglePoint>(
      newPoint2Value,
      (newPoint2Value: TrianglePoint) => {
        return {
          name: value.name,
          type: value.type,
          point1: value.point1,
          point2: newPoint2Value,
          point3: value.point3,
        };
      }
    );
  };

  const onPoint3ValueChange = (newPoint3Value: TrianglePoint) => {
    handleChange<TrianglePoint>(
      newPoint3Value,
      (newPoint3Value: TrianglePoint) => {
        return {
          name: value.name,
          type: value.type,
          point1: value.point1,
          point2: value.point2,
          point3: newPoint3Value,
        };
      }
    );
  };

  const buildValue = () => {
    return {
      name: value.name,
      type: value.type,
      point1: value.point1,
      point2: value.point2,
      point3: value.point3,
    };
  };

  const onSubmit = (triangle: Triangle, e: any) => {
    submit(e);
  };

  return (
    <Form
      buildValue={buildValue}
      onSubmit={onSubmit}
      defaultValue={defaultValue}
      dependencies={[]}
    >
      <Name onChange={onNameValueChange}></Name>
      <TrianglePointEditor onChange={onPoint1ValueChange}></TrianglePointEditor>
      <TrianglePointEditor onChange={onPoint2ValueChange}></TrianglePointEditor>
      <TrianglePointEditor onChange={onPoint3ValueChange}></TrianglePointEditor>
    </Form>
  );
}

export default CreateTriangle;
