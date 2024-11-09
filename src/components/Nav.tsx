
import Image from "next/image"
import Link from "next/link"
function Nav(){
    return(
      <>
  <ul className="flex gap-16 mt-8 font-bold ">
    <li className="font-bold ml-32 text-2xl mr-60"><Image src={"/Group 356 (1).png"}alt="logo" width={200} height={50}/></li>
    <li><Link href={"/Section.tsx"}> Home</Link></li>
    <li>About Us</li>
    <li>Courses</li>
    <li>Our Service</li>
    <li>Contact Us</li>
    <li><button >Sign In</button></li>
  </ul>
      
           </>
    )
  }
  export default Nav