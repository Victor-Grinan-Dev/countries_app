import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValue]);

  const addItem = (item) => {
    setStoredValue((prevValue) => [...prevValue, item]);
  };

  const removeItem = (index) => {
    setStoredValue((prevValue) => prevValue.filter((_, i) => i !== index));
  };

//   const clearArray = () => {
//     setStoredValue([]);
//   };

  return [
    storedValue, 
    addItem, 
    removeItem, 
    // clearArray
  ];
}

export default useLocalStorage;
