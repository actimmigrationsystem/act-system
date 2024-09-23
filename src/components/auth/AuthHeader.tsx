import { Link } from "react-router-dom";
import AppLogo from "../../assets/dashboard-logo.png"

interface HeaderProps {
    heading: string;
    paragraph: string;
    linkName: string;
    linkUrl?: string;

}
const Header = ({
  heading,
  paragraph,
  linkName,
  linkUrl = "#",
}: HeaderProps )=> {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <img alt="" className="h-40 w-40" src={AppLogo} />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600 mt-5">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium hover:text-blue-500 "
          style={{ color: "#0e5a97" }}
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
};
export default Header;
