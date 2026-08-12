import User from "./Users.module.css";
import { useState, useEffect } from "react";
import GetUsers from "../../../../Api/GetUsers";
import { api } from "../../../../Api/Api";

function AllUsers() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [busyUserId, setBusyUserId] = useState(null);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.role.toLowerCase().includes(search.toLowerCase()),
  );

  async function handleBlockUser(user) {
    const isCurrentlyBlocked =
      user.blocked === true || String(user.blocked).toLowerCase() === "true";

    const nextBlockedValue = !isCurrentlyBlocked;

    try {
      setBusyUserId(user.id);

      const updatedUser = await api(`/users/${user.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          blocked: nextBlockedValue,
        }),
      });

      setUsers((currentUsers) =>
        currentUsers.map((currentUser) =>
          String(currentUser.id) === String(user.id)
            ? { ...currentUser, blocked: updatedUser.blocked }
            : currentUser,
        ),
      );
    } catch (error) {
      console.error(error.message || "Failed to update user block status");
    } finally {
      setBusyUserId(null);
    }
  }

  useEffect(() => {
    async function Search() {
      try {
        const AllUsers = await GetUsers();
        setUsers(AllUsers);
      } catch (Error) {
        console.log(Error.message || "somthing went wrong");
      }
    }
    Search();
  }, []);

  return (
    <div className={User.father}>
      <div className={User.search}>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search...."
        />
      </div>

      <table className={User.tableNames}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
            <th>Status</th>
            <th>Buttons Of Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => {
            const isBlocked =
              user.blocked === true ||
              String(user.blocked).toLowerCase() === "true";

            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.role}</td>
                <td>{isBlocked ? "Blocked" : "Active"}</td>
                <td>
                  <button
                    className={User.blockButton}
                    disabled={busyUserId === user.id}
                    onClick={() => handleBlockUser(user)}
                  >
                    {busyUserId === user.id
                      ? "..."
                      : isBlocked
                        ? "Unblock"
                        : "Block"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AllUsers;
