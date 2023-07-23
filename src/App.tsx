import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import { RootState } from './store/store';
import { useEffect } from 'react';
import { countStart } from './store/dataSlice';

function App() {
  const { result, timer, ing, data } = useSelector(
    (state: RootState) => state.data
  );
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
  }, [ing]);

  return (
    <div className='App'>
      {/* 게임 난이도 선택 */}
      <Form />
      {/* 커스텀 입력, 완료 버튼 */}
      {/* 타이머, 게임 완료&실패 여부 */}
      <p>이번 게임의 지뢰 수 : {data.mine}</p>
      <p>{timer}</p>
      <p>{result}</p>
      <Table />
      {/* 지뢰찾기 판 */}
    </div>
  );
}

export default App;
