import "./style.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const index = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && pass) {
      localStorage.setItem("token", "abc");
      navigate("/home");
    } else {
      setShow(!show);
    }
  };
  return (
    <>
      <section className="login-section">
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        <div className="box">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="container">
            <div className="form">
              <h2>Login</h2>
              <div>
                <div className="inputbox">
                  <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="inputbox">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPass(e.target.value)}
                  />
                </div>
                <div className="inputbox ">
                  {/* <input type="submit" value="LOGIN" /> */}
                  <button
                    className="btn w-100 "
                    style={{
                      background: "#fff",
                    }}
                    onClick={() => handleLogin()}
                  >
                    {" "}
                    Login
                  </button>

                  {show && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        fontWeight: "600",
                        marginTop: "12px",
                      }}
                    >
                      Both UserName and Passwords are required!
                    </div>
                  )}
                  <div
                    className="text-center my-3 py-2"
                    onClick={() => navigate("/home")}
                    style={{
                      color: "#fff",
                      fontWeight: "500",
                      cursor: "pointer",
                    }}
                  >
                    Continue without login
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
