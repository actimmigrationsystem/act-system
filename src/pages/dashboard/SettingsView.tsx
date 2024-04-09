import DashboardLayout from "./DashBoardLayout";

const SettingsView = () => {
  return (
    <DashboardLayout pageTitle="Settings">
      <div className="flex items-center justify-center h-full">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Welcome to the Settings View
        </h1>
      </div>
    </DashboardLayout>
  );
};

export default SettingsView;
