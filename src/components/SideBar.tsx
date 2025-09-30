import { type LucideIcon, User, Award, FileJson } from "lucide-react";
import { NavLink } from "react-router-dom";

export interface SidebarItem {
  label: string;
  icon: LucideIcon;
  route: string;
}

export const sidebarItems: SidebarItem[] = [
  { label: "About Me", icon: User, route: "/" },
  { label: "Qualifications", icon: Award, route: "/qualifications" },
  { label: "Projects", icon: FileJson, route: "/projects" },
]

interface SideBarProps {
  className?: string;
}

function SideBar({ className = "" }: SideBarProps) {
  return (
    <div className={`${className} flex flex-col`}>
      <div className="flex flex-col gap-2 flex-1 justify-start">
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
            <item.icon size={20} />
            <span className="hidden lg:block text-sm">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default SideBar
