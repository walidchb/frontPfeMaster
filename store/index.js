import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./features/main/mainSlice";
import authReducer from "./features/auth/authSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the store using a callback for middleware
const store = configureStore({
  reducer: {
    main: mainReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware), // Add sagaMiddleware while preserving default middleware
});

// Start the sagas
sagaMiddleware.run(rootSaga);

export default store;
