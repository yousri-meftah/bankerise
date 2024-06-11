import React, { useState } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import Switch from './Switch';
import { motion, AnimatePresence } from 'framer-motion';



const Accordion: React.FC = ({ feature }: any) => {
  const [openSectionId, setOpenSectionId] = useState<number | null>(null);
  const [openSwitch, setOpenSwitch] = useState(false)
  const [openSubSwitches, setOpenSubSwitches] = useState(
    feature.features.map(() => false)
  );

  const handleToggle = (index) => {
    // Create a new array to avoid mutating the state directly
    const newOpenSubSwitches = [...openSubSwitches];
    newOpenSubSwitches[index] = !newOpenSubSwitches[index];
    setOpenSubSwitches(newOpenSubSwitches);
  };
  const toggleSection = (id: number) => {
    setOpenSectionId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="space-y-4">
      <motion.div
        key={feature?.id}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0, x: -20 }}
        className="rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600"
      >
        <div
          className="w-full flex items-center justify-between px-4 py-3 text-lg font-medium text-[--txt] focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50 transition duration-150 "
        >
          <div className="flex justify-between w-full items-center gap-5">
            {feature?.name}
            <Switch state={openSwitch} setstate={setOpenSwitch} />
          </div>
          <span className="ml-6 flex items-center cursor-pointer duration-300" onClick={() => toggleSection(feature?.id)}>
            {openSectionId === feature?.id ? (
              <MinusIcon className="h-5 w-5" aria-hidden="true" />
            ) : (
              <PlusIcon className="h-5 w-5" aria-hidden="true" />
            )}
          </span>
        </div>

        <AnimatePresence>
          {openSectionId === feature?.id && (
            <motion.div
              key={`content-${feature?.id}`}
              initial={{ opacity: 0, y: -20, overflow: 'hidden' }}
              animate={{ opacity: 1, y: 0, overflow: 'visible' }}
              exit={{ opacity: 0, overflow: 'hidden' }}
              transition={{ duration: 0.3 }}
              className="px-4 py-3 text-[--txt] duration-300 h-auto"
            >
              <div className="space-y-2">
                {feature.features.map((option, optionIdx) => (
                  <div key={option?.value} className="flex justify-between items-center gap-12pl-6 h-auto">
                    <label htmlFor={`filter-${feature?.id}-${optionIdx}`} className="ml-3 text-[--txt]">
                      {option.name}
                    </label>
                    <Switch
                  state={openSubSwitches[optionIdx]}
                  setstate={() => handleToggle(optionIdx)}
                />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Accordion;
