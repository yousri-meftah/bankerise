import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ControllersState {
    X_APP_ID: string | null;
    CHANNEL: string | null;
    X_Device_Id: string | null;
  // Other controller-related fields can be added here
}

const initialState: ControllersState = {
    X_APP_ID: null,
    CHANNEL: "WEB",
    X_Device_Id: null,
  // Initialize other fields as needed
};

const controllersSlice = createSlice({
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
    // Other controller-related reducers can be added here
  },
});

export const { setAppId,setChannel,setDeviceId } = controllersSlice.actions;
export default controllersSlice;