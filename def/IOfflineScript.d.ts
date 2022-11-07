type IOfflinePboRequest = Omit<IOfflineRequest, "event" | "eventType">;
type IOfflinePaiRequest = IOfflineRequest;

type IOfflinePboComponentsMap = Record<string, IOfflineComponent>;
type IOfflinePaiComponentsMap = Record<string, Readonly<IOfflineComponent>>;

type IOfflineValuesMap = Record<string, string>;

interface IOfflineCallback {
  (error?: IMsbAppError): void;
}

type IOfflinePboMethod = (
  request: IOfflinePboRequest,
  response: IOfflineResponse,
  components: IOfflinePboComponentsMap,
  values: IOfflineValuesMap,
  callback: IOfflineCallback
) => void;

type IOfflinePaiMethod = (
  request: IOfflinePaiRequest,
  response: IOfflineResponse,
  components: IOfflinePaiComponentsMap,
  values: IOfflineValuesMap,
  callback: IOfflineCallback
) => void;

interface IOfflineScript {
  // initialize offline script, register and resolve services
  init(registry: IServiceRegistry, symbols: IOfflineScriptSymbols);
  // do some stuff when application starts
  onStart?(): Promise<void> | void;
  // allow cleanup operations like clearing timeout or interval functions
  onKill?(): Promise<void> | void;
}
