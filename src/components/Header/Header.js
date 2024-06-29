import React from 'react'
import PrimaryButton from '../../UI/PrimaryButton/PrimaryButton'
import cx from 'classnames'

const navData = [
  {
    id: 1,
    text: 'home',
    link: '/'
  },
  {
    id: 2,
    text: 'technology',
    link: '/'
  },
  {
    id: 3,
    text: 'code',
    link: '/'
  },
  {
    id: 4,
    text: 'contact',
    link: '/'
  }
]
const Header = () => {
  return (
    <nav class="bg-transparent border-gray-200">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span class="self-center text-2xl font-semibold whitespace-nowrap ">PRAVEEN</span>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden " aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class={cx("font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700")}>
            {
              navData.map((data) => {
                return (
                  <li key={data?.id}>
                    <a href={data?.link} class="block py-2 px-3 text-white rounded md:bg-transparent 
               md:p-0 hover:text-black" aria-current="page">{data?.text}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Header
