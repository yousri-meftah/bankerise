/* eslint-disable react-refresh/only-export-components */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ControllersState {
    X_APP_ID: string | null;
    CHANNEL: string | null;
    X_Device_Id: string | null;
}

const initialState: ControllersState = {
    X_APP_ID: null,
    CHANNEL: "WEB",
    X_Device_Id: null,
};

const HeaderSlice = createSlice({
  name: 'controllers',
  initialState,
  reducers: {
        setAppId: (state, action: PayloadAction<string | null>) => {
            state.X_APP_ID = action.payload;
        },
        setChannel: (state, action: PayloadAction<string | null>) => {
            state.CHANNEL = action.payload;
        },
        setDeviceId: (state, action: PayloadAction<string | null>) => {
            state.X_Device_Id = action.payload;
        },
  },
});

export const { setAppId,setChannel,setDeviceId } = HeaderSlice.actions;
export default HeaderSlice;