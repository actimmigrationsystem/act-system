import DashboardLayout from "./DashBoardLayout";

const MessagesView = () => {
  return (
    <DashboardLayout pageTitle="Messages">
      <div className="flex items-center justify-center h-full">
        <div className="px-4 pt-6">
          <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
            <div className="w-full">
              <h3 className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                Progress
              </h3>
              <div className="flex items-center mb-2">
                <div className="w-16 text-sm font-medium dark:text-white">
                  50+
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500"
                    style={{ width: "18%" }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-16 text-sm font-medium dark:text-white">
                  40+
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500"
                    style={{ width: "15%" }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-16 text-sm font-medium dark:text-white">
                  30+
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-16 text-sm font-medium dark:text-white">
                  20+
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
export default MessagesView;
