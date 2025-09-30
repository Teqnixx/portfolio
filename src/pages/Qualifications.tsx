import { Award, GraduationCap, Code2 } from "lucide-react";

interface Education {
  id: number;
  degree: string;
  achievement: string;
  school: string;
  address: string;
  year: string;
}

interface Certificates {
  id: number;
  title: string;
  issuer: string;
  dateIssued: string;
  imageUrl: string;
  certificateLink: string;
}

interface User {
  education: Education[];
  certificates: Certificates[];
}

interface QualificationsProps {
  user: User[];
}

const Qualifications: React.FC<QualificationsProps> = ({ user }) => {
  const skills = [
    { category: "Programming Languages", items: ["HTML", "CSS", "JavaScript", "PHP"] },
    { category: "Databases", items: ["MySQL", "SQL"] },
    { category: "Frameworks & Libraries", items: ["jQuery", "React", "TypeScript"] },
    { category: "Tools & Technologies", items: ["Git", "Data Analytics", "Database Management"] }
  ];

  return (
    <div className="w-full space-y-8 overflow-y-auto p-2">
      {user.map((item, index) => (
        <div key={index} className="space-y-8">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary rounded-lg">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-primary">Education</h2>
            </div>
            <div className="grid gap-4">
              {item.education.map((edu) => (
                <div key={edu.id} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-primary">{edu.degree}</h3>
                    <span className="text-xs sm:text-sm text-secondary bg-gray-100 px-2 py-1 rounded w-fit">
                      {edu.year}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-medium text-secondary mb-1">{edu.school}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">{edu.address}</p>
                  {edu.achievement && (
                    <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded">
                      {edu.achievement}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary rounded-lg">
                <Award size={24} className="text-white" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-primary">Certifications</h2>
            </div>
            <div className="grid gap-4">
              {item.certificates.map((cert) => (
                <div key={cert.id} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src={cert.imageUrl}
                        loading="lazy"
                        alt={cert.title}
                        className="w-16 h-16 object-contain rounded-lg border border-gray-200"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-primary mb-1">{cert.title}</h3>
                      <p className="text-sm sm:text-base text-secondary mb-2">{cert.issuer}</p>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2">Issued: {cert.dateIssued}</p>
                      {cert.certificateLink !== "none" && (
                        <a
                          href={cert.certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-primary text-white text-xs sm:text-sm px-3 py-1 rounded hover:bg-secondary transition-colors"
                        >
                          View Certificate
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary rounded-lg">
                <Code2 size={24} className="text-white" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-primary">Skills</h2>
            </div>
            <div className="grid gap-4">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="text-base sm:text-lg font-semibold text-primary mb-3">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gray-100 text-secondary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border border-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Qualifications;
