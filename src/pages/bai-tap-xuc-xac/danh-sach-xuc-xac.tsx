import React from 'react';
import { XucXacEnum } from '../../enums/xuc-xac';
import XucXac from './xuc-xac';

interface Props {
  handleSelectedType: (type: XucXacEnum) => void;
  diceList: string[];
}

export default function DanhSachXucXac(props: Props): JSX.Element {
  const { handleSelectedType, diceList } = props;

  return (
    <div className='row text-center mt-5'>
      <div className='col-5'>
        <button
          className='btnGame'
          onClick={() => handleSelectedType(XucXacEnum.Tai)}
        >
          TÀI
        </button>
      </div>
      <div className='col-2'>
        {diceList.map((ele: string, idx: number) => {
          return <XucXac key={idx} ele={ele} />;
        })}
      </div>
      <div className='col-5'>
        <button
          className='btnGame'
          onClick={() => handleSelectedType(XucXacEnum.Xiu)}
        >
          XỈU
        </button>
      </div>
    </div>
  );
}
