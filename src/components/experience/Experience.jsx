import { useEffect, useState } from "react";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/experiences/get-experience`);
        const data = await res.json();
        setExperiences(data.data || []);
      } catch (error) {
        console.error("Failed to fetch experience", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  if (loading) {
    return (
      <section className="bg-[#f6f1eb] py-24 flex justify-center">
        <p className="text-sm text-gray-500">Loading experience...</p>
      </section>
    );
  }

  return (
    <section
      id="experience"
      className="bg-[#f6f1eb] px-6">
      <div className="max-w-5xl mx-auto">

        {/* SECTION TITLE */}
        <div className="mb-20">
          <p className="text-xs tracking-[0.35em] text-[#2f4f4f] mb-4">
            EXPERIENCE
          </p>
          <h2 className="font-serif text-[40px] sm:text-[52px] lg:text-[64px] text-[#1f4f46] leading-tight">
            Professional Experience
          </h2>
        </div>

        {/* EXPERIENCE LIST */}
        <div className="space-y-20">
          {experiences.map((exp) => (
            <div
              key={exp._id}
              className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              {/* LEFT CONTENT */}
              <div className="max-w-xl">
                <h3 className="text-lg sm:text-xl font-medium text-[#1f4f46]">
                  {exp.role}
                </h3>

                <p className="mt-1 text-sm text-[#2f4f4f]">
                  {exp.company}
                </p>

                {exp.description && (
                  <p className="mt-4 text-sm text-[#2f4f4f] leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </div>

              {/* RIGHT DATE */}
              <div className="text-sm text-[#2f4f4f] sm:text-right whitespace-nowrap">
                {new Date(exp.startDate).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
                {" – "}
                {exp.isCurrent
                  ? "Present"
                  : exp.endDate
                  ? new Date(exp.endDate).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })
                  : "N/A"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
