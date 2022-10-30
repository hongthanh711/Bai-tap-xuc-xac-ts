import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { XucXacEnum } from '../../enums/xuc-xac';

interface XucXacState {
  selectedType: XucXacEnum | undefined;
  totalWin: number;
  totalTurn: number;
  diceList: string[];
}

const INITIAL_STATE: XucXacState = {
  // ràng buộc
  selectedType: undefined,
  totalWin: 0,
  totalTurn: 0,
  diceList: ['./images/2.png', './images/4.png', './images/1.png'],
};
// } as XucXacState; => ép kiểu

const xucXacSlice = createSlice({
  name: 'xucXac',
  initialState: INITIAL_STATE,
  reducers: {
    handleSelectedType(state: XucXacState, action: PayloadAction<XucXacEnum>) {
      state.selectedType = action.payload;
    },
    handlePlayGame(state: XucXacState) {
      let totalPoint: number = 0;
      const data = [...state.diceList];

      state.diceList.forEach((ele: string, idx: number) => {
        const randomNumber = Math.floor(Math.random() * 6 + 1);

        data[idx] = `./images/${randomNumber}.png`;
        totalPoint += randomNumber;
      });

      if (
        (state.selectedType === XucXacEnum.Tai && totalPoint > 10) ||
        (state.selectedType === XucXacEnum.Xiu && totalPoint <= 10)
      ) {
        state.totalWin += 1;
        // setTotalWin(totalWin + 1);
      }

      state.totalTurn += 1;
      state.diceList = data;
      //   setTotalTurn(totalTurn + 1);
      //   setDiceList(data);
    },
  },
});

// switch (type) {
//     case 'SET_SELECTED_TYPE'
//         return {...state}

//     default:
//         break;
// }

export const xucXacActions = xucXacSlice.actions;

export const xucXacReducer = xucXacSlice.reducer;
