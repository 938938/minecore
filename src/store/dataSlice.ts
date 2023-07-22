import { createSlice } from '@reduxjs/toolkit';

type TableData = number[];
type data = {
  tableData: TableData[];
  data: {
    row: number;
    cell: number;
    mine: number;
  };
  timer: number;
  ing: boolean;
};

const initialState: data = {
  tableData: [],
  data: {
    row: 0,
    cell: 0,
    mine: 0,
  },
  timer: 0,
  ing: false,
};

const dataSlice = createSlice({
  name: 'dataSlice',
  // 필요한 초기값
  // 지뢰 배열, 지뢰 세로 / 가로 / 지뢰 수, 타이머, 게임 진행 여부
  initialState,
  reducers: {
    // 오른 클릭 액션
    // 깃발 / 깃발 해제
    // 왼 클릭
    // 노멀칸, 폭탄칸
  },
});

export default dataSlice;
