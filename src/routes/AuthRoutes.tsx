import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthGoogle from "../pages/AuthGoogle";
import SignUp from "../pages/users/SignUp";
import UsersList from "../pages/users/UsersList";
import BoardSessionsCalendar from "../partials/BoardSessionsCalendar";
import Home from "../resources/views/Home";
import Calendar from "../resources/views/partials/Calendar";
import Team from "../resources/views/Team";

const AuthRoutes: React.FC = () => {
  //* render
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/sign-in" element={<></>} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/board-session" element={<BoardSessionsCalendar />} />
      <Route path="/equipe" element={<Team />} />
      <Route path="/users" element={<UsersList />} />
      <Route path="/users/:id" element={<></>} />
      <Route path="/adms/:id" element={<></>} />
      <Route path="/masters/:id" element={<></>} />
      <Route path="/events" element={<Calendar />} />
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
