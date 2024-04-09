import DashboardLayout from "./DashBoardLayout";

const SubmissionsView = () => {
  return (
    <DashboardLayout pageTitle="Appointments">
      <div className="flex items-center justify-center h-full">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Welcome to the Appointments!
        </h1>
      </div>
    </DashboardLayout>
  );
};

export default SubmissionsView;
