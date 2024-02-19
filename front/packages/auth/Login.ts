export function dispatchLogIn() {
  const login = new CustomEvent("login", {
    detail: {
      login: true,
    },
  });
  dispatchEvent(login);
}

export function dispatchLogOut() {
  const logout = new CustomEvent("logout", {
    detail: {
      login: false,
    },
  });
  dispatchEvent(logout);
}
