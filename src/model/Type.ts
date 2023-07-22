export type TableData = number[];

export type Data = {
  tableData: TableData[];
  data: {
    row: number;
    cell: number;
    mine: number;
  };
  timer: number;
  ing: boolean;
  firstClick: boolean;
};
