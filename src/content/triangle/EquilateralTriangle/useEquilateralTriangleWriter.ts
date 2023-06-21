import { useContext } from "react";
import { EquilateralTriangleWriterContext } from "./EquilateralTriangleWriterContext";

export const useEquilateralTriangleWriter = () => {
    return useContext(EquilateralTriangleWriterContext);
}
