// const Contact = () => {
//   return (
//     <div className="max-w-3xl mx-auto p-4 mt-10 text-gray-800">
//       <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
//         📞 Contact Us
//       </h2>

//       <div className="text-center mb-6">
//         <p className="text-lg mb-2">📍 Address:</p>
//         <p className="mb-4 font-medium">
//           Foodies Point, Main Street, Karachi, Pakistan
//         </p>

//         <a
//           href="https://wa.me/923001234567?text=Hi%20I%20want%20to%20order%20from%20Foodies%20Point"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full shadow-md">
//             Order via WhatsApp 📲
//           </button>
//         </a>
//       </div>

//       <div className="overflow-hidden rounded-xl shadow-md">
//         <iframe
//           title="Google Map"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14474.59552560023!2d67.03017562565337!3d24.860734871017204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33edfc0b4c02b%3A0xe25dfb25c0217ea1!2sKarachi!5e0!3m2!1sen!2s!4v1693334590195!5m2!1sen!2s"
//           width="100%"
//           height="300"
//           allowFullScreen=""
//           loading="lazy"
//           className="rounded-xl border-none"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default Contact;













// src/pages/Contact.jsx
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function Contact() {
  const phoneNumber = "03163093120";
  const whatsappLink = `https://wa.me/92${phoneNumber}?text=Hello%20Hammad%20Food!%20I%20want%20to%20place%20an%20order`;

  return (
    <div className="min-h-screen bg-yellow-50 py-12 px-4 flex items-center justify-center">
      <motion.div
        className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-red-600 mb-6">Contact Us 📞</h2>
        <p className="text-gray-700 mb-4">
          Have questions or want to place an order? Contact us anytime!
        </p>

        <div className="flex flex-col gap-4 items-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 transition"
          >
            <FaWhatsapp />
            Order on WhatsApp
          </a>

          <a
            href={`tel:${phoneNumber}`}
            className="bg-blue-500 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-blue-600 transition"
          >
            <FaPhone />
            Call Now
          </a>
        </div>

        {/* Add this below the buttons if you want to embed a map */}
        <div className="mt-8">
          <iframe
            title="Hammad Food Location"
            src="https://maps.google.com/maps?q=Karachi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>

      </motion.div>
    </div>
  );
}
