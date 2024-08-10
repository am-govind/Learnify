import { Croissant, Plus } from "lucide-react";

function Grids() {
  return (
    <div className="mx-[5%] w-[90%] flex flex-col gap-3 my-3">
      <div className="grid w-full gap-3 g1">
        <div className="rounded-md px-4 py-4 pb-16 bg-[#232323]">
          <div className="pb-3">
            <span className="px-3 rounded-xl bg-white">01</span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-[#c7c7c7] font-semibold text-lg">
                Round-the-clock access to personal account
              </h1>
              <p className="text-gray-400 font-light text-md ">
                Watch videos online at your convenience
              </p>
            </div>
            <div className="text-[#fff]">
              <Plus />
            </div>
          </div>
        </div>
        <div className="rounded-md px-4 py-4 bg-[#232323]">
          <div className="pb-3">
            <span className="px-3 rounded-xl bg-white">02</span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-[#c7c7c7] font-semibold text-lg">
                Round-the-clock access to personal account
              </h1>
              <p className="text-gray-400 font-light text-md ">
                Watch videos online at your convenience
              </p>
            </div>
            <div className="text-[#fff]">
              <Plus />
            </div>
          </div>
        </div>
      </div>
      <div className="grid w-full gap-3 g2">
        <div className="rounded-md px-4 py-4 pb-16  bg-[#232323]">
          <div className="pb-3">
            <span className="px-3 rounded-xl bg-white">03</span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-[#c7c7c7] font-semibold text-lg">
                Round-the-clock access to personal account
              </h1>
              <p className="text-gray-400 font-light text-md ">
                Watch videos online at your convenience
              </p>
            </div>
            <div className="text-[#fff]">
              <Plus />
            </div>
          </div>
        </div>
        <div className="rounded-md px-4 py-4 bg-[#232323]">
          <div className="pb-3">
            <span className="px-3 rounded-xl bg-white">04</span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-[#c7c7c7] font-semibold text-lg">
                Round-the-clock access to personal account
              </h1>
              <p className="text-gray-400 font-light text-md ">
                Watch videos online at your convenience
              </p>
            </div>
            <div className="text-[#fff]">
              <Plus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Grids;
