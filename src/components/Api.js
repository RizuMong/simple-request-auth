export default (api = {
  // Pake Env perusahaan saya pak hehe
  getUser: (email, password) => {
    return fetch("https://api-oos.jojonomic.com/26193/uts-mobile/login-user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
  },

  createUser: (email, password) => {
    // Pake Env perusahaan saya pak hehe
    return fetch("https://api-oos.jojonomic.com/26193/uts-mobile/create-user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
  }
});
