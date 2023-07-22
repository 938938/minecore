import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { CODE } from '../store/dataSlice';

const Td: React.FC<{ row: number; cell: number }> = ({ row, cell }) => {
  const { tableData } = useSelector((state: RootState) => state.data);
  const tdTextHandler = (code: number) => {
    switch (code) {
      case CODE.MINE:
        return 'X';
      case CODE.FLAG:
      case CODE.FLAG_MINE:
        return 'O';
      case CODE.CLICKED_MINE:
        return '폭탄';
      case CODE.NORMAL:
        return '';
      default:
        return '';
    }
  };
  const openCellHandler = () => {};
  return (
    <td onClick={openCellHandler}>{tdTextHandler(tableData[row][cell])}</td>
  );
};

export default Td;
