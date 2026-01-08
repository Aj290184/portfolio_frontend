import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/projects/get-project`);
        const data = await res.json();
        setProjects(data.data || []);
      } catch (error) {
        console.error("Failed to fetch projects", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="bg-[#f6f1eb] py-24 flex justify-center">
        <p className="text-sm text-gray-500">Loading projects...</p>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="bg-[#f6f1eb] py-32 px-6"
    >
      {/* 🔑 ONE CONSISTENT CONTENT COLUMN */}
      <div className="max-w-5xl mx-auto">

        {/* SECTION TITLE */}
        <div className="mb-20">
          <p className="text-xs tracking-[0.35em] text-[#2f4f4f] mb-4">
            PROJECTS
          </p>
          <h2 className="font-serif text-[40px] sm:text-[52px] lg:text-[64px] text-[#1f4f46] leading-tight">
            Selected Work
          </h2>
        </div>

        {/* PROJECT GRID */}
        <div className="grid gap-20 sm:grid-cols-2">

          {projects.map((project) => (
            <div key={project._id} className="flex flex-col">

              {project.projectImages && (
                <img
                  src={project.projectImages}
                  alt={project.title}
                  className="w-full object-cover mb-6"
                />
              )}

              <h3 className="text-lg sm:text-xl font-medium text-[#1f4f46]">
                {project.title}
              </h3>

              <p className="mt-3 text-sm text-[#2f4f4f] leading-relaxed">
                {project.description}
              </p>

              {project.techStack && (
                <p className="mt-3 text-xs text-[#2f4f4f]">
                  <span className="font-medium">Tech:</span>{" "}
                  {project.techStack}
                </p>
              )}

              <div className="mt-6 flex gap-6">
                {project.githubUrl && (
                  <Link
                    to={project.githubUrl}
                    target="_blank"
                    className="text-sm border-b border-[#1f4f46] text-[#1f4f46] hover:opacity-70 transition"
                  >
                    GitHub
                  </Link>
                )}

                {project.liveUrl && (
                  <Link
                    to={project.liveUrl}
                    target="_blank"
                    className="text-sm border-b border-[#1f4f46] text-[#1f4f46] hover:opacity-70 transition"
                  >
                    Live Demo
                  </Link>
                )}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Project;
