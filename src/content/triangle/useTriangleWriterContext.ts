import { useContext } from "react";
import { TriangleWriterContext } from "./TriangleWriterContext";

export const useTriangleWriterContext = () => useContext(TriangleWriterContext);