import IMovie from "./IMovie.interface";

export default interface ILongMenu {
  action: string | JSX.Element;
  onClick(): void;
}
