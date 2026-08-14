import { api } from "./Api";

export async function GetDashBoardAdmin() {
  const response = await api("/api/dashboard/DashboardAdmin");
  return response?.data || {};
}

export async function GetDashBoardTeacher() {
  const response = await api("/api/dashboard/Dashboardteacher");
  return response?.data || {};
}

export async function GetDashBoardStudent() {
  const response = await api("/api/dashboard/Dashboardstudent");
  return response?.data || {};
}
