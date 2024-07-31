import LeftFlower from "./../../public/leftFlower.svg";
import RightFlower from "./../../public/rightFlower.svg";
import Nayyara from "./../../public/nayyara.svg";

const NayyaraLayout = ({ children }) => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 left-0 w-1/4 h-full z-0">
        <LeftFlower className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-0 right-0 w-1/4 h-full z-0">
        <RightFlower className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-auto z-0 flex flex-col justify-center text-center">
        <Nayyara className="w-auto h-auto object-cover" />
        <text className="font-caveat text-3xl">Mohamed & Khadega</text>
        <text className="font-caveat text-3xl text-olive">
          July 2. 2025 . Riyadh, Saudi Arabia
        </text>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default NayyaraLayout;
