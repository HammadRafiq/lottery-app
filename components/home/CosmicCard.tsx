"use client"
import CardHeader from "../common/CardHeader"
import CosmicSvg from "@/public/assets/cosmic.svg"
import Zoom from "@/public/assets/cosmic-zoom.svg"
import NumberCard from "../common/CardNumber"
import NextDraw from "../common/NextDraw"
import PoolStatus from "../common/PoolStatus"
import { useEffect, useState } from "react"


const CosmicCard = () => {
    const [expand, setExpand] = useState<boolean>(false)
    const [data, setData] = useState<any>([])

    function handleExpand(value: boolean) {
        setExpand(value)
    }

    async function fetchData() {
        const response = await fetch('https://testing-luckito-backend.rnssol.com/api/luckito/lottery/get-lottery?lotteryType=COSMIC');
        const result = await response.json();
        setData(result);
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className="rounded-card bg-background-primary">
            <div className="p-15">
                <CardHeader
                    title={CosmicSvg}
                    subtitle={data?.data?.roundNumber}
                    icon={Zoom}
                />
                <div className="flex pt-25 pb-15">
                    {data?.data?.previousWinningticket?.map((elem: number) => (
                        <NumberCard value={elem} />
                    ))}
                </div>
                <div className="flex justify-between items-end">
                    <p className="font-regular text-f14">Winning Pot</p>
                    <h1 className="text-f24 font-bold">
                        {data?.data?.winningPot}
                        <span className="text-f12 font-regular pl-4">
                            LUCKI
                        </span>
                    </h1>
                </div>
            </div>
            <NextDraw time={data?.data?.nextDraw} />
            <div className="px-15 py-8">
                <PoolStatus
                    data={data?.data?.poolAmount}
                    toggleExpand={handleExpand}
                    expand={expand}
                    currentPool={data?.data?.currentPool}
                />
            </div>
        </div>
    )
}

export default CosmicCard