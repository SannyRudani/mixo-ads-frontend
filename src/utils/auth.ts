export interface User {
  name: string;
  email: string;
  password: string;
}

/* USERS (signup) */
export const getUsers = (): User[] => {
  return JSON.parse(localStorage.getItem("users") || "[]");
};

export const saveUser = (user: User) => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};

/* LOGIN */
export const loginUser = (
  email: string,
  password: string,
): boolean => {
  const users = getUsers();
  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) return false;

    sessionStorage.setItem("authUser", JSON.stringify(user));
    localStorage.removeItem("authUser");

  return true;
};

/* LOGOUT */
export const logoutUser = () => {
  localStorage.removeItem("authUser");
  sessionStorage.removeItem("authUser");
};

/* AUTH CHECK */
export const getCurrentUser = (): User | null => {
  return (
    JSON.parse(localStorage.getItem("authUser") || "null") ||
    JSON.parse(sessionStorage.getItem("authUser") || "null")
  );
};

export const isAuthenticated = () => {
  return Boolean(getCurrentUser());
};
