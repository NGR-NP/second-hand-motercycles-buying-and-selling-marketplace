import { ImSpinner5 } from "react-icons/im"

const loading = () => {
  return (
    <div className='loading-page bg-gray-700 w-screen h-screen flex items-center justify-center'>
      <div className="spinner ">
        <span className=""><ImSpinner5 className="h-40 w-24 mx-auto text-white animate-spin" /></span>
        <div className="name-container">
          <div className="logo-name text-white text-3xl font-bold text-center">KBBTY</div>
        </div>
      </div>
    </div>
  )
}

export default loading