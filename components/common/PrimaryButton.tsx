import React from 'react'

const PrimaryButton = ({ title = "Play", colorClass = "text-primary" }: { title?: string, colorClass?: string }) => {
    return (
        <button className={`${colorClass} bg-white px-20 rounded-button text-f14 font-semibold`}>
            {title}
        </button>
    )
}

export default PrimaryButton