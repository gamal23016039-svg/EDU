import { api } from "./Api";

export async function register(userData) {
  return api("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(userData),
  });
}
