import { FC } from "react"
import HeroImg from '../../src/assets/hero-img.svg'

const Hero:FC = () => {
    return (
        <>
            <div className="flex justify-center h-[700px] bg-[#C7D0D9]">
                <img src={HeroImg} alt="hero"></img>
            </div>
        </>
    )
}

export default Hero