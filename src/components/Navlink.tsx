import { NavLink } from "react-router-dom";

type Props = {
  title: string;
  link: string;
};

const Navlink = ({ title, link }: Props) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "text-green-800 font-bold underline   "
          : "text-black duration-75"
      }
      to={link}
    >
      <span className="hover:scale-110 duration-75">{title}</span>
    </NavLink>
  );
};

export default Navlink;
