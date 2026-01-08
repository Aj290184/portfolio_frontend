import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contacts/create-contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Contact error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#f6f1eb] px-6 pb-32">
      <div className="max-w-5xl mx-auto">

        {/* SECTION TITLE */}
        <div className="mb-20">
          <p className="text-xs tracking-[0.35em] text-[#2f4f4f] mb-4">
            CONTACT
          </p>
          <h2 className="font-serif text-[40px] sm:text-[52px] lg:text-[64px] text-[#1f4f46] leading-tight">
            Let’s work together
          </h2>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row gap-20">

          {/* LEFT TEXT */}
          <div className="max-w-md">
            <p className="text-sm text-[#2f4f4f] leading-relaxed">
              Have a project, idea, or opportunity in mind?
              I’m always open to discussing meaningful work,
              collaborations, or freelance opportunities.
            </p>

            <div className="mt-10 space-y-3 text-sm text-[#2f4f4f]">
              <p>
                <Link
                  to="mailto:abharoja@gmail.com"
                  className="border-b border-[#1f4f46] hover:opacity-70"
                >
                  abharoja@gmail.com
                </Link>
              </p>

              <p>
                <Link
                  to="https://www.linkedin.com/in/ajay-kumar-536442355/"
                  target="_blank"
                  className="border-b border-[#1f4f46] hover:opacity-70"
                >
                  linkedin.com/in/ajay-kumar
                </Link>
              </p>

              <p>
                <Link
                  to="https://github.com/Aj290184"
                  target="_blank"
                  className="border-b border-[#1f4f46] hover:opacity-70"
                >
                  github.com/Aj290184
                </Link>
              </p>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="flex-1 max-w-md space-y-6">

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full bg-transparent border-b border-[#1f4f46]/30 pb-2 focus:outline-none focus:border-[#1f4f46]"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full bg-transparent border-b border-[#1f4f46]/30 pb-2 focus:outline-none focus:border-[#1f4f46]"
            />

            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your idea"
              required
              className="w-full bg-transparent border-b border-[#1f4f46]/30 pb-2 resize-none focus:outline-none focus:border-[#1f4f46]"
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-6 px-8 py-3 rounded-full bg-[#1f4f46] text-white text-sm hover:opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-sm text-green-700">
                Message sent successfully.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm text-red-700">
                Something went wrong. Please try again.
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
