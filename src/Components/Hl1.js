const btns = [
  "programming",
  "motion design",
  "music",
  "game dev",
  "web design",
  "programming",
  "motion design",
  "music",
  "game dev",
  "web design",
  "graphic",
  "music",
  "game dev",
  "web design",
  "motion design",
  "music",
  "game dev",
  "web design",
  "motion design",
];

function Hl1() {
  return (
    <div>
      <div className="mx-[5%] w-[90%] grid h1 gap-5 my-10">
        <div className="px-5 py-5">
          <p className="font-semibold text-2xl text-white leading-relaxed">
            <span className="px-2 border-2 rounded-xl">1565</span> &nbsp;courses
            with high-demand fields.Find the right course for you.
          </p>
        </div>
        <div className="w-full">
          {btns.map((e) => (
            <button className="capitalize bg-[#232323] w-fit px-3 py-2 rounded-3xl text-[#6c6c6c] hover:bg-[#3d3d3d] hover:text-[#fff] m-1">
              {e}
            </button>
          ))}
        </div>
      </div>
      <div className="mx-[5%] w-[90%] mt-5">
        <p className="text-[#6c6c6c] text-[1.2rem]">
          How the <span className="font-normal uppercase">learnify</span>{" "}
          platform works
        </p>
      </div>
    </div>
  );
}
export default Hl1;
