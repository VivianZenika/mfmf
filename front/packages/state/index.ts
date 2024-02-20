import { reactive } from "vue";

export function updateAppState(eventName: string, detail: Record<string, any>) {
  dispatchEvent(
    new CustomEvent(eventName, {
      detail: {
        ...detail,
      },
    })
  );

  Object.entries(detail).map((el) => {
    const [key, value] = el;
    localStorage.setItem(key, JSON.stringify(value));
    if (value === undefined) localStorage.removeItem(key);
  });
}

export const useStore = () => {
  const store = reactive({
    state: {
      isAuth: false,
      user: { name: "" },
    },
  });

  addEventListener("state", (e: CustomEvent) => {
    store.state = { ...e.detail };
  });
  return store;
};
