
const CardNumber = ({ value }: { value: number }) => {
    return (
        <div className="bg-gray-300 rounded-circle mr-8 w-35 flex justify-center">
            <p className="text-f22 text-white font-semibold">
                {value}
            </p>
        </div>
    )
}

export default CardNumber