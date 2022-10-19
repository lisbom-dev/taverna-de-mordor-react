import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const AuthGoogle: React.FC = () => {
  const { googleOauth } = useAuth();
  const navigate = useNavigate();

  const handleGoogleAuth = async () => {
    try {
      await googleOauth();
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    } catch(err) {
      console.log(err)
    }
  };

  useEffect(() => {
    handleGoogleAuth();
  }, []);

  return <div className="text-white">AuthGoogle</div>;
};

export default AuthGoogle;
