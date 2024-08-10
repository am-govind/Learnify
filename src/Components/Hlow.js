import { useEffect, useRef, useState } from "react";
import img from "../assets/4.png";
import { Bitcoin, Currency } from "lucide-react";

const cards = [
  {
    h: "profession-web design",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptate unde consectetur! Dolorem, magnam ipsa.",
    b: "average salary-3500usd",
  },
  {
    h: "profession-app design",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptate unde consectetur! Dolorem, magnam ipsa.",
    b: "average salary-4000usd",
  },
  {
    h: "profession-graphic design",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptate unde consectetur! Dolorem, magnam ipsa.",
    b: "average salary-2000usd",
  },
  {
    h: "profession-game design",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptate unde consectetur! Dolorem, magnam ipsa.",
    b: "average salary-5000usd",
  },
];
const colors = [
  "#25d866,#b4d835",
  "#4287f5, #b764f5, #ff6bae",
  "#37e6d6, #50d1f8, #88a3f3",
  "#ff6b6b, #ffed4a"
];
function Hlow() {
  const [i, setI] = useState(0);
  const c = useRef([]);
  const cc = useRef(null);
  useEffect(() => {
    c.current.forEach((e) => {
      e.style.background = "rgba(255,255,255,0.4)";
    });
    c.current[i].style.background = "rgba(255,255,255,1)";
    cc.current.style.background = `linear-gradient(${colors[i]})`;
    setTimeout(() => {
      setI(i + 1 < 4 ? i + 1 : 0);
      console.log(i);
    }, 5000);
  }, [i]);
  return (
    <div>
      <div className="grid mx-[5%] w-[90%] h-full my-2 rounded-lg  gap-5 hl1">
        <div className="bg-[#41db63] px-5 py-5 rounded-md flex justify-between flex-col relative">
          <div className="">
            <h1 className="capitalize font-semibold text-[1rem] tracking-wide mb-3">
              newsletter
            </h1>
            <p className="font-light teext-[.9rem] text-justify mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              quae nesciunt officiis dolorum, exercitationem sunt consectetur
              excepturi hic ullam sed?
            </p>
          </div>
          <div className="flex flex-row">
            <input
              type="email"
              placeholder="enter email"
              className="px-3 py-1 rounded-l-2xl placeholder:capitalize focus:outline-none"
            />
            <button className="px-3 py-1 rounded-r-2xl bg-black text-white">
              subscribe
            </button>
          </div>
        </div>
        <div
          className="bg-gradient-to-r from-[#25d866] to-[#b4d835] relative w-full h-full rounded-lg flex justify-start px-5 py-5"
          ref={cc}
        >
          <div className="flex justify-self-start flex-col ">
            <h1 className="capitalize font-bold text-[1.5rem] tracking-wide mb-5">
              {cards[i].h}
            </h1>
            <p className="font-semibold text-base w-[60%] text-justify mb-5">
              {cards[i].p}
            </p>
            <div className="flex flex-row px-1 py-1 rounded-3xl bg-[rgba(255,255,255,0.3)] w-fit justify-center items-center gap-3 pr-5">
              <button
                disabled
                className="bg-[rgba(255,255,255,.5)] rounded-[2rem] h-[2rem] w-[2rem] flex justify-center items-center"
              >
                <Bitcoin color="#feb623" />
              </button>
              <h1 className="capitalize ">{cards[i].b}</h1>
            </div>
          </div>
          <img
            src={img}
            alt=""
            className="absolute right-[-4rem] w-[15rem] object-cover"
          />
          <div className="absolute bottom-2 w-[30%] h-[.4vh] grid grid-cols-4 gap-2 ">
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
    </div>
  );
}
export default Hlow;
