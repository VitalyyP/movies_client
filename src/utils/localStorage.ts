export const saveToStorage = (name: string, data: any) => {
  if (!window || !window.localStorage) {
    return;
  }
  window.localStorage.setItem(name, JSON.stringify(data));
};

export const getFromStorage = (name: string) => {
  if (!window || !window.localStorage || !window.localStorage.getItem(name)) {
    return null;
  }

  try {
    return JSON.parse(localStorage.getItem(name) || "");
  } catch (e) {
    console.error(e);
    return null;
  }
};
