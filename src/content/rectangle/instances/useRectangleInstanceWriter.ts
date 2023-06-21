import { useContext } from "react";
import { RectangleInstanceWriterContext } from "./RectangleInstanceWriterContext";

export const useRectangleInstanceWriter = () => useContext(RectangleInstanceWriterContext);