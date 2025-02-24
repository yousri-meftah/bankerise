import { useTranslation } from "react-i18next";
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react';
import { Flags } from '../utils/constants'

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChangeLanguage = (event: { target: any; }) => {
    i18n.changeLanguage(event.target.value);
  };

  const setActiveFlag = (lang: string) => {
    handleChangeLanguage({ target: { value: lang } });
  };

  const activeFlag = i18n.language;

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-[--translationToggle] px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 hover:bg-gray-50">
          {activeFlag === 'en' ? (
            <>
              <img src={Flags.en_flag} alt="English" className='size-5 rounded-full' />
              <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </>
          ) : (
            <>
              <img src={Flags.fr_flag} alt="French" className='size-5 rounded-full' />
              <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </>
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <div
                  onClick={() => setActiveFlag('en')}
                  className={`${active ? 'bg-gray-300 text-gray-900 rounded-md ' : 'text-gray-700'} block px-4 py-2 text-sm hover:cursor-pointer`}
                >
                  <div className='flex justify-start gap-2'>
                    <img src={Flags.en_flag} alt="English" className='size-5 rounded-full' />
                    <span>English</span>
                  </div>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  onClick={() => setActiveFlag('fr')}
                  className={`${active ? 'bg-gray-300 text-gray-900 rounded-md ' : 'text-gray-700'} block px-4 py-2 text-sm hover:cursor-pointer`}
                >
                  <div className='flex justify-start gap-2'>
                    <img src={Flags.fr_flag} alt="French" className='size-5 rounded-full' />
                    <span>French</span>
                  </div>
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LanguageSelector;
