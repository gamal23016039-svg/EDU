import { api } from "./Api";

function decodeJwtPayload(token) {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const pad = base64.length % 4;
    const normalized = pad ? `${base64}${"=".repeat(4 - pad)}` : base64;
    return JSON.parse(atob(normalized));
  } catch {
    return null;
  }
}

export async function login(email, password) {
  const response = await api("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  const token = response?.data?.token;
  if (!token) {
    throw new Error(response?.msg || "Login failed");
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

export async function register(userData) {
  return api("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(userData),
  });
}

export async function verifyEmail(email, otp) {
  return api("/api/auth/verifyemail", {
    method: "POST",
    body: JSON.stringify({ email, otp }),
  });
}

export async function forgotPassword(email) {
  return api("/api/auth/forgot-password", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}

export async function resetPassword(email, otp, newPassword) {
  return api("/api/auth/resetpass", {
    method: "POST",
    body: JSON.stringify({ email, otp, newpassword: newPassword }),
  });
}
