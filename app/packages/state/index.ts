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
  });
}
