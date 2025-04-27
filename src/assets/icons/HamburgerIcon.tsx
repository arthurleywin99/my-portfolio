type Props = {
  onClick?: NoneToVoidFunction
}

const HamburgerIcon = ({ onClick }: Props) => {
  return (
    <svg
      className='hidden max-md:block'
      stroke='currentColor'
      fill='white'
      strokeWidth='0'
      viewBox='0 0 512 512'
      height='30px'
      width='30px'
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
    >
      <path d='M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z'></path>
    </svg>
  )
}

export { HamburgerIcon }
