import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Tr from './Tr';

const Table = () => {
  const { data } = useSelector((state: RootState) => state.data);
  return (
    <table>
      <tbody>
        {Array(data.row)
          .fill(1)
          .map((tr, i) => (
            <Tr key={i} row={i} />
          ))}
      </tbody>
    </table>
  );
};

export default Table;
