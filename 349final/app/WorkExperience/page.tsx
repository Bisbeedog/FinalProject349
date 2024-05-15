import Image from "next/image";
import Link from "next/link";


export default function FirstPost() {
  return (

  <div className="w-100">  <h1 className = "text-center text-5xl font-semibold">Work Experience </h1>
  <br></br>
  <br></br>
  <br></br>
  <br></br>


  <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:grid-cols-3 lg:text-left ">


  {/*The text box for my job description*/}
  <div className = "width:100%">
  <h2 className="box-sizing:border-box mb-3 text-2xl font-semibold width:33%">
      Previous Jobs{" "}
 
  </h2>
  <p className="m-0 max-w-[30ch] text-l opacity-75  ">
      Rolling Robots
  </p>
  <p className="m-0 max-w-[30ch] text-l opacity-75  ">
    Summer 2023
  </p>
  <p>
    Taught children the basics of robotics full time
  </p>
  <br>
  </br>
  <p className="m-0 max-w-[30ch] text-l opacity-75  ">
    Yogurtland
  </p>
  <p className="m-0 max-w-[30ch] text-l opacity-75  ">
    Jan 2022-August 2022
  </p>
  <p className="m-0 max-w-[30ch] text-l opacity-75  ">
    Served frozen yogurt part time
  </p>


  </div>

  {/*A basic image*/}

  <Image
          className="box-sizing:border-box text-center relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert width:33%"
          src="/RollingRobots.png"
          alt="RollingRobots"
          width={200}
          height={2000}
          priority
        />


  {/*returns to main menu*/}

  <Link 
  href="/" 
  className="box-sizing:border-box width:33% group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"> 
    <h2 className="mb-3 text-2xl font-semibold">
      Main Menu{" "}
    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
      -&gt;
      </span>
  </h2>
  <p className="m-0 max-w-[30ch] text-sm opacity-50">
    Return to the main menu 
  </p>


  </Link>  

    {/*Fixes a formatting issue with the break lines*/}
    
  </div>
  <br></br>
  <br></br>
  <br></br>
  <br></br>  <br></br>
  <br></br>
  <br></br>
  <br></br>  <br></br>
  <br></br>
  <br></br>
  <br></br>  <br></br>
  <br></br>
  <br></br>
  <br></br>  <br></br>
  <br></br>
  <br></br>
  <br></br>  <br></br>
  <br></br>
  <br></br>
  <br></br>  <br></br>
  <br></br>
  <br></br>
  <br></br>
  </div>
  );
}