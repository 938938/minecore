import { useDispatch, useSelector } from 'react-redux';
import Form from './components/Form';
import Table from './components/Table';
import { RootState } from './store/store';
import { useEffect } from 'react';
import { countStart } from './store/dataSlice';
import * as S from './App.style';

function App() {
  const { result, timer, ing } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (ing) {
      const timeStart = setInterval(() => {
        dispatch(countStart(1));
      }, 1000);
      return () => {
        clearInterval(timeStart);
      };
    }
  }, [dispatch, ing]);

  return (
    <S.App>
      <S.Title>지뢰 찾기</S.Title>
      {/* 게임 난이도 선택 */}
      {/* 커스텀 입력, 완료 버튼 */}
      <Form />
      {/* 타이머, 게임 완료&실패 여부 */}
      <S.TextBox>
        <p>
          <S.Timer /> : {timer}초
        </p>
        <p>{result}</p>
      </S.TextBox>
      {/* 지뢰찾기 판 */}
      <Table />
    </S.App>
  );
}

export default App;
