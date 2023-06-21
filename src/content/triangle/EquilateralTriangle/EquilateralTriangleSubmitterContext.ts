import { createContext } from "react";
import EquilateralTriangle from "./EquilateralTriangle";
import Submitter from "../../Submitter";
import { jsonEquilateralTriangleWriter } from "./jsonEquilateralTriangleWriter";
import Creator from "../../Creator";

export const EquilateralTriangleSubmitterContext = createContext<Submitter<EquilateralTriangle>>(new Creator<EquilateralTriangle>(jsonEquilateralTriangleWriter));