import { CONTACT } from "../assets";

const Contact = () => {
  return (
    <div id="contact" className="border-stone-900 pb-20 px-4">
      <h2 className="my-10 text-center text-3xl md:text-4xl font-semibold">
        Get in Touch
      </h2>

      <div className="max-w-3xl mx-auto text-center md:text-left tracking-tighter flex flex-col md:flex-row md:justify-between gap-6">
  {/* Address */}
  <div className="my-2 group transition hover:shadow-[0_0_15px_3px_#36ff0f] rounded-lg p-2">
    <p className="text-lg font-medium">Address</p>
    <p className="text-stone-700 group-hover:text-stone-100 transition">
      {CONTACT.address}
    </p>
  </div>

  {/* Phone */}
  <div className="my-2 group transition hover:shadow-[0_0_15px_3px_#36ff0f] rounded-lg p-2">
    <p className="text-lg font-medium">
      Phone <span className="text-stone-500">(whatsapp)</span>
    </p>
    <p className="text-stone-700 group-hover:text-stone-100 transition">
      {CONTACT.phoneNo}
    </p>
  </div>

  {/* Email */}
  <div className="my-2 group transition hover:shadow-[0_0_15px_3px_#36ff0f] rounded-lg p-2">
    <p className="text-lg font-medium">Email</p>
    <a
      href={`mailto:${CONTACT.email}`}
      className="text-stone-700 border-b group-hover:text-stone-100 transition"
    >
      {CONTACT.email}
    </a>
  </div>
</div>
    </div>
  );
};

export default Contact;
