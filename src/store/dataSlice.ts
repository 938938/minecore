import { createSlice } from '@reduxjs/toolkit';
import { Data } from '../model/Type';

export const CODE = {
  MINE: -5,
  NORMAL: -1,
  FLAG: -2,
  FLAG_MINE: -3,
  CLICKED_MINE: -4,
  OPENED: 0,
};

const initialState: Data = {
  tableData: [],
  data: {
    row: 0,
    cell: 0,
    mine: 0,
  },
  timer: 0,
  ing: false,
  firstClick: true,
};

// 지뢰 심기
const plantMine = (row: number, cell: number, mine: number) => {
  // 지뢰가 들어갈 칸 설정
  const candidate = Array(row * cell)
    .fill(1)
    .map((arr, i) => {
      return i;
    });
  // 지뢰를 넣을 자리 설정
  const shuffle = [];
  while (candidate.length > row * cell - mine) {
    const chosen = candidate.splice(
      Math.floor(Math.random() * candidate.length),
      1
    )[0];
    shuffle.push(chosen);
  }
  // 테이블을 설정하는 2차원 배열
  const data = [];
  for (let i = 0; i < row; i++) {
    const rowData: number[] = [];
    data.push(rowData);
    for (let j = 0; j < cell; j++) {
      rowData.push(CODE.NORMAL);
    }
  }
  // shuffle 의 값을 기반으로 지뢰 설정
  for (let k = 0; k < shuffle.length; k++) {
    const ver = Math.floor(shuffle[k] / cell);
    const hor = shuffle[k] % cell;
    data[ver][hor] = CODE.MINE;
  }
  return data;
};

const dataSlice = createSlice({
  name: 'dataSlice',
  // 필요한 초기값
  // 지뢰 배열, 지뢰 세로 / 가로 / 지뢰 수, 타이머, 게임 진행 여부
  initialState,
  reducers: {
    // 게임 세팅
    set: (state, action) => {
      state.data = { ...action.payload };
      const { row, cell, mine } = state.data;
      state.tableData = { ...plantMine(row, cell, mine) };
      state.firstClick = true;
      state.ing = true;
    },
    open: (state, action) => {
      const { row, cell } = action.payload;
      const target = state.tableData[row][cell];

      if (state.firstClick && target === CODE.MINE) {
        // 처음 클릭이면서 클릭된 칸이 폭탄칸이면 일반칸으로 변경(다른 일반칸에 폭탄 설정)
        const normalIdx = state.tableData[row].indexOf(CODE.NORMAL);
        state.tableData[row][normalIdx] = CODE.MINE;
        state.tableData[row][cell] = CODE.OPENED;
      } else {
        // 처음 클릭이 아니거나 클릭된 칸이 노말칸인 경우
        if (target === CODE.NORMAL) {
          state.tableData[row][cell] = CODE.OPENED;
        } else if (target === CODE.MINE) {
          // 폭탄 칸이면 폭탄 표시, 게임 중단
          state.tableData[row][cell] = CODE.CLICKED_MINE;
          state.ing = false;
        } // 이미 오픈된 칸이거나 / 깃발칸을 클릭했을 경우엔 아무런 액션도 취하지 않음
        state.firstClick = false;
      }
    },
    // 오른 클릭 액션
    // 깃발 / 깃발 해제
    // 왼 클릭
    // 노멀칸, 폭탄칸
  },
});

export default dataSlice;
export const { set, open } = dataSlice.actions;
