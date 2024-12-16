// return action {type,playLoad}
export function login(accountLogin) {
  return {
      type: "LOGIN",
      payload: accountLogin
  }
}