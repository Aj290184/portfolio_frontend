import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/profile/get-profile`);
        const data = await res.json();
        setProfile(data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <section className="py-32 flex justify-center bg-[#f6f1eb]">
        <p className="text-sm text-gray-500">Loading profile...</p>
      </section>
    );
  }

  if (!profile) return null;

  return (
    <section
      id="profile"
      className="bg-[#f6f1eb] py-32 px-6">
      <div className="max-w-5xl mx-auto">

        {/* TOP HEADING */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.35em] text-[#2f4f4f] mb-4">
            FULL STACK DEVELOPER
          </p>

          <h1 className="font-serif text-[40px] sm:text-[56px] lg:text-[72px] leading-tight text-[#1f4f46]">
            Hi, I’m{" "}
            <span className="italic">{profile.name}</span>
          </h1>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="max-w-md space-y-5 text-center lg:text-left">
            <p className="text-sm text-[#2f4f4f] leading-relaxed">
              Passionate full-stack developer with a strong interest in
              building scalable, secure, and high-performance web
              applications.
            </p>

            <p className="text-sm text-[#2f4f4f] leading-relaxed">
              Experienced in end-to-end MERN stack development, including
              authentication systems using JWT, RESTful APIs, and clean,
              user-focused interfaces.
            </p>

            <p className="text-sm text-[#2f4f4f] leading-relaxed">
              Actively practices Data Structures & Algorithms on LeetCode
              with consistent problem-solving, reflecting a strong
              commitment to continuous learning and engineering
              excellence.
            </p>

            {/* LINKS */}
            <div className="pt-4 flex gap-6 justify-center lg:justify-start">
              {profile.resumeUrl && (
                <Link
                  to={profile.resumeUrl}
                  target="_blank"
                  className="text-sm border-b border-[#1f4f46] text-[#1f4f46] 
                  hover:opacity-70 transition">
                  View Resume
                </Link>
              )}

              {profile.socials?.github && (
                <Link
                  to={profile.socials.github}
                  target="_blank"
                  className="text-sm border-b border-[#1f4f46] text-[#1f4f46]
                   hover:opacity-70 transition">
                  GitHub
                </Link>
              )}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:ml-20">
            <img
              src={profile.profileImage}
              alt={profile.name}
              className="w-[240px] sm:w-[300px] lg:w-[360px] object-cover rounded-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Profile;
