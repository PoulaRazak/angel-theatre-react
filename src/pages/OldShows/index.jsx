import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import TheatreCard from "../../components/TheatreCard";
import TheatreBackground from "../../components/background";

export default function OldShows() {
    const shows=[
        {
            id:1,
            name:"الجريمة والعقاب",
            image:"../src/assets/images/crime1poster.jpg",
            gallery:[
                "../src/assets/images/crime2poster.jpg",
                "../src/assets/images/crime3poster.jpg",
                "../src/assets/images/crime4poster.jpg",
            ]
        },
        {
            id:2,
            name:"ظل أبي ",
            image:"../src/assets/images/fatherposter.jpg",
            gallery:[
                "../src/assets/images/father2poster.jpg",
                "../src/assets/images/father3poster.jpg",
                "../src/assets/images/father4poster.jpg",
               
            ]
        },
        {
            id:3,
            name:"الحضيض",
            image:"../src/assets/images/poorposter.jpg",
            gallery:[
                "../src/assets/images/poor2poster.jpg",
                "../src/assets/images/poor4poster.jpg",
                "../src/assets/images/poor3poster.jpg",
               
            ]
        },
    ]
    return <>
        <TheatreBackground/>
    <h1 className="text-2xl text-[#c6a15b] font-bold text-center mt-25"> العروض السابقة  </h1>
    <div className="flex flex-wrap flex-row justify-center">
        {
            shows.map((show)=>{
                console.log(show);
                
                return(
                  <TheatreCard key={show.id} show={show} />  
                )
            })
        }
    </div>
    </>
}