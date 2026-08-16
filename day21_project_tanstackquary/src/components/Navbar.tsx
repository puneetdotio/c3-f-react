import { LogOut } from "lucide-react"
import { NavLink } from "react-router"

const Navbar = () => {

  return (
      <div className="flex justify-between p-4 items-center">
          <h1 className="text-xl font-semibold">SkyMart</h1>

          <div className="flex gap-10">
              <NavLink className={({isActive}) => isActive ? "text-xl font-semibold text-amber-400" : "text-xl font-semibold"} to={"/main"}>Home</NavLink>
              <NavLink className={({isActive}) => isActive ? "text-xl font-semibold text-amber-400" : "text-xl font-semibold"} to={"/main/shop"}>Shop</NavLink>
              <NavLink className={({isActive}) => isActive ? "text-xl font-semibold text-amber-400" : "text-xl font-semibold"} to={"/main/about"}>About</NavLink>

          </div>

          <div className="flex items-center gap-5">
              <h1>Hey, <strong className="text-yellow-400">Dev</strong></h1>
              <button>Cart</button>
              <LogOut className="cursor-pointer" size={18}/>
          </div>
    </div>
  )
}

export default Navbar