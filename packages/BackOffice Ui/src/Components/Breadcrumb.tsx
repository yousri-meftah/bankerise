import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'
import { Link, useLocation } from 'react-router-dom'


export default function Breadcrumb() {
  const location = useLocation();
  let currentLink = '';
  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '' && isNaN(crumb)) // remove empty strings and numeric segments
    .map((link, i, array) => {
      currentLink += `/${link}`;
      return {
        href: currentLink,
        name: link,
        current: i === array.length - 1, // Set current to true for the last crumb
      };
    });
  return (
    <nav className="flex mb-3" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link to={'/private/applications-management'} className="text-[--breadcrumbs] hover:text-[--breadcrumbHover]">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {crumbs.map((page) => (
          page.name === "private" ? null : (
            <li key={page.name}>
              <div className="flex items-center">
                <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-[--breadcrumbs]" aria-hidden="true" />
                <a
                  href={page.href}
                  className='ml-4 text-sm font-medium text-[--breadcrumbs] hover:text-[--breadcrumbHover]'
                >
                  {page.name.split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')}
                </a>
              </div>
            </li>
          )
        ))}

      </ol>
    </nav>
  )
}
