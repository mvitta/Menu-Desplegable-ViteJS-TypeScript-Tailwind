import { useRef } from 'react'
import './App.css'
import { Logo, MenuIcon } from './components/icons'
import { Menu } from './components/menu'

function App() {
  const menuRef = useRef<HTMLElement>(null)

  return (
    <main>
      <div className='flex justify-between flex-wrap py-6 px-4 border-b border-solid border-stone-900 shadow-md shadow-slate-500 bg-slate-900 text-white'>
        <Logo width={30} height={30} />
        <MenuIcon
          onClick={() => {
            if (menuRef.current) {
              console.log(menuRef.current)
            }

            const nav = menuRef.current
            if (nav) {
              const classes = nav.classList.toString().split(' ')
              const newCLasses = ['flex']
              if (classes.includes('hidden')) {
                nav.classList.remove('hidden')
                nav.classList.add(...newCLasses)
              } else {
                nav.classList.remove(...newCLasses)
                nav.classList.add('hidden')
              }
              console.log(nav.classList.toString().split(' '))
            }
          }}
        />
        <Menu ref={menuRef} />
      </div>

      <div className='mt-10 text-slate-800 p-4'>
        <h3>Vertical Mobile Navbar</h3>
        <p>
          This example demonstrates how a navigation menu on a mobile/smart
          phone could look like.
        </p>
        <p>
          Click on the hamburger menu (three bars) in the top right corner, to
          toggle the menu.
        </p>
      </div>
    </main>
  )
}

export default App
