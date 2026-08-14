import { api } from "./Api";

function decodeJwtPayload(token) {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64 + "=".repeat((4 - (base64.length % 4)) % 4);
    return JSON.parse(atob(padded));
  } catch {
    return null;
  }
}

export async function login(email, password) {
  const response = await api("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  if (response?.status !== "success") {
    throw new Error(response?.msg || "Login failed");
  }

  const token = response?.data?.token;
  if (!token) {
    throw new Error("No token returned by the backend");
  }

  const decoded = decodeJwtPayload(token);

  return {
    token,
    user: {
      id: decoded?.id || null,
      role: decoded?.role || "Student",
    },
  };
}
