export default function MapComponent() {
  return (
    <div className="max-w-md flex justify-center">
      {" "}
      <iframe
        title="Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.8800294571993!2d25.3947873!3d-33.763765899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e7b24133fe88f7d%3A0xf37d30cdacf00a58!2sACT%20IMMIGRATION%20AND%20LABOUR%20CONSULTANT!5e0!3m2!1sen!2sza!4v1707215926731!5m2!1sen!2sza"
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
