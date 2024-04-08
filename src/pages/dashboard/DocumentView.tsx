import DashboardLayout from "./DashBoardLayout";


const DocumentationsView = () => {
  return (
    <DashboardLayout pageTitle="Documents">
      <div className="flex items-center justify-center h-full">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Welcome to the Documents
        </h1>
      </div>
    </DashboardLayout>
  );
};

export default DocumentationsView;
