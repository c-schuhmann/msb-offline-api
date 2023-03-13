interface ISynchronization {
  initialize(callback: (error?: IMsbAppError) => void): void;
  download(tableName: string | string[] | null | undefined, callback: (error?: IMsbAppError) => void): void;
  upload(tableName: string | string[] | null | undefined, callback: (error?: IMsbAppError) => void): void;
  uploadFiles(callback: (error?: IMsbAppError) => void): void;
}