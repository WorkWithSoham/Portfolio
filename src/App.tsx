import {CustomNavbar} from "./components/HTMLComponents/CustomNavbar.tsx";
import {DataComponent} from "./components/DataComponent.tsx";
import {MyInfo} from "./components/MyInfo.tsx";

export default function App() {

    return (
        <div className="bg-bkg w-full h-full 2xl:h-screen overflow-y-scroll">
            <CustomNavbar/>
            <div className="2xl:w-[70%] p-8 mx-auto h-full w-auto justify-center lg:flex">
                <div className="mx-auto p-3 lg:w-[28%] h-full w-full">
                    <MyInfo/>
                </div>
                <div className="mx-auto mt-10 xl:mt-2 xl:p-8 lg:w-[85%] h-full w-full 2xl:ml-10">
                    <DataComponent/>
                </div>
            </div>
        </div>
    )
}

