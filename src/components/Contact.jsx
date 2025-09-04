import { CONTACT } from "../assets";
import { motion } from "framer-motion";

const Contact = () => {
  const contactItems = [
    { label: "Address", value: CONTACT.address },
    { label: "Phone (whatsapp)", value: CONTACT.phoneNo },
    { label: "Email", value: CONTACT.email, isLink: true },
  ];

  return (
    <div id="contact" className="pb-20 px-4">
      <motion.h2
        className="my-10 text-center text-3xl md:text-4xl font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </motion.h2>

      <div className="max-w-3xl mx-auto text-center md:text-left tracking-tighter flex flex-col md:flex-row md:justify-between gap-6">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            className="my-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <p className="text-lg font-medium">{item.label}</p>
            {item.isLink ? (
              <motion.a
                href={`mailto:${item.value}`}
                className="text-stone-700 border-b transition"
                whileHover={{
                  color: "#36ff0f",
                  textShadow:
                    "0 0 5px #36ff0f, 0 0 10px #36ff0f, 0 0 20px #36ff0f",
                }}
              >
                {item.value}
              </motion.a>
            ) : (
              <motion.p
                className="text-stone-700 transition"
                whileHover={{
                  color: "#36ff0f",
                  textShadow:
                    "0 0 5px #36ff0f, 0 0 10px #36ff0f, 0 0 20px #36ff0f",
                }}
              >
                {item.value}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Contact;