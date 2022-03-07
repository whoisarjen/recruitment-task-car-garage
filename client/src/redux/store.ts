import { configureStore } from "@reduxjs/toolkit";
import checkoutReducer from './slices/checkout.slice'
import carsReducer from './slices/car.slice'

export const store = configureStore({
    reducer: {
        cars: carsReducer,
        checkout: checkoutReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;