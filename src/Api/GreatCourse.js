import { api } from "./Api";

export async function createCourse(formData) {
  return api("/api/cource", {
    method: "POST",
    body: formData,
  });
}
