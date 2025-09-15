import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      const parsed = item ? JSON.parse(item) : initialValue;
      return Array.isArray(parsed) ? parsed.filter(Boolean) : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  });

  useEffect(() => {
    if (storedValue !== null) {
      try {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      } catch (error) {
        console.log(error);
      }
    }
  }, [key, storedValue]);
    
    const addItem = (item) => {
      console.log('add item')
      setStoredValue((prev) => {
        if (Array.isArray(prev) && !prev.includes(item)) {
          return [...prev, item];
        }
        return prev;
      });
  };

  const removeItem = (item) => {
    setStoredValue((prev) => {
      if (Array.isArray(prev)) {
        return prev.filter((x) => x !== item);
      }
      return [];
    });
  };

  return [storedValue, addItem, removeItem];
}

export default useLocalStorage;

export const loadFavorites = () => {
  try {
    const item = window.localStorage.getItem("favoriteCountries");
    return item ? JSON.parse(item) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
}
