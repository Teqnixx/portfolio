import { Copy, Github, Linkedin } from "lucide-react";
import IconButton from "../components/IconButton";

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

interface Profile {
  firstname: string;
  middlename: string;
  middleInitial: string;
  lastname: string;
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
  profile: Profile;
  contact: Contact;
}

interface AboutProps {
  user: User[];
}

const About: React.FC<AboutProps> = ({ user }) => {
  return (
    <>
      {user.map((item, index) => {
        return (
          <section key={index} className="w-full">
            <div className="flex flex-col sm:flex-row items-center sm:items-start mt-4 sm:mt-0 justify-center sm:justify-start">
              <img
                className="w-24 h-24 rounded-xl object-cover border-1 border-primary shadow-lg"
                src="./background-pic.webp"
                alt="Profile"
              />
              <div className="sm:ml-4 mt-4 sm:mt-0 flex flex-col justify-center gap-2 h-24 sm:h-24" style={{ height: '6rem' }}>
                <div>
                  <h1 className="text-sm text-center sm:text-start sm:text-xl md:text-2xl font-bold text-primary uppercase">
                    {item.profile.firstname + ' ' + item.profile.middlename + ' ' + item.profile.lastname}
                  </h1>
                </div>
                  <div className="flex flex-col xs:flex-row gap-2">
                    <div className="flex gap-2 justify-center">
                      <IconButton
                        icon={<Github size={16} />}
                        link={item.contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-white hover:bg-secondary"
                        ariaLabel="GitHub"
                      />
                      <IconButton
                        icon={<Linkedin size={16} />}
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
                    <IconButton
                      icon={<Copy size={16} className="text-secondary hover:text-primary transition-colors" />}
                      label={item.contact.email}
                      onClick={() => {
                        navigator.clipboard.writeText(item.contact.email);
                      }}
                      className="bg-gray-100 border border-gray-300 hover:bg-gray-200 text-xs"
                      ariaLabel="Copy email"
                    />
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}

export default About