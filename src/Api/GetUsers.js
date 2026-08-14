import { api } from "./Api";

export default async function GetUsers() {
  const response = await api("/api/users/");
  return response?.data?.user || [];
}
