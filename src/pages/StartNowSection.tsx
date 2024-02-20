import { Link } from "react-scroll";

export default function StartNowSection() {
  return (
    <>
      <div className="container mx-auto mt-8 mb-16 max-w-full">
        <div className="flex h-[400px] w-full">
          <div
            className="flex-1 flex flex-col justify-center p-2"
            style={{ backgroundColor: "#0e5a97" }}
          >
            <p className="pt-2 mb-8 text-2xl text-center text-white">
              Our expert knowledge goes a long way in ensuring that our clients
              receive only the best.
            </p>

            <Link
              to="contact-section"
              smooth={true}
              duration={500}
              style={{ backgroundColor: "#0D4E83" }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-center cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
          <div
            className="flex-1"
            style={{
              backgroundImage: `url(/justice-bg.jpeg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </div>
    </>
  );
}
