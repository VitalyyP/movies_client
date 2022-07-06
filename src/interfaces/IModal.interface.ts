export default interface IModal {
  open: boolean;
  url: string;
  title: string | undefined;
  onClose(event: {}, reason: "backdropClick" | "escapeKeyDown"): void;
}
