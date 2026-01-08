import { useEffect, useState } from "react";

const Education = () => {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const res = await fetch(
          "/api/education/get-education"
        );
        const data = await res.json();
        setEducation(data.data || []);
      } catch (error) {
        console.error("Failed to fetch education", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEducation();
  }, []);

  if (loading) {
    return (
      <section className="bg-[#f6f1eb] py-20 flex justify-center">
        <p className="text-sm text-gray-500">Loading education...</p>
      </section>
    );
  }

  return (
    <section
      id="education"
      className="bg-[#f6f1eb] md:pt-10 pb-32 px-6">
      <div className="max-w-5xl mx-auto">

        {/* SECTION TITLE */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.35em] text-[#2f4f4f] mb-4">
            EDUCATION
          </p>
          <h2 className="font-serif text-[40px] sm:text-[52px] lg:text-[64px] text-[#1f4f46] leading-tight">
            Academic Background
          </h2>
        </div>

        {/* EDUCATION LIST */}
        <div className="space-y-16">
          {education.map((edu) => (
            <div
              key={edu._id}
              className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6"
            >
              {/* LEFT */}
              <div className="max-w-xl">
                <h3 className="text-lg sm:text-xl font-medium text-[#1f4f46]">
                  {edu.institution}
                </h3>

                {(edu.degree || edu.field) && (
                  <p className="mt-1 text-sm text-[#2f4f4f]">
                    {edu.degree}
                    {edu.field && ` • ${edu.field}`}
                  </p>
                )}

                {edu.score && (
                  <p className="mt-3 text-sm text-[#2f4f4f]">
                    Score: <span className="font-medium">{edu.score}</span>
                  </p>
                )}
              </div>

              {/* RIGHT */}
              <div className="text-sm text-[#2f4f4f] sm:text-right whitespace-nowrap">
                {edu.startYear} – {edu.endYear || "Present"}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
