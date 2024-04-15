type PropsMenuIcon = React.SVGProps<SVGSVGElement>

export default function MenuIcon(props: PropsMenuIcon) {
  return (
    <svg
      className='sm:hidden border border-solid border-white rounded p-2 '
      fill='#fff'
      xmlns='http://www.w3.org/2000/svg'
      width={30}
      height={30}
      viewBox='0 -960 960 960'
      {...props}
    >
      <path d='M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z' />
    </svg>
  )
}
