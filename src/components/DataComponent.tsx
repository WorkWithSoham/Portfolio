import {TabComponent} from "./HTMLComponents/TabComponent.tsx";
import {useState} from "react";
import {Home} from "./Home.tsx";
import {Education} from "./Education.tsx";
import {Experience} from "./Experience.tsx";
import {Projects} from "./Projects.tsx";
import {TechStack} from "./TechStack.tsx";
import {Contact} from "./Contact.tsx";

export const DataComponent = () => {

    const [currTab, setCurrTab] = useState("0")

    const tabComponentCallback = (selectedTab: string) => {
        setCurrTab(selectedTab)
    }

    const displayList = [
        <Home/>,
        <Education/>,
        <Experience/>,
        <Projects/>,
        <TechStack />,
        <Contact />
    ]

    return (
        <div className="text-secondary">
            <TabComponent callback={tabComponentCallback}/>
            <div
                className="flex flex-col w-full h-full lg:min-h-[75vh] 2xl:min-h-[60vh] mt-2 border border-secondary/40">
                {displayList[parseInt(currTab)]}
            </div>
        </div>
    )
}