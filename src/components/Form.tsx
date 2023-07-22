import { useDispatch } from 'react-redux';
import { ChangeEvent, useState } from 'react';
import { set } from '../store/dataSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [row, setRow] = useState<number>(0);
  const [cell, setCell] = useState<number>(0);
  const [mine, setMine] = useState<number>(0);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'row':
        return setRow(parseInt(value));
      case 'cell':
        return setCell(parseInt(value));
      case 'mine':
        return setMine(parseInt(value));
      default:
        return;
    }
  };

  // 난이도 설정
  const onSubmitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { name } = e.currentTarget;
    switch (name) {
      case 'beginner':
        return dispatch(set({ row: 8, cell: 8, mine: 8 }));
      case 'intermediate':
        return dispatch(set({ row: 16, cell: 16, mine: 16 }));
      case 'expert':
        return dispatch(set({ row: 32, cell: 16, mine: 20 }));
      case 'custom':
        return dispatch(set({ row, cell, mine }));
      default:
        return;
    }
  };
  return (
    <div>
      <button name='beginner' onClick={onSubmitHandler}>
        Beginner
      </button>
      <button name='intermediate' onClick={onSubmitHandler}>
        Intermediate
      </button>
      <button name='expert' onClick={onSubmitHandler}>
        Expert
      </button>
      <form>
        <label>
          세로 칸
          <input
            type='number'
            placeholder='세로 칸'
            name='row'
            value={row}
            onChange={onChangeHandler}
          />
        </label>
        <label>
          가로 칸
          <input
            type='number'
            placeholder='가로'
            name='cell'
            value={cell}
            onChange={onChangeHandler}
          />
        </label>
        <label>
          지뢰 수
          <input
            type='number'
            placeholder='지뢰'
            name='mine'
            value={mine}
            onChange={onChangeHandler}
          />
        </label>
        <button name='custom' onClick={onSubmitHandler}>
          설정
        </button>
      </form>
    </div>
  );
};

export default Form;
