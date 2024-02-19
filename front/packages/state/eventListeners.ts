import { updateAppState } from "./index";

addEventListener("login", () => {
  updateAppState("state", { isAuth: true, user: { name: "Vivian" } });
});
addEventListener("logout", () => {
  updateAppState("state", { isAuth: false, user: undefined });
});
