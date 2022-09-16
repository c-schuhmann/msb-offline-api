interface ISQLResultSet {
  insertId: number;
  rowsAffected: number;
  rows: ISQLResultSetRowList;
}

interface ISQLResultSetRowList {
  length: number;
  item(index: number): Record<string, Readonly<unknown>>;
}

interface ISQLiteDatabase {
  execute(
    statements: string[],
    params: any[][],
    callback: (err?: IMsbAppError, result?: ISQLResultSet) => void
  ): void;

  isTableEmpty(
    tableName: string,
    callback: (err?: IMsbAppError, empty?: boolean) => void
  ): void;
}