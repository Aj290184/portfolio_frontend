import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Footer = () => {
  const [active, setActive] = useState("profile");

  useEffect(() => {
    const updateActive = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) setActive(hash);
    };

    updateActive();
    window.addEventListener("hashchange", updateActive);

    return () => {
      window.removeEventListener("hashchange", updateActive);
    };
  }, []);

  const linkClass = (item) =>
    `capitalize transition ${
      active === item
        ? "text-[#1f4f46] font-medium"
        : "text-[#2f4f4f] hover:opacity-70"
    }`;

  return (
    <footer className="bg-[#f6f1eb] pt-20 pb-12 px-6">
      <div className="max-w-5xl mx-auto">

        {/* TOP LINE */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">

          {/* BRAND */}
          <div className="text-center sm:text-left">
            <p className="font-serif text-xl text-[#1f4f46]">
              Ajay Kumar
            </p>
            <p className="text-sm text-[#2f4f4f] mt-1">
              Full Stack Developer
            </p>
          </div>

          {/* NAV LINKS */}
          <div className="flex gap-8 text-sm">
            {["profile", "projects", "skills", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={linkClass(item)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="pt-6 border-t border-[#1f4f46]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#2f4f4f]">
            © 2026 Ajay Kumar. All rights reserved.
          </p>

          <p className="text-sm text-[#2f4f4f]/70">
            Crafted with care & consistency
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
