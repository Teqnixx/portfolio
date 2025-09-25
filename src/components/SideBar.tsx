import { type LucideIcon, User, Book, FileJson, Medal, UserRoundCog, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";

export interface SidebarItem {
  label: string;
  icon: LucideIcon;
  route: string;
}

export const sidebarItems: SidebarItem[] = [
  { label: "About", icon: User, route: "/about" },
  { label: "Education", icon: Book, route: "/education" },
  { label: "Certifications", icon: Medal, route: "/certifications" },
  { label: "Skills", icon: UserRoundCog, route: "/skills" },
  { label: "Projects", icon: FileJson, route: "/projects" },
  { label: "Contact", icon: Mail, route: "/contact" },
]

interface SideBarProps {
  className?: string;
}

function SideBar({ className = "" }: SideBarProps) {
  return (
    <div className={`${className}`}>
      <div className="flex flex-col gap-4">
        {sidebarItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.route}
            className={({ isActive }) =>
              `flex items-center gap-2 p-3 rounded-md transition-colors transition-all duration-200 ${
                isActive
                  ? 'border-primary bg-primary text-white'
                  : 'text-secondary hover:bg-primary hover:text-white'
              }`
            }
            end
          >
            <item.icon />
            <span className="hidden md:block">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default SideBar
