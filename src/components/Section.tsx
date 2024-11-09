import Image from "next/image"
function Section(){
    return(


        
        <>
        <div className="flex">

<div className=" w-1/2 absolute">



        <div className="ml-32 mt-32">
            <h1>The <span >Smart</span></h1>
            <h1>Choice For <span>Future</span></h1> <br />
            <p>Elearn is a global training provider based accross the UK that specialises in  <br />accredited and bespoke training courses.
          
                impedit alias neque amet dolorum  <br />nulla laboriosam at nobis omnis? 
            </p>
           
           <div className="main ">
           
    
            <button> Continue</button></div>

      

        </div>
 </div>



{/* image ka div */}
<div className="img">
<Image src={"/Ellipse 1.png"} alt="" width={300} height={300} className=" absolute right-96"/>

<Image src={"/OBJECTS.png"} alt="" width={800} height={500} className="img  "/>


</div>




 </div>
        </>
    )
}
export default Section