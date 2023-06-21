import { createContext } from "react";
import Rectangle from "./Rectangle";
import Submitter from "../Submitter";
import RectangleCreator from "./RectangleCreator";
import { jsonRectangleWriter } from "./jsonRectangleWriter";

export const RectangleSubmitterContext = createContext<Submitter<Rectangle>>(new RectangleCreator(jsonRectangleWriter));