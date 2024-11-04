// // import React from 'react'
// import { RiReactjsLine } from "react-icons/ri";
// import { TbBrandNextjs } from "react-icons/tb";
// import { SiMongodb } from "react-icons/si";
// import { DiRedis } from "react-icons/di";
// import { FaNodeJs } from "react-icons/fa";
// import { BiLogoPostgresql } from "react-icons/bi";
// import { animate, motion } from "framer-motion";

// const iconVariants =(duration) =>({
//         initial:{y:-10},
//         animate:{
//                 y:[10,-10],
//                 transition:{
//                         duration:duration,
//                 ease:"linear",
//                 repeat: Infinity,
//                 repeatType:"reverse",
//         }
//         }
       
// })

// const Technologies = () => {
//   return (
//     <div className="border-b border-neutral-800 pb-24">
//         <motion.h1
//         whileInView={{opacity:1,y:0}}
//         initial={{opacity:0,y:-100}}
//         transition={{duration:1.5}}
//         className="my-20 text-center text-4xl">Technologies</motion.h1>
//         <motion.div 
//         whileInView={{opacity:1,x:0}}
//         initial={{opacity:0,x:-100}}
//         transition={{duration:1.5}}
//          className="flex flex-wrap items-center justify-center gap-4">
//             <motion.div 
//             variants={iconVariants(2.5)}
//             initial="initial"
//             animate="animate"
//             className="rounded-2xl border-4 border-neutral-800 p-4">
//                     <RiReactjsLine className="text-7xl text-cyan-400"/>
//             </motion.div>
//             <motion.div 
//              variants={iconVariants(3)}
//              initial="initial"
//              animate="animate"
//             className="rounded-2xl border-4 border-neutral-800 p-4">
//                     <TbBrandNextjs className="text-7xl "/>
//             </motion.div>
//             <motion.div
//             variants={iconVariants(5)}
//             initial="initial"
//             animate="animate"
//              className="rounded-2xl border-4 border-neutral-800 p-4">
//                     <SiMongodb className="text-7xl text-green-400"/>
//             </motion.div>
//             <motion.div
//             variants={iconVariants(2)}
//             initial="initial"
//             animate="animate"
//              className="rounded-2xl border-4 border-neutral-800 p-4">
//                     <DiRedis className="text-7xl text-red-700"/>

//             </motion.div>
//             <motion.div 
//             variants={iconVariants(6)}
//             initial="initial"
//             animate="animate"
//             className="rounded-2xl border-4 border-neutral-800 p-4">
//                     <FaNodeJs className="text-7xl text-green-500"/>
//             </motion.div>
//             <motion.div 
//             variants={iconVariants(4)}
//             initial="initial"
//             animate="animate"
//             className="rounded-2xl border-4 border-neutral-800 p-4">

//                     <BiLogoPostgresql className="text-7xl text-sky-700"/>
//             </motion.div>
//         </motion.div>
//     </div>
//   )
// }

// export default Technologies

// import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandPython } from "react-icons/tb";
import { SiMongodb, SiPostman, SiPowerbi } from "react-icons/si";
import { DiGitBranch } from "react-icons/di";
import { FaNodeJs, FaDocker } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoVisualStudio } from "react-icons/bi";
import { BsFiletypeCss, BsFiletypeHtml } from "react-icons/bs";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">Technologies</motion.h1>
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto">
                
                {/* First Row of Technologies */}
                <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className="text-7xl" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-400" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoPostgresql className="text-7xl text-sky-700" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandPython className="text-7xl text-blue-500" />
                </motion.div>

                {/* Second Row of Technologies */}
                <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaDocker className="text-7xl text-blue-500" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiGitBranch className="text-7xl text-orange-400" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPostman className="text-7xl text-orange-600" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPowerbi className="text-7xl text-yellow-500" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoVisualStudio className="text-7xl text-blue-600" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BsFiletypeHtml className="text-7xl text-orange-500" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BsFiletypeCss className="text-7xl text-blue-500" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;

