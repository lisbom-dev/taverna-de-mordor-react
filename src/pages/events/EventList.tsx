import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Calendar from "../../partials/Calendar";

const EventList: React.FC = () => (
  <MainLayout>
    <Calendar />
  </MainLayout>
);

export default EventList;
