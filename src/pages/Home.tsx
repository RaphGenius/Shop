type Props = {};
import VideoHome from "../video/videoHome.mp4";
import { Link } from "react-router-dom";

const Home = (props: Props) => {
  return (
    <div className="bg-black min-h-[calc(100vh-100px)] relative   ">
      <video
        className="w-full max-h-[calc(100vh-100px)] opacity-30 object-cover relative"
        src={VideoHome}
        autoPlay
        loop
        muted
      />
      <div></div>
      <Link to={`/shop`}>
        <button className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-50 text-5xl font-bold text-white underline tracking-wider  ">
          Visitez notre boutique
        </button>
      </Link>
    </div>
  );
};

export default Home;
