import aboutPic from "../assets/aboutpic.jpg";
import { ABOUT_TEXT } from "../constants";
import {motion} from 'framer-motion';

const About = () => {
    return (
      <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">About 
          <span className="text-neutral-500"> Me</span>
        </h2>
        <div className="flex flex-wrap justify-center"> {/* Added justify-center to center the content */}
          <motion.div 
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:100}}
          transition={{duration:0.5}}
          className="w-full lg:w-1/2">
            <div className="flex justify-center">
              <p className="max-w-xl py-6 text-center text-lg">{ABOUT_TEXT}</p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  };
  

export default About