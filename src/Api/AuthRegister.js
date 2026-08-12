import { api } from "./Api";

export async function register(userdata) {
  return api("/users", {
    method: "POST",
    body: JSON.stringify(userdata),
  });
}
