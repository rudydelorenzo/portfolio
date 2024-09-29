import { create } from "zustand";

type EnvStoreData = {
    pwd: string[];
};

type EnvStoreActions = {
    setPwd: (pwd: EnvStoreData["pwd"]) => void;
    getPwd: () => EnvStoreData["pwd"];
};

export const useEnv = create<EnvStoreData & EnvStoreActions>((set, get) => ({
    pwd: [],
    setPwd: (pwd) => {
        set(() => ({
            pwd,
        }));
    },
    getPwd: () => get().pwd,
}));
