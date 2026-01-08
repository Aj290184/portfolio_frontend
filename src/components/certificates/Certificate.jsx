import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Certificate = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const res = await fetch(
          "/api/certificates/get-certificate"
        );
        const data = await res.json();
        setCertificates(data.data || []);
      } catch (err) {
        console.error("Failed to fetch certificates", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  if (loading) {
    return (
      <section className="bg-[#f6f1eb] py-24 flex justify-center">
        <p className="text-sm text-gray-500">Loading certificates...</p>
      </section>
    );
  }

  return (
    <section
      id="certificates"
      className="bg-[#f6f1eb] px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* SECTION TITLE */}
        <div className="mb-20">
          <p className="text-xs tracking-[0.35em] text-[#2f4f4f] mb-4">
            CERTIFICATES
          </p>
          <h2 className="font-serif text-[40px] sm:text-[52px] lg:text-[64px] text-[#1f4f46] leading-tight">
            Certifications & Learning
          </h2>
        </div>

        {/* CERTIFICATE LIST */}
        <div className="space-y-14">
          {certificates.map((cert) => (
            <div
              key={cert._id}
              className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4"
            >
              {/* LEFT */}
              <div className="max-w-xl">
                <h3 className="text-lg font-medium text-[#1f4f46]">
                  {cert.title}
                </h3>

                {cert.issuer && (
                  <p className="mt-1 text-sm text-[#2f4f4f]">
                    {cert.issuer}
                  </p>
                )}

                {cert.issueDate && (
                  <p className="mt-2 text-sm text-[#2f4f4f]">
                    Issued{" "}
                    {new Date(cert.issueDate).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                )}
              </div>

              {/* RIGHT LINK */}
              {cert.certificateImage && (
                <Link
                  to={cert.certificateImage}
                  target="_blank"
                  className="
                    text-sm
                    border-b border-[#1f4f46]
                    text-[#1f4f46]
                    hover:opacity-70
                    transition
                    whitespace-nowrap
                  "
                >
                  View Certificate
                </Link>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificate;
