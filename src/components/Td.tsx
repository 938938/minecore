import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { CODE, open } from '../store/dataSlice';

const Td: React.FC<{ row: number; cell: number }> = ({ row, cell }) => {
  const dispatch = useDispatch();
  const { tableData, ing } = useSelector((state: RootState) => state.data);

  // const tdStyleHandler = (code: number) => {
  //   switch (code) {
  //     case CODE.MINE:
  //       return {
  //         background: 'gray',
  //       };
  //     case CODE.FLAG:
  //     case CODE.FLAG_MINE:
  //       return {
  //         background: 'mint',
  //       };
  //     case CODE.CLICKED_MINE:
  //       return {
  //         background: 'black',
  //       };
  //     case CODE.NORMAL:
  //       return {
  //         background: 'beige',
  //       };
  //     case CODE.OPENED:
  //     default:
  //       return '';
  //   }
  // };
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
  return (
    <td onClick={openCellHandler}>{tdTextHandler(tableData[row][cell])}</td>
  );
};

export default Td;
