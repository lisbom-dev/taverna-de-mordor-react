import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

let authenticated = false;

const AuthGoogle: React.FC = () => {
  //* hooks
  const { googleOauth } = useAuth();
  const navigate = useNavigate();

  //* handlers
  const handleGoogleAuth = async () => {
    try {
      console.log("cu");
      await googleOauth();
      console.log("first");

      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  //* effects
  useLayoutEffect(() => {
    if (!authenticated) {
      handleGoogleAuth();
      authenticated = true;
    }
  }, []);

  //* render
  return <div className="text-white">AuthGoogle</div>;
};

export default AuthGoogle;
