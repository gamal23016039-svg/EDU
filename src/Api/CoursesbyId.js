import { api } from "./Api";

export async function GetCoursebyid(id) {
  const response = await api("/api/cource/cources");
  const courseList = response?.data?.cource || [];
  return courseList.find(
    (course) =>
      String(course._id) === String(id) || String(course.id) === String(id),
  );
}
