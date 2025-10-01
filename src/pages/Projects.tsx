import { ExternalLink, Code, Database, Globe } from "lucide-react";

interface Project {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  projectUrl: string;
  screenshots: string[];
  languages: string[];
}

interface User {
  projects: Project[];
}

interface ProjectsProps {
  user: User[];
}

const Projects: React.FC<ProjectsProps> = ({ user }) => {
  const getLanguageIcon = (language: string) => {
    const iconMap: { [key: string]: any } = {
      html: <Globe size={16} />,
      css: <Globe size={16} />,
      javascript: <Code size={16} />,
      php: <Code size={16} />,
      mysql: <Database size={16} />,
      bootstrap: <Globe size={16} />,
      jquery: <Code size={16} />,
    };
    return iconMap[language.toLowerCase()] || <Code size={16} />;
  };

  return (
    <div className="w-full space-y-8 overflow-y-auto p-2">
      {user.map((item, index) => (
        <div key={index} className="space-y-8">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary rounded-lg">
                <Code size={24} className="text-white" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-primary">My Projects</h2>
            </div>
            
            {item.projects.length === 0 ? (
              <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm text-center">
                <p className="text-sm sm:text-base text-secondary">No projects available at the moment.</p>
              </div>
            ) : (
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {item.projects.map((project) => (
                  <div key={project.id} className="bg-white flex flex-col p-0 rounded-lg border border-gray-200 shadow-sm overflow-hidden h-full">
                    {project.screenshots.length > 0 && project.screenshots[0] && (
                      <img
                        src={project.screenshots[0]}
                        loading="lazy"
                        alt={`${project.name} screenshot`}
                        className="w-full h-auto border-b border-gray-200"
                      />
                    )}
                    <div className="flex-1 flex flex-col p-6">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-3">
                        {project.name}
                      </h3>
                      <p className="text-sm sm:text-base text-secondary leading-relaxed mb-4">
                        {project.shortDescription}
                      </p>
                      <div className="mb-4">
                        <h4 className="text-sm sm:text-base font-semibold text-primary mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.languages.map((language, langIndex) => (
                            <span
                              key={langIndex}
                              className="flex items-center gap-1 bg-gray-100 text-secondary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border border-gray-200"
                            >
                              {getLanguageIcon(language)}
                              <span>{language}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                      {project.projectUrl && (
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors text-sm sm:text-base mt-auto"
                        >
                          <ExternalLink size={16} />
                          View Project
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      ))}
    </div>
  );
};

export default Projects;


