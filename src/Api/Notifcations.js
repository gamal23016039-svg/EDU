import api from "./Api";

export async function GetNotifications() {
  return api("/notificaion");
}
