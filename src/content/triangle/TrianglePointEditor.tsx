import TwoDPoint from "../../fields/twoDPoint/TwoDPoint";
import Rgb from "../../fields/rgb/Rgb";
import TwoDPointEditor from "../../fields/twoDPoint/TwoDPointEditor";
import RgbEditor from "../../fields/rgb/RgbEditor";
import EditorProps from "../../fields/EditorProps";
import { TrianglePoint } from "./TrianglePoint";
import { useValidatedPropertyChangeHandler } from "../../fields/useValidatedPropertyChangeHandler";

export const TrianglePointEditor = (props: EditorProps<TrianglePoint>) => {
    const [twoDPointHandleChange, twoDPointValue, twoDPointError] = useValidatedPropertyChangeHandler<
    TrianglePoint,
    TwoDPoint
    >('TwoDPoint', props.onChange, {twoDPoint: {x: 0, y: 0}, rgb: {r: 0, g: 0, b: 0}});

    const [rgbHandleChange, rgbValue, rgbError] = useValidatedPropertyChangeHandler<
    TrianglePoint,
    Rgb
    >('TwoDPoint', props.onChange, {twoDPoint: {x: 0, y: 0}, rgb: {r: 0, g: 0, b: 0}});

  const onTwoDPointValueChange = (newTwoDPointValue: TwoDPoint) => {
    twoDPointHandleChange(newTwoDPointValue, (newTwoDPointValue: TwoDPoint) => {
      return {
        twoDPoint: newTwoDPointValue,
        rgb: twoDPointValue.rgb
      };
    });
  };

  const onRgbValueChange = (newRgbValue: Rgb) => {
    rgbHandleChange(newRgbValue, (newRgbValue: Rgb) => {
      return {
        twoDPoint: rgbValue.twoDPoint,
        rgb: newRgbValue
      };
    });
  };

    return (
        <div>
            <TwoDPointEditor onChange={onTwoDPointValueChange}></TwoDPointEditor>
            <RgbEditor onChange={onRgbValueChange}></RgbEditor>
        </div>
    );
}

export default TrianglePointEditor;
