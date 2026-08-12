import { api } from "./Api";

export async function GetCourses() {
  return api("/courses");
}
