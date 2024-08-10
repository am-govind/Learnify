import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const main = ["home", "courses", "mentorship", "about us"];
const catg1 = ["programming", "motion design", "web design", "graphic design"];
const catg2 = ["game dev", "backend", "fronted", "music", "devOps"];

function Footer() {
  return (
    <div className="mx-[5%] w-[91%]  bg-[#232323] rounded-md my-10 grid gap-4 px-4 py-4 f">
      <div className="grid f1">
        <div className="flex justify-between items-start flex-col">
          <div className="flex flex-col gap-1">
            <h1 className="uppercase tracking-wide text-[#feb629] font-semibold text-xl">
              learnify
            </h1>
            <p className="text-md font-s text-gray-400">Learnify.corp@lf.com</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[rgba(255,255,255,0.7)] capitalize font-medium text-md">
              Follow us
            </p>
            <div className="flex flex-row gap-2">
              <button className="px-2 py-2 flex justify-center items-center rounded-md bg-[#ff0000]">
                <Youtube color="white" strokeWidth={1} />
              </button>
              <button className="px-2 py-2 flex justify-center items-center rounded-md in">
                <Instagram color="white" strokeWidth={1} />
              </button>
              <button className="px-2 py-2 flex justify-center items-center rounded-md bg-[#00acee]">
                <Twitter color="white" strokeWidth={1} fill="white" />
              </button>
              <button className="px-2 py-2 flex justify-center items-center rounded-md bg-[#1877f2]">
                <Facebook color="white" strokeWidth={1} fill="white" />
              </button>
            </div>
            <div></div>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="py-5 flex flex-col justify-center items-start">
            <p className="mb-3 font-medium text-[#fff]">Main</p>
            {main.map((e) => (
              <p  className="capitalize font-light text-[#878889] cursor-pointer hover:text-[#feb629]">{e}</p>
            ))}
          </div>
          <div className="flex flex-col justify-center items-start">
            <p className="mb-3 font-medium text-[#fff]">Categories</p>
            {catg1.map((e) => (
              <p className="capitalize font-light text-[#878889] cursor-pointer hover:text-[#feb629]">{e}</p>
            ))}
          </div>
          <div className="flex flex-col justify-center items-start mt-7">
            {catg2.map((e) => (
              <p className="capitalize font-light text-[#878889] cursor-pointer hover:text-[#feb629]">{e}</p>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="bg-gradient-to-r from-[#25d866] to-[#b4d835] px-5 py-5 rounded-md flex justify-between flex-col relative">
          <div className="">
            <h1 className="capitalize font-semibold text-[1rem] tracking-wide mb-3">
              newsletter
            </h1>
            <p className="font-light text-[.8rem] text-justify mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              quae nesciunt officiis dolorum, exercitationem sunt consectetur
              excepturi hic ullam sed?
            </p>
          </div>
          <div className="flex flex-row">
            <input
              type="email"
              placeholder="enter email"
              className="px-3 py-1 rounded-l-2xl placeholder:capitalize focus:outline-none w-[50%]"
            />
            <button className="px-3 py-1 rounded-r-2xl bg-black text-white">
              subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
