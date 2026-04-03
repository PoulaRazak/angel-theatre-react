import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import TheatreCard from "../../components/TheatreCard";
import TheatreBackground from "../../components/background";
import { plays } from "../../data/plays";

export default function OldShows() {
    return <>
        <TheatreBackground/>
    <h1 className="text-2xl text-[#c6a15b] font-bold text-center mt-25"> العروض السابقة  </h1>
    <div className="flex flex-wrap flex-row justify-center">
        {
            plays.map((show)=>{
                console.log(show);
                
                return(
                  <TheatreCard key={show.id} show={show} />  
                )
            })
        }
    </div>
    </>
}