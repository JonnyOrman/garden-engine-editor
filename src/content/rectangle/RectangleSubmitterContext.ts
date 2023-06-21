import { createContext } from "react";
import Rectangle from "./Rectangle";
import Submitter from "../Submitter";
import { jsonRectangleWriter } from "./jsonRectangleWriter";
import Creator from "../Creator";

export const RectangleSubmitterContext = createContext<Submitter<Rectangle>>(new Creator<Rectangle>(jsonRectangleWriter));