import { TextGenerateEffect } from "@components/Text-Generate-Effect";
import GlobalParamsTable from "../Components/GlobalParamsTable";

const words = `Global Parameters
`;
const GlobalParameters = () => {
  return (
    <div className="space-y-12 mt-10 ">
      <span className="flex justify-center my-7 "><TextGenerateEffect words={words} /></span>
      <div className="flex justify-center items-center gap-4">
      </div>

      <GlobalParamsTable/>

    </div>
  )
}

export default GlobalParameters