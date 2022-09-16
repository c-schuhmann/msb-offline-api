interface ISynchronization {
  initialize(callback: (error?: IMsbAppError) => void): void;
  download(tableName: string, callback: (error?: IMsbAppError) => void): void;
  upload(tableName: string, callback: (error?: IMsbAppError) => void): void;
  uploadFiles(callback: (error?: IMsbAppError) => void): void;
}