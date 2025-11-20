const BASE_URL = "https://dummyjson.com";

async function request(path, options = {}) {
  const url = `${BASE_URL}${path}`;

  let res;
  try {
    res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      ...options,
    });
  } catch (networkError) {
    console.error("Network error:", networkError);
    throw networkError;
  }

  if (!res.ok) {
    const error = new Error(`HTTP ${res.status}`);
    error.status = res.status;
    throw error;
  }

  try {
    const data = await res.json();
    return data;
  } catch {
    return null;
  }
}

export const httpClient = {
  get(path) {
    return request(path, { method: "GET" });
  },

  post(path, body) {
    return request(path, {
      method: "POST",
      body: JSON.stringify(body),
    });
  },

  delete(path) {
    return request(path, { method: "DELETE" });
  },
};
