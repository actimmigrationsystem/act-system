import { useEffect, useState } from "react";
import { Alert, Button } from "@material-tailwind/react";
import Cookies from "js-cookie";

interface CookieAlertProps {
  message?: string;
  actionText?: string;
  onActionClick?: () => void;
  backgroundColor?: string;
  open: boolean;
}

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const CookieAlert: React.FC<CookieAlertProps> = ({
  message = "Sorry, something went wrong. Please try again.",
  actionText = "Close",
  onActionClick,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const alertAccepted = Cookies.get("alertAccepted");
    if (alertAccepted) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("alertAccepted", "true", { expires: 365 });
    setOpen(false);
    if (onActionClick) {
      onActionClick();
    }
  };

  return (
    <>
      <Alert
        variant="gradient"
        open={open}
        icon={<Icon />}
        action={<div className="flex justify-between items-center">
          <p>{message}</p>
          <Button
            placeholder={actionText}
            variant="text"
            color="white"
            size="sm"
            onClick={handleAccept}
          >
            {actionText}
          </Button>
        </div>
      }
    children={""}
      />
    </>
  );
};

export default CookieAlert;
