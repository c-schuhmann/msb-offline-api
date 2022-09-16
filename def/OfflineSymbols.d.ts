type IOfflineGlobalSymbols = Readonly<{
  SOfflineConfig: symbol;
  SOfflineScript: symbol;
}>;

type IOfflineScriptSymbols = Readonly<{
  SAppInfo: symbol;
  SAsyncJs: symbol;
  SConnectionInfo: symbol;
  SFileRepository: symbol;
  SKeyValueStorage: symbol;
  SLogger: symbol;
  SSQLiteDatabase: symbol;
  SSynchronization: symbol;
}>;

declare const symbols: IOfflineGlobalSymbols;
