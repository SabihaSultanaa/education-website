
import Image from "next/image"
import Link from "next/link"
function Nav(){
    return(
      <>
  <ul className=" unorder flex gap-14 mt-8 font-bold sticky top-0 ">
    <li className="font-bold ml-24 text-2xl mr-60"><Image src={"/Group 356 (1).png"}alt="logo" width={290} height={150}/></li>
    <li><Link href={"#home"}> Home</Link></li>
    <li><Link href={"#about"}>About Us</Link></li>
    <li> <Link href={"#course"}>Courses</Link></li>
    <li><Link href={"#service"}>Our Service</Link></li>
    <li><Link href={"#contact"}>Contact Us</Link></li>
    <li><button ><Link href={"sign"}>Sign In</Link></button></li>
  </ul>
      
           </>
    )
  }
  export default Nav