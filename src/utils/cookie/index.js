import Cookies from "universal-cookie";

export const setCookie = (name, data) => {
  const cookies = new Cookies();
  cookies.set(name, data, { path: "/" });
};

export const getCookie = name => {
  const cookies = new Cookies();
  return cookies.get(name);
};

export const removeCookie = name => {
  const cookies = new Cookies();
  cookies.set(name, "", { path: "/", expires: new Date(Date.now()) });
};

export default { getCookie, removeCookie, setCookie };
