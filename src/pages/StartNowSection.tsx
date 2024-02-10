import SectionContainer from "../components/SectionContainer";

export default function StartNowSection() {
  return (
    <SectionContainer marginTop="auto" marginBottom="12px" height="70vh">
      <div className="flex h-full">
        <div
          className="flex-1 flex flex-col justify-center p-2"
          style={{ backgroundColor: "#0e5a97" }}
        >
          <p className="pt-2 mb-8 text-2xl text-center text-white">
            Our expert knowledge goes a long way in ensuring that our clients
            receive only the best.
          </p>
          <button
            style={{ backgroundColor: "#0D4E83" }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-center"
          >
            Contact Us
          </button>
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
    </SectionContainer>
  );
}
