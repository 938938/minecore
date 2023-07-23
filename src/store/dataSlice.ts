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
  opend: 0,
  result: '',
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
      // state.result = '';
      state.opend = 0;
      state.timer = 0;
      state.result = `게임이 진행중입니다. 지뢰 수는 모두 ${state.data.mine}개 입니다.`;
    },
    open: (state, action) => {
      const { row, cell } = action.payload;

      // 클릭이 일어났을 때 오픈되는 칸의 수 변수
      let openCount = 0;
      // 주변 지뢰 수 검사
      const checked: string[] = []; // 중복체크를 막기 위한 배열
      const aroundMine = (row: number, cell: number) => {
        if (
          [CODE.OPENED, CODE.FLAG_MINE, CODE.FLAG].includes(
            state.tableData[row][cell]
          )
        ) {
          // 이미 열렸거나 막혀있는 칸 생략
          return;
        }
        if (
          row < 0 ||
          row >= state.tableData.length ||
          cell < 0 ||
          cell >= state.tableData[0].length
        ) {
          // 상하좌우가 존재하지 않을 경우 생략
          return;
        }
        if (checked.includes(`${row},${cell}`)) {
          // 이미 검사한 칸일 경우 생략
          return;
        } else {
          // 검사하지 않은 칸일 경우 검사 표시 추가
          checked.push(`${row},${cell}`);
        }
        let around: number[] = [];
        if (state.tableData[row - 1]) {
          // 윗 줄이 있는 경우
          around = around.concat(
            state.tableData[row - 1][cell - 1],
            state.tableData[row - 1][cell],
            state.tableData[row - 1][cell + 1]
          );
        }
        // 좌우 검사
        around = around.concat(
          state.tableData[row][cell - 1],
          state.tableData[row][cell + 1]
        );
        if (state.tableData[row + 1]) {
          // 아랫 줄이 있는 경우
          around = around.concat(
            state.tableData[row + 1][cell - 1],
            state.tableData[row + 1][cell],
            state.tableData[row + 1][cell + 1]
          );
        }
        const count = around.filter((ele) =>
          [CODE.MINE, CODE.FLAG_MINE].includes(ele)
        ).length; // 지뢰수 추출
        // 오픈된 칸 수 증가
        openCount += 1;
        // count가 0일 경우(주변에 지뢰가 없을 경우) 주변칸 오픈
        if (count === 0) {
          // 펼쳐낼 주변칸 설정 배열
          const near = [];
          if (row - 1 > -1) {
            // 윗 줄이 존재하는 경우
            near.push([row - 1, cell - 1]);
            near.push([row - 1, cell]);
            near.push([row - 1, cell + 1]);
          }
          near.push([row, cell - 1]);
          near.push([row, cell + 1]);
          if (row + 1 < state.data.row) {
            // 아랫 줄이 존재하는 경우
            near.push([row + 1, cell - 1]);
            near.push([row + 1, cell]);
            near.push([row + 1, cell + 1]);
          }
          near.forEach((n) => {
            // 해당 칸이 이미 오픈된 칸이 아닐 경우 주변칸 여는 함수 실행
            if (state.tableData[n[0]][n[1]] !== CODE.OPENED) {
              aroundMine(n[0], n[1]);
            }
          });
        }
        state.tableData[row][cell] = count;
      };
      aroundMine(row, cell);
      state.firstClick = false;
      // 총 칸 수 - 지뢰 수 (노멀 칸 수)와 오픈된 칸 수가 같을 때 === 모든 지뢰를 찾았을 때
      if (
        state.data.cell * state.data.row - state.data.mine ===
        state.opend + openCount
      ) {
        // 게임 종료
        state.ing = false;
        state.result = '모든 지뢰를 찾으셨습니다!';
      }
      state.opend = state.opend + openCount;
    },
    openMine: (state, action) => {
      const { row, cell } = action.payload;
      // 처음 클릭일 땐 일반칸으로 변경(다른 일반칸에 폭탄 설정)
      // 해당 배열의 가장 첫번째 노멀칸에 폭탄 설치(추후 랜덤 방법 찾아볼 것)
      if (state.firstClick) {
        const normalIdx = state.tableData[row].indexOf(CODE.NORMAL);
        state.tableData[row][normalIdx] = CODE.MINE;
        state.tableData[row][cell] = CODE.OPENED;
        state.firstClick = false;
        return;
      }
      state.tableData[row][cell] = CODE.CLICKED_MINE;
      state.ing = false;
      state.result = '지뢰가 터졌습니다. 다시 도전해주세요!';
    },
    // 오른 클릭 액션
    setFlag: (state, action) => {
      const { row, cell } = action.payload;
      const target = state.tableData[row][cell];
      switch (target) {
        // 노멀 / 폭탄칸 => 깃발 표시, 깃발 / 깃발폭탄칸 => 노멀표시
        case CODE.NORMAL:
          state.tableData[row][cell] = CODE.FLAG;
          return;
        case CODE.MINE:
          state.tableData[row][cell] = CODE.FLAG_MINE;
          return;
        case CODE.FLAG:
          state.tableData[row][cell] = CODE.NORMAL;
          return;
        case CODE.FLAG_MINE:
          state.tableData[row][cell] = CODE.MINE;
          return;
        default:
          return;
      }
    },
    countStart: (state, action) => {
      state.timer += 1;
    },
  },
});

export default dataSlice;
export const { set, open, openMine, setFlag, countStart } = dataSlice.actions;
