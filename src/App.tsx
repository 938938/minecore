import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import { RootState } from './store/store';
import { useEffect } from 'react';
import { countStart } from './store/dataSlice';

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
  }, [ing]);

  return (
    <div className='App'>
      {/* 게임 난이도 선택 */}
      {/* 커스텀 입력, 완료 버튼 */}
      <Form />
      {/* 타이머, 게임 완료&실패 여부 */}
      <p>{timer}</p>
      <p>{result}</p>
      {/* 지뢰찾기 판 */}
      <Table />
    </div>
  );
}

export default App;
