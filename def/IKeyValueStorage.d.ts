interface IKeyValueStorage {
  get(key: string, cb: (error?: IMsbAppError, value?: boolean | null | number | string | undefined) => void);
  set(key: string, value: boolean | null | number | string | undefined, cb: (error?: IMsbAppError) => void);
  clearAll(cb: (error?: IMsbAppError) => void);
}