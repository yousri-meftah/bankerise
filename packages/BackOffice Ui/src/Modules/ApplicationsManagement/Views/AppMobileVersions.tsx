
import { TextGenerateEffect } from "@components/Text-Generate-Effect"
import { AccordionCustomStyles } from "../Components/VersionsAccordion";

const words = `Mobile Versions
`;
const AppMobileVersions = () => {
  return (
    <div className="space-y-12 mt-10 ">
    <span className="flex justify-center my-7 "><TextGenerateEffect words={words} /></span>
    <div className="mx-auto w-[80%]">
      <AccordionCustomStyles />  
    </div>
    
    </div>
  )
}

export default AppMobileVersions