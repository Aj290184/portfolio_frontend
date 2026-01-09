import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#f6f1eb] pb-12 px-6">
      <div className="max-w-5xl mx-auto">

        {/* TOP LINE */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-10">

          {/* BRAND */}
          <div className="text-center sm:text-left">
            <p className="font-serif text-xl text-[#1f4f46]">
              Ajay Kumar
            </p>
            <p className="text-sm text-[#2f4f4f] mt-1">
              Full Stack Developer
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-8">
            
            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/ajay-kumar-536442355/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-[#2f4f4f]"
            >
              <FaLinkedin className="text-2xl transition transform group-hover:-translate-y-1 group-hover:text-[#1f4f46]" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-[#1f4f46] text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                LinkedIn
              </span>
            </a>

            {/* LEETCODE */}
            <a
              href="https://leetcode.com/u/a_bharoja/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-[#2f4f4f]"
            >
              <SiLeetcode className="text-2xl transition transform group-hover:-translate-y-1 group-hover:text-[#1f4f46]" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-[#1f4f46] text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                LeetCode
              </span>
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/Aj290184"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-[#2f4f4f]"
            >
              <FaGithub className="text-2xl transition transform group-hover:-translate-y-1 group-hover:text-[#1f4f46]" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-[#1f4f46] text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                GitHub
              </span>
            </a>

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
