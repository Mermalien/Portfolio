// eslint-disable-next-line no-unused-vars
import React from "react"
import PropTypes from 'prop-types'

const WorkItem = ({cargo, detalles}) => {
    return(
        <ol className="flex flex-xol md:flex-row relative border-l border-stone-200">
            <li className="mb-10 ml-4 ">
                <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
                <p className="flex flex-wrap items-center justify-start text-xs md:text-sm">
                    <span className="text-lg font-semibold text-[#001b5e]">{cargo}</span>
                </p>
                <p className="my-2 text-base font-normal text-stone-500">{detalles}</p>
            </li>
        </ol>
    )
}

WorkItem.propTypes={
    cargo: PropTypes.string,
    detalles: PropTypes.string
}

export default WorkItem;