import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Td from './Td';

const Tr: React.FC<{ row: number }> = ({ row }) => {
  const { data } = useSelector((state: RootState) => state.data);

  return (
    <tr>
      {data &&
        Array(data.cell)
          .fill(1)
          .map((td, i) => <Td key={i} row={row} cell={i} />)}
    </tr>
  );
};

export default Tr;
