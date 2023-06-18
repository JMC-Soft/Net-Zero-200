export const saveToLocalStorage = (key: string, value: number): void => {
  try {
    window.localStorage.setItem(key, value.toString());
  } catch (error) {
    console.error(`Error saving to localStorage: ${error}`);
  }
};

export const getFromLocalStorage = (
  key: string,
  defaultValue: number = 0,
): number => {
  try {
    const storedValue = window.localStorage.getItem(key);
    return storedValue !== null ? Number(storedValue) : defaultValue;
  } catch (error) {
    console.error(`Error getting data from localStorage: ${error}`);
    return defaultValue;
  }
};
