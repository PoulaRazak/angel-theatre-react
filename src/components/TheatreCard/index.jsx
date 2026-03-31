export default function TheatreCard({ show }) {
    return <>
        <div className="border border-[#c6a15b] m-10 rounded-lg shadow-md shadow-[#c6a15b] flex flex-col items-start p-2 gap-2 bg-[#1a120b]">
            {/* <img src={show.image} alt="show image" className="object-cover h-100 w-80" /> */}
            <figure className="hover-gallery object-cover h-112 w-80">
                <img src={show.image} />
                <img src={show.gallery[0]} />
                <img src={show.gallery[1]} />
                <img src={show.gallery[2]} />
            </figure>
            <div className="flex flex-row justify-between items-center w-full p-2">
                <p>{show.name}</p>
                <button className="text-[#c6a15b] border border-[#c6a15b] px-2 py-1 rounded-md cursor-pointer hover:bg-[#c6a15b] hover:text-[#1a120b]"> عن العرض  </button>
            </div>
        </div>
    </>
}