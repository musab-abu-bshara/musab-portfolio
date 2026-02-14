import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { LazyEarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    if (!status.message) return;
    const t = setTimeout(() => setStatus({ type: "", message: "" }), 4000);
    return () => clearTimeout(t);
  }, [status]);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // Validation Functions
  const validateName = (name) => {
    if (!name || name.trim() === "") {
      return "الرجاء إدخال الاسم";
    }
    const nameRegex = /^[\u0621-\u064Aa-zA-Z\s]{2,50}$/;
    if (!nameRegex.test(name)) {
      return "الاسم يجب أن يحتوي على أحرف فقط (2-50 حرف)";
    }
    return null;
  };

  const validateEmail = (email) => {
    if (!email || email.trim() === "") {
      return null; // Email is optional if phone is provided
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "البريد الإلكتروني غير صحيح";
    }
    return null;
  };

  const validatePhone = (phone) => {
    if (!phone || phone.trim() === "") {
      return null; // Phone is optional if email is provided
    }
    // Remove spaces, dashes, parentheses for validation
    const cleanPhone = phone.replace(/[\s\-()]/g, "");
    const phoneRegex = /^\+[1-9]\d{7,14}$/;
    if (!phoneRegex.test(cleanPhone)) {
      return "رقم الهاتف غير صحيح. يجب أن يبدأ برمز الدولة (+970...)";
    }
    return null;
  };

  const validateMessage = (message) => {
    if (!message || message.trim() === "") {
      return "الرجاء إدخال رسالتك";
    }
    if (message.trim().length < 10) {
      return "الرسالة يجب أن تحتوي على 10 أحرف على الأقل";
    }
    if (message.length > 500) {
      return "الرسالة يجب ألا تتجاوز 500 حرف";
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const nameError = validateName(form.name);
    if (nameError) {
      setStatus({ type: "error", message: nameError });
      return;
    }

    // Check if at least email OR phone is provided
    const hasEmail = form.email && form.email.trim() !== "";
    const hasPhone = form.phone && form.phone.trim() !== "";

    if (!hasEmail && !hasPhone) {
      setStatus({
        type: "error",
        message: "يجب إدخال البريد الإلكتروني أو رقم الهاتف على الأقل",
      });
      return;
    }

    // Validate email if provided
    if (hasEmail) {
      const emailError = validateEmail(form.email);
      if (emailError) {
        setStatus({ type: "error", message: emailError });
        return;
      }
    }

    // Validate phone if provided
    if (hasPhone) {
      const phoneError = validatePhone(form.phone);
      if (phoneError) {
        setStatus({ type: "error", message: phoneError });
        return;
      }
    }

    // Validate message
    const messageError = validateMessage(form.message);
    if (messageError) {
      setStatus({ type: "error", message: messageError });
      return;
    }

    // All validations passed, proceed with sending
    setLoading(true);

    const SERVICE_ID =
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID || "service_n7fhupj";
    const TEMPLATE_ID =
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID || "template_9pko78c";
    const PUBLIC_KEY =
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY || "Sn6WdI9-6zc_fymXI";

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "مصعب أبوبشارة",
          from_email: form.email || "لم يتم تقديم بريد إلكتروني",
          to_email: "musababubshara@gmail.com",
          from_phone: form.phone || "لم يتم تقديم رقم هاتف",
          message: form.message,
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setStatus({
            type: "success",
            message: "شكراً لك. سأرد عليك في أقرب وقت ممكن.",
          });

          setForm({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          setStatus({
            type: "error",
            message: "عذراً، حدث خطأ ما. يرجى المحاولة مرة أخرى.",
          });
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>ابقَ على تواصل</p>
        <h3 className={styles.sectionHeadText}>تواصل معي</h3>

        {status.message && (
          <div
            role="alert"
            className={`w-full mb-6 px-4 py-3 rounded-md text-sm text-white flex items-start justify-between ${
              status.type === "error" ? "bg-red-600" : "bg-emerald-600"
            }`}
          >
            <div className="flex-1">{status.message}</div>
            <button
              type="button"
              onClick={() => setStatus({ type: "", message: "" })}
              className="mr-4 text-white/90 hover:opacity-80"
              aria-label="Dismiss message"
            >
              ×
            </button>
          </div>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <input
            aria-label="اسمك"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="اسمك"
            maxLength={50}
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />

          <input
            aria-label="بريدك الالكتروني"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="بريدك الالكتروني"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />

          <input
            aria-label="رقم هاتفك مع مقدمة الدولة"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="رقم هاتفك مع مقدمة الدولة"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />

          <textarea
            aria-label="أخبرنا عن احتياجك"
            rows={5}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="أخبرنا عن احتياجك"
            maxLength={500}
            className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none max-h-56 min-h-[120px] overflow-auto"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "جاري الإرسال..." : "إرسال"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <LazyEarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
