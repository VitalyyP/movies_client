export default interface IAppContext {
  state: { locale: string };
  dispatch: React.Dispatch<{
    type: string;
    payload: { locale: string };
  }>;
}
