export default interface IAppContext {
  state: { locale: string };
  dispatch: React.Dispatch<{
    type: string;
    locale: string;
  }>;
}

// {
//   name: string;
//   author: string;
//   url: string;
// }
