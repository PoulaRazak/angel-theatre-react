import TheatreBackground from "../../components/background";
import Hero from "../../components/Hero";
import OnStageCard from "../../components/OnStage-Card";


export default function MainHome() {

   
    return <>
    <div 
    //   className=" bg-[#1a120b]"
     >
    <Hero/>
        <h1 className="text-2xl text-[#c6a15b] font-bold text-center mt-20"> يعرض الان علي المسرح  </h1>

    <TheatreBackground/>
        <div className="flex flex-row flex-wrap">
            <OnStageCard/>
        </div>
    </div>
    
    </>
}