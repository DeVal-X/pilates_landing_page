import styles  from "../style";
import { man_pic1 } from "../assets";
import {heroText} from "../constants";


const Hero = () => {
  const introText = heroText[0]

  return (
    <section id="home" className={`flex md:flex-row flex-col mt-6 item-center ${styles.boxWidth}`}>
      <div className="">
        <div className="">
          <h1 className="text-pigmentGreen flex-1 font-amatic font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
            Découvrez <br/>
            <span className="text-selectiveYellow">le pilates</span>
          </h1>
        </div>

        <div className="">
          <p>{introText.content}</p>
        </div>
      </div>

      <img src={man_pic1} alt="pilates posture" className="w-[320px] h-[320px] my-10 md:my-0"/>

    </section>
  )
}

export default Hero
