import api from "./Api";

export async function GetDashBoard() {
  return api("/dashboard");
}
