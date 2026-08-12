const BASE_URL = "http://localhost:5000";

export async function api(endpoint, options = {}) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token && {
          Authorization: `Bearer ${token}`,
        }),
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
