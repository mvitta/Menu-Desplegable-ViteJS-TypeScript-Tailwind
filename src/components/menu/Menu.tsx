import { forwardRef } from 'react'

type PropsNav = React.HTMLAttributes<HTMLElement>

const Menu = forwardRef<HTMLElement, PropsNav>((props, ref) => {
  //   const mobile = 'w-full flex-col items-center p-6 gap-y-3'
  //   const defaultStyles =
  //     'sm:flex sm:flex-wrap sm:flex-row sm:p-0 sm:gap-y-0 sm:gap-x-7 sm:w-auto hidden'
  return (
    <nav
      ref={ref}
      id='myLinks'
      className={`w-full flex-col items-center p-6 gap-y-3 sm:flex sm:flex-wrap sm:flex-row sm:p-0 sm:gap-y-0 sm:gap-x-7 sm:w-auto hidden`}
      {...props}
    >
      <a
        href='#news'
        className='hover:bg-white hover:text-slate-800 px-4 py-2 rounded sm:px-2'
      >
        News
      </a>
      <a
        href='#contact'
        className='hover:bg-white hover:text-slate-800 px-4 py-2 rounded sm:px-2'
      >
        Contact
      </a>
      <a
        href='#about'
        className='hover:bg-white hover:text-slate-800 px-4 py-2 rounded sm:px-2'
      >
        About
      </a>
    </nav>
  )
})

export default Menu
