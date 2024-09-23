import { Link } from "react-scroll";
 import { Button } from "@material-tailwind/react";



export default function StartNowSection() {
  return (
    <>
      <div className="container mx-auto mt-8 mb-16 max-w-full">
        <div className="flex h-[460px] w-full x-6 py-12">
          <div
            className="flex-1 flex flex-col justify-center p-2"
            style={{ backgroundColor: "#0e5a97" }}
          >
            <p className="pt-2 mb-8 mt-6 md:text-3xl text-2xl text-center text-white">
              Our expert knowledge goes a long way in ensuring that our clients
              receive only the best.
            </p>

            <div className="flex justify-center">
              <Link
                to="contact-section"
                smooth={true}
                duration={500}
                style={{ display: "inline-block" }}
              >
                <Button
                  placeholder={"Start Now"}
                  children="Start Now"
                  style={{ backgroundColor: "#0e5a97" }}
                  className="hover:bg-blue-900 text-white font-bold py-2 px-4 rounded cursor-pointer" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                />
              </Link>
            </div>
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
