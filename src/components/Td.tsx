import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { CODE, open, openMine, setFlag } from '../store/dataSlice';
import * as S from './Td.style';

const Td: React.FC<{ row: number; cell: number }> = ({ row, cell }) => {
  const dispatch = useDispatch();
  const { tableData, ing, view } = useSelector(
    (state: RootState) => state.data
  );

  // td의 내용 설정. 추후 깃발, 폭발 아이콘 넣을 것.
  const tdTextHandler = (code: number) => {
    switch (code) {
      case CODE.MINE:
        return view ? <S.Mine /> : '';
      case CODE.FLAG:
      case CODE.FLAG_MINE:
        return <S.Flag />;
      case CODE.CLICKED_MINE:
        return <S.Explosion />;
      case CODE.NORMAL:
        return '';
      default:
        return code || '';
    }
  };
  const openCellHandler = () => {
    // 폭탄이 터지거나 게임이 끝났을 경우엔 클릭이벤트가 발생하지 않음
    if (!ing) return;
    switch (tableData[row][cell]) {
      case CODE.NORMAL:
        return dispatch(open({ row, cell }));
      case CODE.MINE:
        return dispatch(openMine({ row, cell }));
      default:
        return;
    }
  };
  const setFlagHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(setFlag({ row, cell }));
  };
  return (
    <S.Td
      type={tableData[row][cell]}
      onClick={openCellHandler}
      onContextMenu={setFlagHandler}
    >
      {tdTextHandler(tableData[row][cell])}
    </S.Td>
  );
};

export default Td;
