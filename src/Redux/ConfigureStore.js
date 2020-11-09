import { createStore } from "redux";
import { Reducer, initialUser } from "./Reducer";

export const ConfigureStore = () => {
  const store = createStore(Reducer, initialUser);
  return store;
};
