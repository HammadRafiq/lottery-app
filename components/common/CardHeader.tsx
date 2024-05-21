import Image from "next/image"

const CardHeader = ({ title, subtitle, icon, color="text-primary" }: { title: string, subtitle: string, icon: string, color?: string }) => {
    return (
        <div className='flex justify-between font-sans font-bold'>
            <div className="flex">
                <Image
                    src={title}
                    alt="header title"
                />
                <p className={`text-f14 font-regular pl-15 pt-4 ${color}`}>
                    No. {subtitle}
                </p>
            </div>
            <div>
                <Image
                    src={icon}
                    alt="header zoom icon"
                />
            </div>
        </div>
    )
}

export default CardHeader