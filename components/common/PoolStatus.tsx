import BTC from "@/public/assets/BTC.svg"
import DOGE from "@/public/assets/DOGE.svg"
import ETH from "@/public/assets/ETH.svg"
import INAE from "@/public/assets/INAE.svg"
import SOL from "@/public/assets/SOL.svg"
import TRX from "@/public/assets/TRX.svg"
import XRP from "@/public/assets/XRP.svg"
import Expand from "@/public/assets/expand.svg"
import Unexpand from "@/public/assets/unexpand.svg"
import Image from "next/image"


const symbols: any = {
    BTC: BTC,
    DOGE: DOGE,
    ETH: ETH,
    INAE: INAE,
    SOL: SOL,
    TRX: TRX,
    XRP: XRP
}

type dataType = {
    poolId: string,
    lotteryId: string,
    coinId: string,
    coinSymbol: string,
    coinName: string,
    roundId: string,
    poolAmount: string,
    createdAt: string
}

const PoolStatus = (
    { data, toggleExpand, expand = false, currentPool }:
        { data?: dataType[], expand: boolean, toggleExpand: any, currentPool: number }) => {
    return (
        <div>
            <div>
                <div className={`${expand ? "justify-start" : "justify-center"} flex cursor-pointer`} onClick={() => toggleExpand(true)}>
                    <div className="flex">
                        {!expand && (
                            <Image src={Expand} alt="expand" />
                        )}
                        <h2 className="text-f14 font-regular text-gray-700 pl-8">Current Pool Status</h2>
                    </div>
                </div>
                {expand && (
                    <div>
                        {data?.map(obj => (
                            <div className={`${expand ? "show-text" : "hide-text"} flex justify-between pt-4`}>
                                <Image src={symbols[obj.coinSymbol]} alt="btc" />
                                <p className="text-f16 font-regular">
                                    {obj.poolAmount} {obj.coinSymbol}
                                </p>
                            </div>
                        ))}
                        <div className="border-b border-gray-700 pb-4" />
                        <div className="flex justify-end">
                            <h2 className="font-bold text-f22">
                                {currentPool}
                                <span className="font-regular text-f12 pl-8">LUCKI</span>
                            </h2>
                        </div>
                        <div className="flex justify-center cursor-pointer" onClick={() => toggleExpand(false)}>
                            <Image src={Unexpand} alt="unexpand" />
                            <p className="pl-8 text-f14">Close</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default PoolStatus