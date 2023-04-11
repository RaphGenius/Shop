import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
type Props = {
  children: string;
};

const BackNagivate = ({ children }: Props) => {
  const navigate = useNavigate();
  return (
    <span className="flex items-center gap-2" onClick={() => navigate(-1)}>
      <BsFillArrowLeftCircleFill /> {children}
    </span>
  );
};

export default BackNagivate;
