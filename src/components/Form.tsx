import { useDispatch } from 'react-redux';
import { ChangeEvent, useCallback, useState } from 'react';
import { set } from '../store/dataSlice';
import * as S from './Form.style';

const Form = () => {
  const dispatch = useDispatch();
  const [row, setRow] = useState<number>(2);
  const [cell, setCell] = useState<number>(2);
  const [mine, setMine] = useState<number>(1);

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
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
  }, []);

  // 난이도 설정
  const onSubmitHandler = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const { name } = e.currentTarget;
      switch (name) {
        case 'beginner':
          return dispatch(set({ row: 8, cell: 8, mine: 8 }));
        case 'intermediate':
          return dispatch(set({ row: 16, cell: 16, mine: 16 }));
        case 'expert':
          return dispatch(set({ row: 16, cell: 32, mine: 20 }));
        case 'custom':
          return dispatch(set({ row, cell, mine }));
        default:
          return;
      }
    },
    [row, cell, mine, dispatch]
  );

  return (
    <S.Form>
      <S.SubTitle>난이도 설정</S.SubTitle>
      <S.Btns>
        <S.Btn name='beginner' onClick={onSubmitHandler}>
          Beginner
        </S.Btn>
        <S.Btn name='intermediate' onClick={onSubmitHandler}>
          Intermediate
        </S.Btn>
        <S.Btn name='expert' onClick={onSubmitHandler}>
          Expert
        </S.Btn>
      </S.Btns>
      <S.CustomTitle>커스텀 난이도</S.CustomTitle>
      <S.CustomForm>
        <label>
          <p>세로 칸</p>
          <input
            type='number'
            placeholder='세로 칸'
            name='row'
            value={row}
            min='2'
            onChange={onChangeHandler}
          />
        </label>
        <label>
          <p>가로 칸</p>
          <input
            type='number'
            placeholder='가로'
            name='cell'
            value={cell}
            min='2'
            onChange={onChangeHandler}
          />
        </label>
        <label>
          <p>지뢰 수</p>
          <input
            type='number'
            placeholder='지뢰'
            name='mine'
            value={mine}
            min='1'
            max={row * cell - 1}
            onChange={onChangeHandler}
          />
        </label>
        <S.Btn name='custom' onClick={onSubmitHandler}>
          설정
        </S.Btn>
      </S.CustomForm>
    </S.Form>
  );
};

export default Form;
