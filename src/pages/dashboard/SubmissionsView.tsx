import Submissions from "./clientsubmissions/Submissions";
import DashboardLayout from "./DashBoardLayout";

const SubmissionsView = () => {
  return (
    <DashboardLayout pageTitle="Submissions">
      <div className="flex items-center justify-center h-full">
        <Submissions />
      </div>
    </DashboardLayout>
  );
};

export default SubmissionsView;
