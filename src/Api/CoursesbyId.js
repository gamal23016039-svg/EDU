import { api } from "./Api";

export async function GetCoursebyid(id) {
  return api(`/courses/${id}`);
}
