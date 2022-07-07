export default interface ISnackbar {
  openAlert: boolean | undefined;
  handleClick(): void;
  handleClose(): void;
}
