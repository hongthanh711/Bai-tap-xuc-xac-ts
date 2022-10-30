import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { XucXacEnum } from '../../enums/xuc-xac';
import { xucXacActions } from '../../store/reducers/xucXacReducer';
import { AppDispatch, RootState } from '../../store/store';
import XucXac from './xuc-xac';

interface Props {}

export default function DanhSachXucXac(props: Props): JSX.Element {
  const xucXacState = useSelector((state: RootState) => state.xucXacReducer);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className='row text-center mt-5'>
      <div className='col-5'>
        <button
          className='btnGame'
          onClick={() =>
            dispatch(xucXacActions.handleSelectedType(XucXacEnum.Tai))
          }
        >
          TÀI
        </button>
      </div>
      <div className='col-2'>
        {xucXacState.diceList.map((ele: string, idx: number) => {
          return <XucXac key={idx} ele={ele} />;
        })}
      </div>
      <div className='col-5'>
        <button
          className='btnGame'
          onClick={() =>
            dispatch(xucXacActions.handleSelectedType(XucXacEnum.Xiu))
          }
        >
          XỈU
        </button>
      </div>
    </div>
  );
}
