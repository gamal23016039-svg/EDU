const BASE_URL = "http://localhost:8080";

export async function api(endpoint, options = {}) {
  const token = localStorage.getItem("token");
  const isFormData = options.body instanceof FormData;

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  const contentType = response.headers.get("content-type") || "";
  const data = contentType.includes("application/json")
    ? await response.json()
    : await response.text();

  if (
    !response.ok ||
    (data &&
      typeof data === "object" &&
      (data.status === "fail" || data.status === "error"))
  ) {
    const message =
      typeof data === "string"
        ? data
        : data?.msg ||
          data?.message ||
          `Request failed with status ${response.status}`;

    throw new Error(message);
  }

  return data;
}

export default api;
