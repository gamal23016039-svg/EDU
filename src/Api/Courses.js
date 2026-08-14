import { api } from "./Api";

export async function GetCourses() {
  const response = await api("/api/cource/cources");
  return response?.data?.cource || [];
}
