import { NavLink } from "react-router-dom";

type Props = {
  title: string;
  link: string;
};

const Navlink = ({ title, link }: Props) => {
  return <NavLink to={link}>{title} </NavLink>;
};

export default Navlink;
