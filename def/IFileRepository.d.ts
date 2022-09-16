interface IFileRepository {
  getFileName(guid: string, cb: (error?: IMsbAppError, fileName?: string) => void);
  deleteFile(guid: string, cb: (error?: IMsbAppError) => void);
}