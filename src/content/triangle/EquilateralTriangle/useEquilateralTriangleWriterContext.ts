import { useContext } from "react";
import { EquilateralTriangleWriterContext } from "./EquilateralTriangleWriterContext";

export const useEquilateralTriangleWriterContext = () => {
    return useContext(EquilateralTriangleWriterContext);
}
