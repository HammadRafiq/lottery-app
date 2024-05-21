import TimeSvg from "@/public/assets/time.svg"
import Image from "next/image"
import PrimaryButton from "./PrimaryButton"

const NextDraw = ({ time = "142:32:01", bgClass = "bg-primary", color="text-primary" }: { time: string, bgClass?: string, color?: string }) => {
    return (
        <div className={`${bgClass} px-15 py-8 text-white flex justify-between items-center`}>
            <div className="flex">
                <h2 className='text-f14 font-semibold pr-15'>
                    <div>Next</div>
                    <div>Draw</div>
                </h2>
                <div className="flex items-center">
                    <Image
                        src={TimeSvg}
                        alt="time"
                    />
                    <h2 className="text-f20 font-semibold pl-8">
                        {time}
                    </h2>
                </div>
            </div>
            <div>
                <PrimaryButton colorClass={color} />
            </div>
        </div>
    )
}

export default NextDraw
