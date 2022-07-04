import { DarkThemeToggle } from "flowbite-react";

const AppRoutes: React.FC = () => {
  return (
    <div>
      <div className="float-right">
        <DarkThemeToggle />
      </div>
      <h1 className="dark:text-white">AppRoutes</h1>
    </div>
  );
};

export default AppRoutes;
