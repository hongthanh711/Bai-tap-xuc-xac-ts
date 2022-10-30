import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { XucXacEnum } from '../../enums/xuc-xac';
import { fetchMovieListAction } from '../../store/reducers/movieReducer';
import { xucXacActions } from '../../store/reducers/xucXacReducer';
import { AppDispatch, RootState } from '../../store/store';

interface Props {}

export default function ThongTinTroChoi(props: Props): JSX.Element {
  const { selectedType, totalWin, totalTurn } = useSelector(
    (state: RootState) => state.xucXacReducer
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchMovieListAction());
  }, []);

  return (
    <div className='thongTinTroChoi text-center'>
      <div>
        <div className='display-4'>
          BẠN CHỌN: <span className='text-danger'>{selectedType}</span>
        </div>
        <div className='display-4'>
          BÀN THẮNG: <span className='text-success'> {totalWin}</span>
        </div>
        <div className='display-4'>
          TỔNG SỐ BÀN CHƠI: <span className='text-primary'> {totalTurn}</span>
        </div>
      </div>
      <button
        onClick={() => dispatch(xucXacActions.handlePlayGame())}
        className='btn btn-success p-2 display-4 mt-5'
      >
        Play game
      </button>
    </div>
  );
}
