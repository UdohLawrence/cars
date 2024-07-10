import { MouseEventHandler } from "react";

export interface CustomButtonTypes{
    title: String;
    containerStyles?: String;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}