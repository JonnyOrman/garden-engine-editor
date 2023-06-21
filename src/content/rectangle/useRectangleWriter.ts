import { useContext } from "react";
import { RectangleWriterContext } from "./RectangleWriterContext";

export const useRectangleWriter = () => useContext(RectangleWriterContext);