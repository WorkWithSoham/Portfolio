import {getPdfURL} from "../types.s.ts";
import {Blockquote} from 'flowbite-react';
import {MyInfoData} from "../data/MyInfoData.ts";


export const MyInfo = () => {

    const resume = getPdfURL(MyInfoData.resume_file)

    return (
        <div className="container text-center lg:text-start 2xl:mt-6">
            <div className="w-full">
                <img src={MyInfoData.dp}
                     className="rounded-full aspect-square object-top object-cover
                                h-32 w-32 lg:h-60 lg:w-60
                                mx-auto mb-5 p-2
                                relative border-4
                                border-t-slate-400 border-l-slate-400
                                border-b-slate-700 border-r-slate-700"
                     alt="Profile Img"/>
            </div>

            <h1 className="text-3xl text-primary">{MyInfoData.name}</h1>
            <h3 className="text-xl text-secondary">{MyInfoData.username}</h3>

            <a
                className="px-3 py-2 lg:w-full w-2/3 text-sm text-center inline-flex justify-center
                    bg-slate-700/50 my-4 border-[1px] border-primary/40 text-primary/80 rounded-md
                    hover:bg-slate-400/50"
                type="button"
                href={resume}
                target="_blank"
            >
                <span>
                    <svg className="w-5 h-5 mr-1" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg"
                         fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd"
                          d="M9 2.2V7H4.2l.4-.5 3.9-4 .5-.3Zm2-.2v5a2 2 0 0 1-2 2H4v11c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7ZM8
                          16c0-.6.4-1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1-5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z"
                          clipRule="evenodd"/>
                    </svg>
                </span>
                <span>Resume</span>
            </a>

            <br/>

            <div className="inline-flex">
                <span>
                    <svg className="w-5 h-5 text-primary/80 mr-2" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.8 14h0a7 7 0 1 0-11.5 0h0l.1.3.3.3L12 21l5.1-6.2.6-.7.1-.2Z"/>
                    </svg>
                </span>
                <p className="text-sm text-primary/80">{MyInfoData.location}</p>
            </div>
            <br/>
            <div className="inline-flex cursor-pointer overflow-hidden"
                 onClick={() => {
                     window.location.href = `mailto:${MyInfoData.email}`
                 }}>
                <span>
                    <svg className="w-5 h-5 text-primary/80 mr-2" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M2 5.6V18c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V5.6l-.9.7-7.9 6a2 2 0 0 1-2.4 0l-8-6-.8-.7Z"/>
                        <path
                            d="M20.7 4.1A2 2 0 0 0 20 4H4a2 2 0 0 0-.6.1l.7.6 7.9 6 7.9-6 .8-.6Z"/>
                    </svg>
                </span>
                <p className="text-sm text-primary/80 break-normal">{MyInfoData.email}</p>
            </div>

            <div className="relative flex pt-3 pb-2 items-center">
                <div className="flex-grow border-t border-primary/60"></div>
                <span className="flex-shrink mx-2 text-sm text-primary/60">Socials</span>
                <div className="flex-grow border-t border-primary/60"></div>
            </div>


            <div className="inline-flex justify-center align-middle w-2/3 lg:w-full grid-cols-2">
                <img
                    className="mx-auto p-1 w-12 h-12 rounded-full border-[1px] cursor-pointer
                               border-t-slate-400 border-l-slate-400 border-b-slate-700 border-r-slate-700"
                    src={MyInfoData.github}
                    alt="Github"
                    onClick={() => {
                        window.open(MyInfoData.links.github, '_blank')
                    }}/>
                <img
                    className="mx-auto p-1 w-12 h-12 rounded-full border-[1px] cursor-pointer
                               border-t-slate-400 border-l-slate-400 border-b-slate-700 border-r-slate-700"
                    src={MyInfoData.insta}
                    alt="Instagram"
                    onClick={() => {
                        window.open(MyInfoData.links.insta, '_blank')
                    }}/>
                <img
                    className="mx-auto p-1 w-12 h-12 rounded-full border-[1px] cursor-pointer
                               border-t-slate-400 border-l-slate-400 border-b-slate-700 border-r-slate-700"
                    src={MyInfoData.linkedin}
                    alt="LinkedIn"
                    onClick={() => {
                        window.open(MyInfoData.links.linkedin, '_blank')
                    }}/>
                <img
                    className="mx-auto p-1 w-12 h-12 rounded-full border-[1px] cursor-pointer
                               border-t-slate-400 border-l-slate-400 border-b-slate-700 border-r-slate-700"
                    src={MyInfoData.leetcode}
                    alt="Leetcode"
                    onClick={() => {
                        window.open(MyInfoData.links.leetcode, '_blank')
                    }}/>
            </div>

            <div className="relative flex py-3 items-center">
                <div className="flex-grow border-t border-primary/60"></div>
                <span className="flex-shrink mx-2 text-sm text-primary/60">Motivation</span>
                <div className="flex-grow border-t border-primary/60"></div>
            </div>

            <figure className="mx-auto max-w-screen-md text-center">
                <svg
                    className="mx-auto mb-2 h-5 w-5 text-secondary"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                >
                    <path
                        d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                </svg>
                <Blockquote>
                    <p className="text-base font-medium italic text-secondary">
                        {MyInfoData.quote.quote}
                    </p>
                </Blockquote>
                <figcaption className="mt-1 flex items-center justify-center space-x-3">
                    <div className="flex items-center divide-x-2 divide-secondary">
                        <cite className="pr-3 font-medium text-secondary">{MyInfoData.quote.author}</cite>
                        <cite className="pl-3 text-sm text-secondary">{MyInfoData.quote.designation}</cite>
                    </div>
                </figcaption>
            </figure>

        </div>
    )
}