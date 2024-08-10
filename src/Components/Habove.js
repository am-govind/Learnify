import { MoveRight, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/1.png";
import img2 from "../assets/2.jpg";
import logo from "../assets/3.png";

function Habove() {
  const colors = ["#7270e2", "#ecdc90", "#e892ab", "#afeb91"];
  const a = [
    "IT",
    "motion design",
    "frontend",
    "managment",
    "SSM",
    "marketing",
    "graphic design",
    "game dev",
  ];
  const c = useRef([]);
  const cc = useRef(null);
  const [i, setI] = useState(0);
  const cards = [
    {
      h: "profession-web design",
      p: "  Lorem ipsum dolor sit amet consectetur",
    },
    {
      h: "profession-app design",
      p: "  Lorem ipsum dolor sit amet consectetur",
    },
    {
      h: "profession-graphic design",
      p: "  Lorem ipsum dolor sit amet consectetur",
    },
    {
      h: "profession-game design",
      p: "  Lorem ipsum dolor sit amet consectetur",
    },
  ];
  useEffect(() => {
    c.current.forEach((e) => {
      e.style.background = "rgba(255,255,255,0.4)";
    });
    c.current[i].style.background = "rgba(255,255,255,1)";
    cc.current.style.background = colors[i];
    setTimeout(() => {
      setI(i + 1 < 4 ? i + 1 : 0);

    }, 5000);
  }, [i]);
  return (
    <div className="flex w-full justify-center items-center flex-col">
      <div className="w-[90%] rounded-2xl m-5 bg-[#232323] grid grid-cols-4 gap-[1rem] py-2">
        <div className="px-3 py-3 flex flex-col gap-1">
          {a.map((e) => {
            return (
              <div className="flex justify-between items-center text-[#a5a8a8] hover:text-[#feb629]">
                <Link to={e}>
                  <p className="capitalize">{e}</p>
                </Link>
                <MoveRight />
              </div>
            );
          })}
        </div>
        <div className="px-3 py-3 flex flex-col gap-1">
          {a.map((e) => {
            return (
              <div className="flex justify-between items-center text-[#a5a8a8] hover:text-[#feb629]">
                <Link to={e}>
                  <p className="capitalize">{e}</p>
                </Link>
                <MoveRight />
              </div>
            );
          })}
        </div>
        <div className="px-3 py-3 flex flex-col gap-1">
          {a.map((e) => {
            return (
              <div className="flex justify-between items-center text-[#a5a8a8] hover:text-[#feb629]">
                <Link to={e}>
                  <p className="capitalize">{e}</p>
                </Link>
                <MoveRight />
              </div>
            );
          })}
        </div>
        <div
          className="m-3 bg-[#7270e2] rounded-lg relative flex flex-col justify-center items-center capitalize cc"
          ref={cc}
        >
          <h1 className="text-[1.2rem]">{cards[i].h}</h1>
          <p className="w-[80%] text-center">{cards[i].p}</p>
          <div className="absolute bottom-2 w-[70%] h-[.4vh] grid grid-cols-4 gap-2">
            {cards.map((e, index) => {
              return (
                <div
                  className="w-full h-full bg-[rgba(255,255,255,0.4)] rounded-lg"
                  key={index}
                  ref={(e) => (c.current[index] = e)}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[90%] flex rounded-lg bg-[#f3f3f2]  m-[5%] mt-6 flex-col gap-0 px-4 py-4 relative">
        <h1 className="uppercase text-[6.5rem] tracking-[4px] font-bold ml-[1.2rem] hh">
          learnify
        </h1>
        <h1 className="uppercase text-[6.5rem] tracking-[4px] font-bold ml-[10rem] mt-[-6rem] z-0">
          learnify
        </h1>
        <div className="z-20 bg-transparent h-[6.5rem]">
          <h1 className="ml-[.8rem] mt-[-4.2rem]  uppercase text-[6.5rem] tracking-[4px] font-bold z-20 hh">
            learnify
          </h1>
        </div>
        <p className="w-[30%] font-bold m-3 mt-0 text-[1.2rem] text-center">
          Build your career consciously - Choose your profession yourself
        </p>
        <p className="m-3 mt-[-.8rem] text-[1rem] font-light tracking-[1.5px]">
          Together with
          <span className="uppercase text-black font-normal">learnify</span>
          online school
        </p>
        <div className="flex flex-row gap-3 px-10 py-3">
          <button className="px-7 py-2 bg-gradient-to-r from-[#eabe1c] to-[#5fe7c8] capitalize rounded-3xl font-medium">
            all courses
          </button>
          <button className="px-3 py-3 rounded-[50%] bg-slate-300 flex justify-center items-center">
            <Play fill="black" />
          </button>
        </div>
        <div className="flex flex-row gap-3 ml-10 mt-5">
          <div className="w-[2.5rem] h-[2.5rem] rounded-[50%] overflow-hidden relative">
            <img src={img1} alt="" className="absolute w-full h-full" />
          </div>
          <div className="w-[2.5rem] h-[2.5rem] rounded-[50%] overflow-hidden relative ml-[-1.2rem]">
            <img src={img2} alt="" className="absolute w-full h-full" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-[1.2rem] font-semibold">1.2 M</h1>
            <p className="text-[0.8rem] mt-[-.5rem]">
              The students who chose us
            </p>
          </div>
        </div>
        <div className="absolute right-0 flex justify-end h-[120%]">
          <img src={logo} alt="" className="drop-shadow-xl l" />
        </div>
      </div>
    </div>
  );
}
export default Habove;
