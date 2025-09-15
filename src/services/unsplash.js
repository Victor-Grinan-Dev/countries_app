export async function getUnsplashPhoto(country) {
  const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
  const url = `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&query=${encodeURIComponent(country)}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Unsplash error: ${res.status}`);
    }
    const data = await res.json();
    return data; 
  } catch (err) {
    console.error(err);
    return null;
  }
}