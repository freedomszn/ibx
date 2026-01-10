import React from 'react'
import Brands from './Brands'
// import Galaxy from './Galaxy';
const Collaborators = () => {
    return (
        <div
            className="
        flex flex-col items-start
        py-15 max-w-full
         bg-black dotted
      "
        >

            <div className="text-white px-4 py-11">
                <p className="sans font-medium text-[16px] leading-6 tracking-[-1.1%] mb-1.5">
                    COLLABORATORS
                </p>

                <h3 className="getai max-w-216.75 text-[20px] font-black mt-1.5 mb-8">
                    Join 300+ communities in amplifying impact, inspire participation,
                    and build the foundation and shaping a strong west African Blockchain story.
                </h3>

                <button className="geist text-sm font-bold rounded-md orange w-40 h-9 text-black point hover:scale-105 transition-all">
                    Become a Sponsor
                </button>
            </div>

            <Brands />
        </div>
    )
}

export default Collaborators
