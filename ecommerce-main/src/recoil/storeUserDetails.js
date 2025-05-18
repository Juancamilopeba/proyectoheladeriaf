import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export const userDetailsState = atom({
  key: "userDetails",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
