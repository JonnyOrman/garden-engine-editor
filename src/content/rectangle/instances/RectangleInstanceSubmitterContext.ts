import { createContext } from "react";
import RectangleInstance from "./RectangleInstance";
import Submitter from "../../Submitter";
import { jsonRectangleInstanceWriter } from "./jsonRectangleInstanceWriter";
import Creator from "../../Creator";

export const RectangleInstanceSubmitterContext = createContext<Submitter<RectangleInstance>>(new Creator<RectangleInstance>(jsonRectangleInstanceWriter));