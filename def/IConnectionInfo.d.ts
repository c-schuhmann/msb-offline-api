declare type ConnectionStatus = 'Unknown' | 'Online' | 'Offline';

interface THandlerId extends Number { }

interface IConnectionInfo {
  getStatus(cb: (status: ConnectionStatus) => void): void;

  addHandler(type: ConnectionStatus, handler: () => void): THandlerId;

  clearHandler(handlerId?: THandlerId): void;
}