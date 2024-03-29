import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    console.log('user inside token', user)
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`https://dry-hamlet-93719.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data inside usToken", data);
          const accessToken = data.token;
          // set token your local storage
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);
  return token;
};
export default useToken;
