interface ISynchronization {
  initialize(callback: (error?: IMsbAppError) => void): void;
  download(tableNames: string | string[] | null | undefined, callback: (error?: IMsbAppError) => void): void;
  upload(tableNames: string | string[] | null | undefined, callback: (error?: IMsbAppError) => void): void;
  uploadFiles(callback: (error?: IMsbAppError) => void): void;
}