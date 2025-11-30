import React from 'react'
import { ChartNoAxesColumnIncreasing, ExternalLink } from "lucide-react";

interface DataAI {
  id: number;
  title: string;
  link: string;
  imageUrl: string;
  tools: string[];
  description: string[];
}

interface User {
  dataAI: DataAI[];
}

interface DataAIProps {
  user: User[];
}

const DataAI: React.FC<DataAIProps> = ({ user }) => {
  return (
    <div className="w-full space-y-8 overflow-y-auto p-2">
      {user.map((item, index) => (
        <div key={index} className="space-y-8">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary rounded-lg">
                <ChartNoAxesColumnIncreasing size={24} className="text-white" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-primary">Data & AI</h2>
            </div>
            
            {item.dataAI.length === 0 ? (
              <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm text-center">
                <p className="text-sm sm:text-base text-secondary">No projects available at the moment.</p>
              </div>
            ) : (
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {item.dataAI.map((dataAI) => (
                  <div key={dataAI.id} className="bg-white flex flex-col p-0 rounded-lg border border-gray-200 shadow-sm overflow-hidden h-full">
                    {dataAI.imageUrl && (
                      <img
                        src={dataAI.imageUrl}
                        loading="lazy"
                        alt={`${dataAI.title} screenshot`}
                        className="w-full h-auto border-b border-gray-200"
                      />
                    )}
                    <div className="flex-1 flex flex-col p-6">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-3">
                        {dataAI.title}
                      </h3>
                      <p className="text-sm sm:text-base text-secondary leading-relaxed mb-4">
                        {dataAI.description}
                      </p>
                      <div className="mb-4">
                        <h4 className="text-sm sm:text-base font-semibold text-primary">Tool:</h4>
                        <div className="flex flex-wrap gap-2">
                          {Array.isArray(dataAI?.tools) &&
                            dataAI.tools.map((item: string, index: number) => (
                              <span
                                key={index}
                                className="flex items-center gap-1 bg-gray-100 text-secondary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border border-gray-200"
                              >
                                {item}
                              </span>
                            ))}
                        </div>
                      </div>
                      {dataAI.link && (
                        <a
                          href={dataAI.link}
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
}

export default DataAI