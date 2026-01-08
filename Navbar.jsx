import { useEffect, useState } from "react";

const navItems = [
  "profile",
  "education",
  "experience",
  "projects",
  "certificates",
  "skills",
  "contact",
];

const OFFSET = 120; // navbar height buffer

const Navbar = () => {
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("profile");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + OFFSET;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i]);
        if (section && scrollPos >= section.offsetTop) {
          setActive(navItems[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (item) =>
    `capitalize transition ${
      active === item
        ? "opacity-100 font-medium"
        : "opacity-60 hover:opacity-100"
    }`;

  return (
    <nav className="w-full fixed top-0 z-50 bg-[#f6f1eb]">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* LEFT (DESKTOP) */}
        <div className="hidden md:flex items-center gap-8 text-sm text-[#2f4f4f]">

          <a href="#profile" className={linkClass("profile")}>
            Profile
          </a>

          {/* MORE */}
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button className="opacity-60 hover:opacity-100 transition">
              More
            </button>

            {moreOpen && (
              <div className="absolute top-6 left-0 w-44 rounded-lg border border-[#e5ded6] bg-[#f6f1eb] py-2 shadow-sm">
                {navItems.slice(1).map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className={`block px-4 py-2 text-sm capitalize ${
                      active === item
                        ? "bg-[#efe7df] font-medium"
                        : "hover:bg-[#efe7df]"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CENTER LOGO */}
        <div className="text-center">
          <h1 className="text-xl tracking-wide font-serif text-[#2f4f4f]">
            AJAY
          </h1>
          <p className="text-[10px] tracking-[0.3em] text-[#2f4f4f]">
            PORTFOLIO
          </p>
        </div>

        {/* CTA */}
        <a href="#contact"
          className={`hidden md:inline-block px-6 py-2 rounded-full text-sm transition ${
            active === "contact"
              ? "bg-[#1f4f46] text-white"
              : "bg-[#1f4f46]/90 text-white hover:opacity-90"}`}>
          Hire Me
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-2xl text-[#2f4f4f]"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-[#f6f1eb] border-t border-[#e5ded6] px-6 py-6">
          <div className="flex flex-col gap-4 text-sm text-[#2f4f4f]">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMobileOpen(false)}
                className={`capitalize ${
                  active === item
                    ? "font-medium"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
