import { useEffect, useState } from "react";

const categoryConfig = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  tools: "Tools & DSA",
};

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch("/api/skills/get-skill");
        const json = await res.json();
        setSkills(json.data || []);
      } catch (err) {
        console.error("Failed to fetch skills", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return (
      <section className="bg-[#f6f1eb] py-24 flex justify-center">
        <p className="text-sm text-gray-500">Loading skills...</p>
      </section>
    );
  }

  return (
    <section
      id="skills"
      className="bg-[#f6f1eb] py-32 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* SECTION TITLE */}
        <div className="mb-20">
          <p className="text-xs tracking-[0.35em] text-[#2f4f4f] mb-4">
            SKILLS
          </p>
          <h2 className="font-serif text-[40px] sm:text-[52px] lg:text-[64px] text-[#1f4f46] leading-tight">
            Technical Skills
          </h2>
        </div>

        {/* SKILLS GRID */}
        <div className="grid sm:grid-cols-2 gap-x-16 gap-y-20">
          {Object.entries(categoryConfig).map(([key, title]) => {
            const filtered = skills.filter((s) => s.category === key);
            if (!filtered.length) return null;

            return (
              <div key={key}>
                <h3 className="text-lg font-medium text-[#1f4f46] mb-4">
                  {title}
                </h3>

                <ul className="space-y-2 text-sm text-[#2f4f4f]">
                  {filtered.map((skill) => (
                    <li key={skill._id}>{skill.name}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
