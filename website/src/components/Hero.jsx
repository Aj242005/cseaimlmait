import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from './canvas'

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto bg ">
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
                    <div className="w-1 sm:h-80 h-40 violet-gradient"/>
                </div>
                <div>
                    <h1 className={` text-5xl text-white font-bold`}>
                        Welcome to,<span
                        className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 text-transparent bg-clip-text"> CSE-AIML Department </span>
                    </h1>
                    <p className={`text- mt-2 text-white-100`}>
                        The Official page of <i> <b className="text-2xl">Computer Science Engineering - Artificial
                        Intelligence and Machine Learning
                    </b> <br className="sm:block hidden"/> Department</i> of <b className="text-xl"> Maharaja Agrasen
                        Institute of Technology, Delhi </b>
                    </p>
                </div>
            </div>
            <ComputersCanvas/>

            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                <a href='#about'>
                    <div
                        className='w-[21px] h-[45px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1'>
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-2 h-2 rounded-full bg-secondary mb-1'
                        />
                    </div>
                </a>
            </div>


        </section>
    )
}

export default Hero