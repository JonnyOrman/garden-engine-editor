import { useContext } from "react";
import { TriangleWriterContext } from "./TriangleWriterContext";

export const useTriangleWriter = () => useContext(TriangleWriterContext);