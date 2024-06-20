import { useState } from 'react';
import { TextGenerateEffect } from "@components/Text-Generate-Effect";
import { tabs } from "../../ApplicationsManagement/utils/constants";
import ChannelsTable from '../Components/ChannelsTable';

const words = `Channels Management`;

const ChannelsManagement = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  return (
    <div className="space-y-12 mt-10">
      <span className="flex justify-center">
        <TextGenerateEffect words={words} />
      </span>

      <div className="px-4  sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            <select
              id="tabs"
              name="tabs"
              className="block w-full rounded-md border-none bg-white/5 py-2 pl-3 pr-10 text-base text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm"
              value={selectedTabId}
              onChange={(e) => setSelectedTabId(e.target.value)}
            >
              {tabs.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.name}
                </option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <nav className="flex border-b border-gray-500 py-4">
              <ul
                role="list"
                className="flex justify-around min-w-full flex-none gap-x-6 px-2 text-lg font-bold text-[--tabColor]"
              >
                {tabs.map((tab) => (
                  <li key={tab.id} className="hover:scale-105 duration-300">
                    <a
                      href={tab.href}
                      onClick={() => setSelectedTabId(tab.id)}
                      className={tab.id == selectedTabId ? 'text-[--tabColorHover] shadow-xl' : ''}
                    >
                      {tab.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <ChannelsTable/>
    </div>
  );
};

export default ChannelsManagement;