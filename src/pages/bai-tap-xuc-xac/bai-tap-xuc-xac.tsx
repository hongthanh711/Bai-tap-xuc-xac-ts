import React, { useState } from 'react';
import { XucXacEnum } from '../../enums/xuc-xac';
import DanhSachXucXac from './danh-sach-xuc-xac';

import './index.css';
import ThongTinTroChoi from './thong-tin-tro-choi';
import TieuDeGame from './tieu-de-game';

export default function BaiTapXucXac(): JSX.Element {
  const [selectedType, setSelectedType] = useState<XucXacEnum | undefined>();
  const [totalWin, setTotalWin] = useState<number>(0);
  const [totalTurn, setTotalTurn] = useState<number>(0);
  const [diceList, setDiceList] = useState<string[]>([
    './images/2.png',
    './images/4.png',
    './images/1.png',
  ]);

  const handleSelectedType = (type: XucXacEnum): void => {
    setSelectedType(type);
  };

  const handlePlayGame = (): void => {
    let totalPoint: number = 0;
    const data = [...diceList];

    diceList.forEach((ele: string, idx: number) => {
      const randomNumber = Math.floor(Math.random() * 6 + 1);

      data[idx] = `./images/${randomNumber}.png`;
      totalPoint += randomNumber;
    });

    if (
      (selectedType === XucXacEnum.Tai && totalPoint > 10) ||
      (selectedType === XucXacEnum.Xiu && totalPoint <= 10)
    ) {
      setTotalWin(totalWin + 1);
    }

    setTotalTurn(totalTurn + 1);
    setDiceList(data);
  };

  return (
    <div className='game'>
      <TieuDeGame />
      <DanhSachXucXac
        diceList={diceList}
        handleSelectedType={handleSelectedType}
      />
      <ThongTinTroChoi
        selectedType={selectedType}
        totalWin={totalWin}
        totalTurn={totalTurn}
        handlePlayGame={handlePlayGame}
      />
    </div>
  );
}
