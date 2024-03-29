import React, {  useState } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import Switch from './Switch';
import { motion, AnimatePresence } from 'framer-motion';

const filters = [
  {
    id: 1,
    name: 'Filter 1',
    options: [
      { label: 'Option 1', value: 'option1', checked: false },
      { label: 'Option 2', value: 'option2', checked: true },
    ],
  },
];

const Accordion: React.FC = () => {
  const [openSectionId, setOpenSectionId] = useState<number | null>(null);

  const toggleSection = (id: number) => {
    setOpenSectionId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="space-y-2">
      {filters.map((section) => (
        <motion.div
          key={section.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          exit={{ opacity: 0, x: -20 }}
          className="rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600"
        >
          <div
            className={`w-full flex items-center justify-between px-4 py-3 text-lg font-medium text-[--txt] focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50 transition duration-150 ${openSectionId === section.id ? 'rounded-t-lg' : 'rounded-lg'}`}
          >
            <div className="flex items-center gap-5">
              {section.name}
              <Switch />
            </div>
            <span className="ml-6 flex items-center cursor-pointer duration-300" onClick={() => toggleSection(section.id)}>
              {openSectionId === section.id ? (
                <MinusIcon className="h-5 w-5" aria-hidden="true" />
              ) : (
                <PlusIcon className="h-5 w-5" aria-hidden="true" />
              )}
            </span>
          </div>
          <AnimatePresence>
            {openSectionId === section.id && (
              <motion.div
                key={`content-${section.id}`}
                initial={{ opacity: 0,y:-20, overflow: 'hidden' }}
                animate={{ opacity: 1,y:0, overflow: 'visible' }}
                exit={{ opacity: 0, overflow: 'hidden' }}
                transition={{ duration: 0.3 }}
                className="px-4 py-3 text-[--txt] duration-300"
              >
                <div className="space-y-2">
                  {section.options.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center gap-7 pl-6">
                      <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-[--txt]">
                        {option.label}
                      </label>
                      <Switch />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default Accordion;
