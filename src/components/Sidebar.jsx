import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Map,
  PlusCircle,
  Search,
  CalendarDays,
  Wallet,
  User,
  Settings,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">

      <h2 className="sidebar-title">
        GlobeTrotter
      </h2>

      <nav>

        <NavLink to="/dashboard">
          <LayoutDashboard size={19} />
          Dashboard
        </NavLink>

        <NavLink to="/my-trips">
          <Map size={19} />
          My Trips
        </NavLink>

        <NavLink to="/create-trip">
          <PlusCircle size={19} />
          Create Trip
        </NavLink>

        <NavLink to="/city-search">
          <Search size={19} />
          Explore Cities
        </NavLink>

        <NavLink to="/activity-search">
          <Search size={19} />
          Activities
        </NavLink>

        <NavLink to="/trips/1/calendar">
          <CalendarDays size={19} />
          Calendar
        </NavLink>

        <NavLink to="/trips/1/budget">
          <Wallet size={19} />
          Budget
        </NavLink>

        <NavLink to="/profile">
          <User size={19} />
          Profile
        </NavLink>

        <NavLink to="/profile">
          <Settings size={19} />
          Settings
        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;