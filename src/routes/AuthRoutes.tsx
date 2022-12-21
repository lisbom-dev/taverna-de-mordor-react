import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthGoogle from "../pages/AuthGoogle";
import NotFound from "../pages/errors/NotFound";
import Home from "../pages/Home";
import Team from "../pages/Team";
import SignUp from "../pages/users/SignUp";
import UsersList from "../pages/users/UsersList";
import BoardSessionsCalendar from "../partials/BoardSessionsCalendar";
import Calendar from "../partials/Calendar";

const AuthRoutes: React.FC = () => (
  //* render
  <Routes>
    {/* helper routes */}
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="*" element={<NotFound />} />

    {/*  */}
    <Route path="/home" element={<Home />} />
    <Route path="/sign-in" element={<div>Page not implemented</div>} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/board-session" element={<BoardSessionsCalendar />} />
    <Route path="/team" element={<Team />} />
    <Route path="/users" element={<UsersList />} />
    <Route path="/users/:id" element={<div>Page not implemented</div>} />
    <Route path="/adms/:id" element={<div>Page not implemented</div>} />
    <Route path="/masters/:id" element={<div>Page not implemented</div>} />
    <Route path="/events" element={<Calendar />} />
    <Route
      path="/events/:event_id/boards"
      element={<div>Page not implemented</div>}
    />
    <Route
      path="/boards/:board_id/chat"
      element={<div>Page not implemented</div>}
    />
    <Route
      path="/boards/:board_id/players"
      element={<div>Page not implemented</div>}
    />
    <Route
      path="/boards/:board_id/chat"
      element={<div>Page not implemented</div>}
    />
    <Route path="/notifications" element={<div>Page not implemented</div>} />
    <Route
      path="/notifications/:id"
      element={<div>Page not implemented</div>}
    />
    <Route path="/auth/google" element={<AuthGoogle />} />
  </Routes>
);
export default AuthRoutes;
