import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import AuthGoogle from "../resources/views/AuthGoogle";
import Home from "../resources/views/Home";
import SignIn from "../resources/views/SignIn";
import Team from "../resources/views/Team";
import SignUp from "../resources/views/users/SignUp";
import UsersList from "../resources/views/users/UsersList";

const AuthRoutes: React.FC = () => {
  const { signed } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/logout" element={<></>} />
      <Route path="/equipe" element={<Team />} />
      <Route path="/users" element={<UsersList />} />
      <Route path="/users/:id" element={<></>} />
      <Route path="/adms/:id" element={<></>} />
      <Route path="/masters/:id" element={<></>} />
      <Route path="/events" element={<></>} />
      <Route path="/events/:event_id/boards" element={<></>} />
      <Route path="/boards/:board_id/chat" element={<></>} />
      <Route path="/boards/:board_id/players" element={<></>} />
      <Route path="/boards/:board_id/chat" element={<></>} />
      <Route path="/notifications" element={<></>} />
      <Route path="/notifications/:id" element={<></>} />
      <Route path="/auth/google" element={<AuthGoogle />} />
    </Routes>
  );
};

export default AuthRoutes;
