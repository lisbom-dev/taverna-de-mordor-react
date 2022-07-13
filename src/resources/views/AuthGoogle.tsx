import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const AuthGoogle: React.FC = () => {
  const { googleOauth } = useAuth();
  const navigate = useNavigate();

  const handleGoogleOauth = async () => {
    await googleOauth();
  };

  useEffect(() => {
    handleGoogleOauth();
  }, []);

  return (
    <div>
      <p className="ola-redirected">Olá Redirecionado</p>
    </div>
  );
};

export default AuthGoogle;
