import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { CODE, open, setFlag } from '../store/dataSlice';

const Td: React.FC<{ row: number; cell: number }> = ({ row, cell }) => {
  const dispatch = useDispatch();
  const { tableData, ing } = useSelector((state: RootState) => state.data);

  // td의 내용 설정. 추후 깃발, 폭발 아이콘 넣을 것.
  const tdTextHandler = (code: number) => {
    switch (code) {
      case CODE.MINE:
        return 'X';
      case CODE.FLAG:
      case CODE.FLAG_MINE:
        return '-';
      case CODE.CLICKED_MINE:
        return '폭탄';
      case CODE.OPENED:
        return 'O';
      case CODE.NORMAL:
        return '';
      default:
        return '';
    }
  };
  const openCellHandler = () => {
    // 폭탄이 터지거나 게임이 끝났을 경우엔 클릭이벤트가 발생하지 않음
    if (!ing) return;
    dispatch(open({ row, cell }));
  };
  const setFlagHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(setFlag({ row, cell }));
  };
  return (
    <td onClick={openCellHandler} onContextMenu={setFlagHandler}>
      {tdTextHandler(tableData[row][cell])}
    </td>
  );
};

export default Td;
