import { useContext, useState, useEffect } from "react";
import Navbar from "./Navbar";
import { ChatEngine } from "react-chat-engine";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContextProvider";
import axios from "axios";
import { auth } from "../firebase";

const Chat = () => {
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "PRIVATE-KEY": "26214fac-01bd-498c-9fa1-de4bb079d51e",
          "User-Name": user.email,
          "User-Secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("username", user.email);
        formdata.append("email", user.email);
        formdata.append("secret", user.uid);
        getData(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users", formdata, {
              headers: {
                "PRIVATE-KEY": "26214fac-01bd-498c-9fa1-de4bb079d51e",
              },
            })
            .then(() => {
              setLoading(false);
            })
            .catch((error) => {
              console.log(error);
            });
        });
      });
  });

  const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  const logoutHandler = () => {
    auth.signOut();
    history.push("/");
  };

  if (loading || !user) return "Loading...";

  return (
    <div>
      <Navbar logoutHandler={logoutHandler} />
      <ChatEngine
        height="calc(100vh - 45px)"
        projectID="c3f0f22c-42fa-4be8-8014-a12b044079c2"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chat;
