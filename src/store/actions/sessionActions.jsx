export const ACTION_SESSION_SET = "[session] SET";
export const ACTION_SESSION_INIT = "[session] INIT";
export const ACTION_SESSION_LOGOUT = "[session] LOGOUT"

export const sessionSetAction = (profile) => ({
  type: ACTION_SESSION_SET,
  payload: profile,
});

export const sessionInitAction = () => ({
  type: ACTION_SESSION_INIT,
});

export const sessionLogoutAction = () => ({
  type: ACTION_SESSION_LOGOUT
})
