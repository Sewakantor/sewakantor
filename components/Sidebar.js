import React from 'react'
import LogoSVG from '../public/assets/images/main-logo-color.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar({ children }) {
  return (
    <div>
      <nav className="lg:hidden py-6 px-6 border-b">
        <div className="flex items-center justify-between">
          <a className="text-2xl font-semibold" href="#">
            <Image className="h-7" src={LogoSVG} alt="" width={120} height={30} />
          </a>
          <button className="navbar-burger flex items-center rounded focus:outline-none">
            <svg
              className="text-white bg-indigo-500 hover:bg-indigo-600 block h-8 w-8 p-2 rounded"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </nav>
      <div className="hidden lg:block navbar-menu relative z-50">
        <div className="navbar-backdrop fixed lg:hidden inset-0 bg-gray-800 opacity-10" />
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-3/4 lg:w-80 sm:max-w-xs pt-6 pb-8 bg-white border-r overflow-y-auto">
          <div className="flex w-full items-center px-6 pb-6 mb-6 lg:border-b border-blue-50">
            <a className="text-xl font-semibold" href="#">
              <Image className="h-7" src={LogoSVG} alt="" width={120} height={30} />
            </a>
          </div>
          <div className="px-4 pb-6">
            <h3 className="mb-2 text-xs uppercase text-gray-900 font-medium">
              Property
            </h3>
            <ul className="mb-8 text-sm font-medium">
              <li>
                <Link href="/dashboard" passHref>
                  <div
                    className="flex items-center pl-3 py-3 pr-2 text-gray-900 hover:bg-indigo-50 rounded"
                  >
                    <span className="inline-block mr-3">
                    </span>
                    <span>Complex</span>
                  </div>
                </Link>
              </li>
              <li>
              <Link href="/dashboard/building" passHref>
                  <div
                    className="flex items-center pl-3 py-3 pr-2 text-gray-900 hover:bg-indigo-50 rounded"
                  >
                    <span className="inline-block mr-3">
                    </span>
                    <span>Building</span>
                  </div>
                </Link>
              </li>
              <li>
              <Link href="/dashboard/unit" passHref>
                  <div
                    className="flex items-center pl-3 py-3 pr-2 text-gray-900 hover:bg-indigo-50 rounded"
                  >
                    <span className="inline-block mr-3">
                    </span>
                    <span>Unit</span>
                  </div>
                </Link>
              </li>
            </ul>
            <h3 className="mb-2 text-xs uppercase text-gray-900 font-medium">
              Review
            </h3>
            <ul className="mb-8 text-sm font-medium">
              <li>
              <Link href="/dashboard/review" passHref>
                  <div
                    className="flex items-center pl-3 py-3 pr-2 text-gray-900 hover:bg-indigo-50 rounded"
                  >
                    <span className="inline-block mr-3">
                    </span>
                    <span>Manage</span>
                  </div>
                </Link>
              </li>
            </ul>
            <h3 className="mb-2 text-xs uppercase text-gray-900 font-medium">
              Live Chat
            </h3>
            <ul className="mb-8 text-sm font-medium">
              <li>
              <Link href="/dashboard/livechat" passHref>
                  <div
                    className="flex items-center pl-3 py-3 pr-2 text-gray-900 hover:bg-indigo-50 rounded"
                  >
                    <span className="inline-block mr-3">
                    </span>
                    <span>Chat</span>
                  </div>
                </Link>
              </li>
            </ul>
            <h3 className="mb-2 text-xs uppercase text-gray-900 font-medium">
              Reservation
            </h3>
            <ul className="mb-8 text-sm font-medium">
              <li>
              <Link href="/dashboard/reservation" passHref>
                  <div
                    className="flex items-center pl-3 py-3 pr-2 text-gray-900 hover:bg-indigo-50 rounded"
                  >
                    <span className="inline-block mr-3">
                    </span>
                    <span>Manage</span>
                  </div>
                </Link>
              </li>
            </ul>
            <div className="pt-8">
              <a
                className="flex items-center pl-3 py-3 pr-2 text-gray-500 hover:bg-indigo-50 rounded"
                href="#"
              >
                <span className="inline-block mr-4">
                  <svg
                    className="text-gray-900 w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33368 9.99996C3.33368 10.221 3.42148 10.4329 3.57776 10.5892C3.73404 10.7455 3.946 10.8333 4.16701 10.8333H10.492L8.57535 12.7416C8.49724 12.8191 8.43524 12.9113 8.39294 13.0128C8.35063 13.1144 8.32885 13.2233 8.32885 13.3333C8.32885 13.4433 8.35063 13.5522 8.39294 13.6538C8.43524 13.7553 8.49724 13.8475 8.57535 13.925C8.65281 14.0031 8.74498 14.0651 8.84653 14.1074C8.94808 14.1497 9.057 14.1715 9.16701 14.1715C9.27702 14.1715 9.38594 14.1497 9.48749 14.1074C9.58904 14.0651 9.68121 14.0031 9.75868 13.925L13.092 10.5916C13.1679 10.5124 13.2273 10.4189 13.267 10.3166C13.3504 10.1137 13.3504 9.88618 13.267 9.68329C13.2273 9.581 13.1679 9.48755 13.092 9.40829L9.75868 6.07496C9.68098 5.99726 9.58874 5.93563 9.48722 5.89358C9.3857 5.85153 9.27689 5.82988 9.16701 5.82988C9.05713 5.82988 8.94832 5.85153 8.8468 5.89358C8.74529 5.93563 8.65304 5.99726 8.57535 6.07496C8.49765 6.15266 8.43601 6.2449 8.39396 6.34642C8.35191 6.44794 8.33027 6.55674 8.33027 6.66663C8.33027 6.77651 8.35191 6.88532 8.39396 6.98683C8.43601 7.08835 8.49765 7.18059 8.57535 7.25829L10.492 9.16663H4.16701C3.946 9.16663 3.73404 9.25442 3.57776 9.4107C3.42148 9.56698 3.33368 9.77895 3.33368 9.99996ZM14.167 1.66663H5.83368C5.17064 1.66663 4.53475 1.93002 4.06591 2.39886C3.59707 2.8677 3.33368 3.50358 3.33368 4.16663V6.66663C3.33368 6.88764 3.42148 7.0996 3.57776 7.25588C3.73404 7.41216 3.946 7.49996 4.16701 7.49996C4.38803 7.49996 4.59999 7.41216 4.75627 7.25588C4.91255 7.0996 5.00035 6.88764 5.00035 6.66663V4.16663C5.00035 3.94561 5.08814 3.73365 5.24442 3.57737C5.4007 3.42109 5.61267 3.33329 5.83368 3.33329H14.167C14.388 3.33329 14.6 3.42109 14.7563 3.57737C14.9125 3.73365 15.0003 3.94561 15.0003 4.16663V15.8333C15.0003 16.0543 14.9125 16.2663 14.7563 16.4225C14.6 16.5788 14.388 16.6666 14.167 16.6666H5.83368C5.61267 16.6666 5.4007 16.5788 5.24442 16.4225C5.08814 16.2663 5.00035 16.0543 5.00035 15.8333V13.3333C5.00035 13.1123 4.91255 12.9003 4.75627 12.744C4.59999 12.5878 4.38803 12.5 4.16701 12.5C3.946 12.5 3.73404 12.5878 3.57776 12.744C3.42148 12.9003 3.33368 13.1123 3.33368 13.3333V15.8333C3.33368 16.4963 3.59707 17.1322 4.06591 17.6011C4.53475 18.0699 5.17064 18.3333 5.83368 18.3333H14.167C14.8301 18.3333 15.4659 18.0699 15.9348 17.6011C16.4036 17.1322 16.667 16.4963 16.667 15.8333V4.16663C16.667 3.50358 16.4036 2.8677 15.9348 2.39886C15.4659 1.93002 14.8301 1.66663 14.167 1.66663Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="text-gray-900">Log Out</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="mx-auto lg:ml-80">{children}</div>
    </div>
  )
}
