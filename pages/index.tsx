import { CiSliderHorizontal } from "react-icons/ci";
import ButtonSlider from "@/components/buttonSlider";
import File from "@/components/file";
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div
        className={`flex flex-col items-center justify-start h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] rounded-[30px] bg-slate-50`}
      >
        <div className="flex items-center justify-end pr-[20px] gap-[10px] h-[50px] w-full sm:h-[60px] border-b-2 bg-white rounded-t-[30px]">
          <ButtonSlider />
          <div className="border-gray-200 border-[2px] rounded-full p-[2px] sm:ml-[20px]">
            <CiSliderHorizontal size={26} color="black" />
          </div>
        </div>
        <File />
      </div>
    </main>
  );
}
