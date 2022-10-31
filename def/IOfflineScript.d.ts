type IOfflinePboMethod = (
  request: Omit<IOfflineRequest, 'event' | 'eventType'>,
  response: IOfflineResponse,
  components: Record<string, IOfflineComponent>,
  values: Record<string, string>,
  callback: (error?: IMsbAppError) => void
) => void;

type IOfflinePaiMethod = (
  request: IOfflineRequest,
  response: IOfflineResponse,
  components: Record<string, Readonly<IOfflineComponent>>,
  values: Record<string, string>,
  callback: (error?: IMsbAppError) => void
) => void;

interface IOfflineScript {
  // initialize offline script, register and resolve services
  init(registry: IServiceRegistry, symbols: IOfflineScriptSymbols);
  // do some stuff when application starts
  onStart?(): Promise<void> | void;
  // allow cleanup operations like clearing timeout or interval functions
  onKill?(): Promise<void> | void;
}