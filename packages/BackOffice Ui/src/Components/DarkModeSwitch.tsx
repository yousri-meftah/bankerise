import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from 'react-icons/fa';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function SwitchButton() {
  const [enabled, setEnabled] = useState(true)
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark';
    document.querySelector('body')?.setAttribute('data-theme', storedTheme as string);
    localStorage.getItem('theme') == 'light' ? setEnabled(false) : null
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);
  const setDarkMode = () => {
    document.querySelector('body')?.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    setTheme('dark');
  };

  const setLightMode = () => {
    document.querySelector('body')?.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    setTheme('light');
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      onClick={toggleTheme}
      className={classNames(
        enabled ? 'bg-indigo-600' : 'bg-gray-200',
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        className={classNames(
          enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
        )}
      >
        <span
          className={classNames(
            enabled ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          )}
          aria-hidden="true"
        >

          <FaSun color='gray' />
        </span>
        <span
          className={classNames(
            enabled ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          )}
          aria-hidden="true"
        >
          <BsFillMoonStarsFill />
        </span>
      </span>
    </Switch>
  )
}
