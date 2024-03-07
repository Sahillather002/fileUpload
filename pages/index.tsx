import { CiSliderHorizontal } from "react-icons/ci";
import ButtonSlider from "@/components/buttonSlider";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div
        className={`flex flex-col items-center justify-start h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] rounded-[10px] bg-slate-50`}
      >
        <div className="flex items-center justify-end pr-[20px] gap-[10px] h-[50px] w-full sm:h-[60px] border-b-2 bg-white rounded-t-[10px]">
          <ButtonSlider />
          <div className="border-gray-200 border-[2px] rounded-full p-[2px] sm:ml-[20px]">
            <CiSliderHorizontal size={28} color="black" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-[30px] sm:mt-[35px] h-2/3 w-3/4 border-spacing-4 border-gray-300 border-dashed border-[3px] rounded-[10px] ">
          <span className="text-gray-400">Click to browse or</span>
          <span className="text-gray-400">drag and drop your files</span>
        </div>
      </div>
    </main>
  );
}
