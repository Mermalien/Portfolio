// eslint-disable-next-line no-unused-vars
import React from "react"
import PropTypes from 'prop-types'

const ProjectItem = ({project, details, link}) => {
    return(
        <ol className="flex flex-xol md:flex-row relative border-l border-stone-200">
            <li className="mb-10 ml-4 ">
                <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
                <p className="flex flex-wrap items-center justify-start text-xs md:text-sm">
                    <span className="text-lg font-semibold text-[#001b5e]">{project}</span>
                </p>
                <p className="my-2 text-base font-normal text-stone-500">{details}</p>
                <p className="my-2 text-base font-normal text-stone-500 hover:underline">{link}</p>
            </li>
        </ol>
    )
}

ProjectItem.propTypes = {
    project: PropTypes.string,
    details: PropTypes.string,
    link: PropTypes.element,
}

export default ProjectItem;