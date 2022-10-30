import React, { useState } from 'react';
import { XucXacEnum } from '../../enums/xuc-xac';
import DanhSachXucXac from './danh-sach-xuc-xac';

import './index.css';
import ThongTinTroChoi from './thong-tin-tro-choi';
import TieuDeGame from './tieu-de-game';

export default function BaiTapXucXacRedux(): JSX.Element {
  return (
    <div className='game'>
      <TieuDeGame />
      <DanhSachXucXac />
      <ThongTinTroChoi />
    </div>
  );
}
