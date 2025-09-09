export function saveToLocal(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error("Error saving to localStorage:", err);
  }
}

export function readFromLocal(key) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (err) {
    console.error("Error reading from localStorage:", err);
    return null;
  }
}