import { api } from "./Api";

export async function login(email, password) {
  const users = await api("/users");

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    throw new Error("invalid email or password");
  }

  return user;
}
