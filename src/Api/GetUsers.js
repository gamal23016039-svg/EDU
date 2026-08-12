import { api } from "./Api";

export default async function GetUsers() {
  return api("/users");
}
