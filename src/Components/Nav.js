import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
function Nav() {
  const nav = ["home", "course", "mentorship", "about"];
  return (
    <div className="w-full flex rounded-tr-lg px-5 justify-between items-center py-4">
      <div className="flex flex-row gap-3 ">
        <Link to={"/"}>
          <button>
            <h1 className="uppercase font-bold text-[#feb623] text-[1.4rem] tracking-[4px]">
              learnify
            </h1>
          </button>
        </Link>
        <div className="flex flex-row gap-3 justify-center items-center px-2">
          {nav.map((e) => {
            return (
              <div>
                <Link to={e}>
                  <button className="text-[#939596] capitalize">{e}</button>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center">
          <input
            type="text"
            className="bg-transparent border-[#939596] rounded-[20px] px-4 outline-[#939596] border-2 focus:outline-none justify-center items-center text-[.9rem] py-1 text-[#939596] placeholder:text-[#939596]"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-5">
        <button className="capitalize text-white">log in</button>
        <button className="bg-[#feb623] px-5 py-1 rounded-2xl capitalize text-[#000] flex justify-center items-center">
          sign up
        </button>
        <button className="bg-[#3f3e3e] w-[2.2rem] h-[2.2rem] rounded-[50%] flex justify-between items-center px-[0.5rem]">
          <ShoppingCart />
        </button>
      </div>
    </div>
  );
}
export default Nav;
