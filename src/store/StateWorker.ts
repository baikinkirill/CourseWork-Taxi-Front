import store from "@/store/index";

export default function StateWorker() {
  return {
    state: store.state.state,
    setState: (newState: any) => {
      store.dispatch("setState", newState);
    },
  };
}

export function setState(newState: any) {
  store.dispatch("setState", newState);
}

export const getState = () => {
  return store.state.state;
};
