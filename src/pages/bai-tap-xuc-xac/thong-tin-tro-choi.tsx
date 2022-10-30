import React from 'react';
import { XucXacEnum } from '../../enums/xuc-xac';

interface Props {
  selectedType: XucXacEnum | undefined;
  totalWin: number;
  totalTurn: number;
  handlePlayGame: () => void;
}

export default function ThongTinTroChoi(props: Props): JSX.Element {
  const { selectedType, totalWin, totalTurn, handlePlayGame } = props;

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
        onClick={() => handlePlayGame()}
        className='btn btn-success p-2 display-4 mt-5'
      >
        Play game
      </button>
    </div>
  );
}
