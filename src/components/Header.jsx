import { LOGO_URL } from '../utils/constant'

const Header = () => {
  return (
    <div className='absolute bg-gradient-to-b from-black z-10'>
      <img alt="Logo_Url" src={LOGO_URL} className="w-48" />
    </div>
  )
}

export default Header