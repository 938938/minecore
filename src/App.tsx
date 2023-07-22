import './App.css';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  return (
    <div className='App'>
      {/* 게임 난이도 선택 */}
      <Form />
      {/* 커스텀 입력, 완료 버튼 */}
      {/* 타이머, 게임 완료&실패 여부 */}
      <Table />
      {/* 지뢰찾기 판 */}
    </div>
  );
}

export default App;
