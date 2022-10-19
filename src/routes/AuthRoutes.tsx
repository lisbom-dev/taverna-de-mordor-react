import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../resources/views/Home";
import AuthGoogle from "../resources/views/AuthGoogle";
import Team from "../resources/views/Team";
import UsersList from "../resources/views/users/UsersList";
import SignUp from "../resources/views/users/SignUp";
import Calendar from "../resources/views/partials/Calendar";
import BoardSessionsCalendar from "../resources/views/partials/BoardSessionsCalendar";

const AuthRoutes: React.FC = () => {
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
