import { NavLink } from "react-router-dom";
import { sidebarItems } from "./SideBar";
import { Copyright } from "lucide-react";

interface BottomNavProps {
  className?: string;
}

function BottomNav({ className = "" }: BottomNavProps) {
  return (
    <>
      <nav className={`fixed bottom-0 left-0 right-0 ${className}`}>
        <div className="mx-auto max-w-screen-md">
          <div className="m-2 rounded-xl bg-background">
            <ul className="grid grid-flow-col auto-cols-fr gap-2">
              {sidebarItems.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.route}
                    className={({ isActive }) =>
                      `flex flex-col items-center justify-center gap-1 p-2 rounded-lg transition-colors duration-200 ${
                        isActive
                          ? 'bg-primary text-white'
                          : 'text-secondary hover:bg-primary hover:text-white'
                      }`
                    }
                    end
                  >
                    <item.icon />
                    <span className="hidden xs:block text-xs">{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      <div className="block md:hidden pb-1 text-xs text-secondary/60 text-center select-none flex items-center justify-center gap-2">
        <Copyright className="text-secondary/60" size={16} />{new Date().getFullYear()} Allen Jamison Mendoza
      </div>
      </nav>
    </>
  );
}

export default BottomNav;


