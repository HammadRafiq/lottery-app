"use client"
import CardHeader from "../common/CardHeader"
import ClassicSvg from "@/public/assets/classic.svg"
import Zoom from "@/public/assets/classic-zoom.svg"
import NextDraw from "../common/NextDraw"
import PoolStatus from "../common/PoolStatus"
import { useEffect, useState } from "react"

const classicData = [
    {
        a: "2302123",
        b: "99 99 99 99 99",
        c: "14,934,000,000"
    },
    {
        a: "2302123",
        b: "99 99 99 99 99",
        c: "14,934,000,000"
    },
    {
        a: "2302123",
        b: "99 99 99 99 99",
        c: "14,934,000,000"
    },
    {
        a: "2302123",
        b: "99 99 99 99 99",
        c: "14,934,000,000"
    },
    {
        a: "2302123",
        b: "99 99 99 99 99",
        c: "14,934,000,000"
    },
]

const ClassicCard = () => {
    const [expand, setExpand] = useState<boolean>(false)
    const [data, setData] = useState<any>([])

    function handleExpand(value: boolean) {
        setExpand(value)
    }

    async function fetchData() {
        const response = await fetch('https://testing-luckito-backend.rnssol.com/api/luckito/lottery/get-lottery?lotteryType=CLASSIC')
        const result = await response.json();
        setData(result);
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className="rounded-card bg-background-secondary mt-15">
            <div className="p-15">
                <CardHeader
                    title={ClassicSvg}
                    subtitle={data?.data?.roundNumber}
                    icon={Zoom}
                    color="text-secondary"
                />
                <div className="pt-8">
                    {classicData?.map((obj, i) => (
                        <div className="flex justify-between" key={i}>
                            <p className="font-semibold text-f14">{obj.a}</p>
                            <p className="font-semibold text-f14 text-secondary">{obj.b}</p>
                            <p className="font-semibold text-f14">{obj.c}</p>
                        </div>
                    ))}
                </div>
            </div>
            <NextDraw
                time={data?.data?.nextDraw}
                bgClass="bg-secondary"
                color="text-secondary"
            />
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

export default ClassicCard