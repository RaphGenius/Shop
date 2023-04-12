import { AiFillGithub } from "react-icons/ai";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full  absolute bottom-0 p-4  bg-green-800 text-white text-center overflow-hidden ">
      <a
        href="https://github.com/RaphGenius"
        target="_blank"
        className="flex justify-center items-center gap-2 hover:scale-110  transition "
      >
        {" "}
        Site réalisé par<span className="font-bold">RaphGenius </span>{" "}
        <AiFillGithub />
      </a>
    </footer>
  );
};

export default Footer;
