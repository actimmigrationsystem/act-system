import React from "react";
import { Alert, Button } from "@material-tailwind/react";

interface MessageAlertProps {
  message?: string;
  actionText?: string;
  onActionClick?: () => void;
  backgroundColor?: string;
  open: boolean;
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l9-5-9-5-9 5 9 5zm-9 5l9 5 9-5"
      />
    </svg>
  );
};

const MessageAlert = ({
  message = "Sorry, something went wrong. Please try again.",
  actionText = "Close",
  onActionClick,
  open,
}: MessageAlertProps) => {
  const handleAccept = () => {
    if (onActionClick) {
      onActionClick();
    }
  };

  return (
    <Alert
      variant="gradient"
      open={open}
      icon={<Icon />}
      action={
        <>
          <div className="flex justify-between items-center">
            <p>{message}</p>
            <Button
              placeholder={""}
              variant="text"
              color="white"
              size="sm"
              onClick={handleAccept}  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              {actionText}
            </Button>
          </div>
        </>
      }
      children=""
    />
  );
};

export default MessageAlert;
