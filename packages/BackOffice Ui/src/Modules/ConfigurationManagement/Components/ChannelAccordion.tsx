import SwitchButton from "@components/Switch";
import { useState } from "react";
import { TECollapse } from "tw-elements-react";

export default function ChannelAccordion({ moduleName, features }): JSX.Element {
    const [activeElement, setActiveElement] = useState("");

    const handleClick = (value: string) => {
        if (value === activeElement) {
            setActiveElement("");
        } else {
            setActiveElement(value);
        }
    };
    const [toggles, setToggles] = useState(features.map(() => false));
    const handleToggle = (index: number) => {
        const newToggles = [...toggles]; // Create a copy of the toggles array
        newToggles[index] = !newToggles[index]; // Toggle the state at the given index
        setToggles(newToggles); // Update the toggles state
    };
    return (
        <>
            <div id="accordionExample">
                <div className="rounded-lg border border-[--border-color] bg-white/10 w-full">
                    <h2 className="mb-0 " id="headingOne">
                        <button
                            className={`${activeElement === "element1" &&
                                `text-[--txt] [box-shadow:inset_0_-1px_0_rgba(229,231,235)] `
                                }  group relative flex w-full items-center rounded-t-[15px] border-0  px-5 py-4 text-left text-base text-[--txt] transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none `}
                            type="button"
                            onClick={() => handleClick("element1")}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            {moduleName}
                            <span
                                className={`${activeElement === "element1"
                                    ? `rotate-[-180deg] -mr-1`
                                    : `rotate-0 fill-[#212529]  dark:fill-white`
                                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6 text-[--txt]"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <TECollapse
                        show={activeElement === "element1"}
                        className="!mt-0 !rounded-b-none !shadow-none"
                    >
                        {features.map((feature, index) => (
                            <div key={index} className="ml-[260px] py-4  flex">
                                <div className="pl-6 h-8 w-1/4">
                                    <span>{feature?.featureName}</span>
                                </div>
                                <div className="h-8 w-3/4 flex justify-center gap-44 pr-3">
                                    <SwitchButton bg={false} state={toggles[index]} setstate={() => handleToggle(index)} key={`switch-${index}`} />
                                    <SwitchButton bg={false} state={toggles[index]} setstate={() => handleToggle(index)} key={`switch-${index + 1}`} />
                                    <SwitchButton bg={false} state={toggles[index]} setstate={() => handleToggle(index)} key={`switch-${index + 2}`} />
                                </div>
                            </div>
                        ))}

                    </TECollapse>
                </div>
            </div>

        </>
    );
}