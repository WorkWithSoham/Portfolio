import {HomeData} from "../data/HomeData.ts";


export const Home = () => {

    return (
        <div className="w-full items-center justify-center p-4">
            <img src={HomeData.clipart}
                 className="mx-auto xl:mt-5 h-28 w-52 xl:w-96 xl:h-52 animate__animated animate__slideInRight"
                 alt="clipart"/>
            <blockquote
                className="p-4 my-4 text-primary/70 mx-auto font-serif">
                <p className="text-sm mx-2 mt-4 lg:text-xl xl:text-[1.5rem] italic xl:mt-6 xl:mx-20 leading-relaxed">
                    {HomeData.about}
                </p>
            </blockquote>
        </div>
    )
}