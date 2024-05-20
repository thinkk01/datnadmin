import Instance from "../axios/Instance";

export const createAccount = (data) => {
  const url = `/api/admin/account/create`;
  return Instance.post(url, data);
};
export const getAccountDetailByAccountId = (id) => {
  const url = `api/admin/account/${id}`;
  return Instance.get(url);
};
export const getAccounts = (page, size) => {
  const url = `/api/admin/account/find-all?page=${page}&size=${size}`;
  return Instance.get(url);
};
export const getAccountByRole = (page, size, role) => {
  const url = `/api/admin/account/by-role?page=${page}&size=${size}&roleName=${role}`;
  return Instance.get(url);
};
export const getMe = (token) => {
  const url = `/api/site/me?token=${token}`;
  return Instance.get(url);
};
export const loginAdmin = (data) => {
  const url = "/api/site/login";
  return Instance.post(url, data);
};
