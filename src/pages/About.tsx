import * as LucideIcons from "lucide-react";
import IconButton from "../components/IconButton";
import React from "react";
import { isValidElementType } from 'react-is';

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

interface Achievement {
  icon: string;
  description: string;
}

interface Expertise {
  icon: string;
  title: string;
  description: string;
}

interface Profile {
  firstname: string;
  middlename: string;
  middleInitial: string;
  lastname: string;
  municipality: string;
  province: string;
  country: string;
  countryCode: string;
  introduction: string;
  achievements: Achievement[];
  interestAreas: string[];
  expertise: Expertise[];
  hobbies: string[];
}

interface Contact {
  phoneNumber: string;
  email: string;
  github: string;
  linkedin: string;
}

interface User {
  education: Education[];
  certificates: Certificates[];
  achievements: Achievement[];
  expertise: Expertise[];
  profile: Profile;
  contact: Contact;
}

interface AboutProps {
  user: User[];
}

const About: React.FC<AboutProps> = ({ user }) => {

  const [copied, setCopied] = React.useState(false);

  return (
    <div className="w-full space-y-8 overflow-y-auto p-2">
      {user.map((item, index) => (
        <div key={index} className="space-y-8">
          <section>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
              <img
                className="w-32 h-32 rounded-xl object-cover border-2 border-primary shadow-lg"
                loading="lazy"
                src="./background-pic.webp"
                alt="Profile"
              />
              <div className="flex flex-col justify-center gap-3">
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary uppercase text-center sm:text-left">
                    {item.profile.firstname + ' ' + item.profile.middlename + ' ' + item.profile.lastname}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg text-secondary mt-2 text-center sm:text-left">Aspiring IT Professional / Developer / Business Analyst</p>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-secondary">
                  <LucideIcons.MapPin size={16} className="text-secondary" />
                  <span>{item.profile.municipality}, {item.profile.province}, {item.profile.country}</span>
                </div>
                <div className="flex flex-col xs:flex-row gap-3">
                  <div className="flex justify-center sm:justify-start gap-3">
                    <IconButton
                      icon={<LucideIcons.Github size={18} />}
                      link={item.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white hover:bg-secondary"
                      ariaLabel="GitHub"
                    />
                    <IconButton
                      icon={<LucideIcons.Linkedin size={18} />}
                      link={item.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: "#0077B5",
                        color: "#fff"
                      }}
                      onMouseOver={e => (e.currentTarget.style.backgroundColor = "#005983")}
                      onMouseOut={e => (e.currentTarget.style.backgroundColor = "#0077B5")}
                      ariaLabel="LinkedIn"
                    />
                  </div>
                  <div className="relative flex items-center justify-center sm:justify-start">
                    <IconButton
                      icon={
                        <span
                          className="relative flex items-center h-5"
                          style={{
                            minWidth: `max(180px, calc(${item.contact.email.length}ch))`,
                            width: `calc(${item.contact.email.length}ch + 48px)`,
                          }}
                        >
                          <span
                            className={`w-full justify-start absolute left-0 right-0 flex items-center gap-1 transition-all duration-300 ${
                              copied
                                ? "opacity-0 translate-y-2 pointer-events-none"
                                : "opacity-100 translate-y-0"
                            }`}
                          >
                            <LucideIcons.Copy size={18} className="text-secondary hover:text-primary transition-colors" />
                            <span className="ml-1 truncate">{item.contact.email}</span>
                          </span>
                          <span
                            className={`w-full justify-start absolute left-0 right-0 flex items-center gap-1 transition-all duration-300 ${
                              copied
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 -translate-y-2 pointer-events-none"
                            }`}
                          >
                            <LucideIcons.Check size={18} className="text-primary" />
                            <span
                              className="text-primary"
                              style={{
                                width: `calc(${item.contact.email.length}ch)`,
                                display: "inline-block",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Copied!
                            </span>
                          </span>
                        </span>
                      }
                      label={undefined}
                      onClick={() => {
                        navigator.clipboard.writeText(item.contact.email);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 1500);
                      }}
                      className="bg-gray-100 border border-gray-300 hover:bg-gray-200 justify-start"
                      style={{
                        minWidth: `max(180px, calc(${item.contact.email.length}ch + 48px))`,
                        width: `calc(${item.contact.email.length}ch + 48px)`,
                      }}
                      ariaLabel="Copy email"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary rounded-lg">
                <LucideIcons.Code2 size={20} className="text-white" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-primary">Professional Summary</h2>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <p className="text-sm sm:text-base text-secondary leading-relaxed">
                {item.profile.introduction}
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary rounded-lg">
                <LucideIcons.Award size={20} className="text-white" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-primary">Key Achievements</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {Array.isArray(item.profile.achievements) && item.profile.achievements.map((achievement, achievementIndex) => {
                let IconComponent = LucideIcons[achievement.icon as keyof typeof LucideIcons];
                if (!isValidElementType(IconComponent)) {
                  IconComponent = LucideIcons.Code2;
                }
                const AchievementIcon = IconComponent as React.ElementType;
                return (
                  <div key={achievementIndex} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center text-center gap-3">
                    <div className="p-3 bg-primary rounded-full mb-2 flex items-center justify-center">
                      <AchievementIcon size={28} className="text-white" />
                    </div>
                    <p className="text-sm sm:text-base text-secondary leading-relaxed">{achievement.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary rounded-lg">
                <LucideIcons.Code2 size={20} className="text-white" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-primary">Technical Expertise</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {Array.isArray(item.profile.expertise) && item.profile.expertise.map((expertise, expertiseIndex) => {
                let IconComponent = LucideIcons[expertise.icon as keyof typeof LucideIcons];
                if (!isValidElementType(IconComponent)) {
                  IconComponent = LucideIcons.Code2;
                }
                const ExpertiseIcon = IconComponent as React.ElementType;
                return (
                  <div key={expertiseIndex} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center text-center gap-3">
                    <div className="p-3 bg-primary rounded-full mb-2 flex items-center justify-center">
                      <ExpertiseIcon size={28} className="text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-primary">{expertise.title}</h3>
                    <p className="text-sm sm:text-base text-secondary leading-relaxed">{expertise.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary rounded-lg">
                <LucideIcons.Palette size={20} className="text-white" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-primary">Interest Areas</h2>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex flex-wrap gap-3">
                {item.profile.interestAreas.map((area, areaIndex) => (
                  <span
                    key={areaIndex}
                    className="bg-primary text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-2">
                <div className="p-2 bg-primary rounded-lg">
                  <LucideIcons.Gamepad2 size={20} className="text-white" />
                </div>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-primary">Skills Beyond Tech</h2>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex flex-wrap gap-3">
                {item.profile.hobbies.map((area, areaIndex) => (
                  <span
                    key={areaIndex}
                    className="bg-primary text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  )
}

export default About