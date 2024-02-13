import React from "react";
import Image from "next/image";
import { Button } from "@app/components/ui/Button";
import Build from "@app/asessts/building.jpg";

const ServiceSection = () => {
  return (
    <div className=" bg-[#f0f9ff] pb-10">

    <div className="container mx-auto py-10">
      <div className="grid grid-cols-3 gap-4">
        <div className="shadow-xl feature-card relative rounded-lg p-4 isolate shadow-gray-200 flex flex-col gap-6 overflow-hidden h-[26rem]">
          <Image className=" z-0 absolute inset-0 h-full w-full f-image" height={750} width={750} quality={100} src={Build} priority alt="" />
          
          <div className=" bg-gradient-to-b from-gray-400/50 via-gray-600/80 to-gray-700/95 absolute inset-0 h-full w-full flex items-end">
           <div className=" min-h-[60%] w-full mt-auto px-4 pb-2">
           <p className=" text-white font-semibold text-center text-xl apply-text-shadow ">
              Who can apply?
            </p>
            <h1 className=" text-white font-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus molestiae totam odio mollitia voluptatibus doloremque consectetur natus, veritatis tenetur consequatur. Beatae dicta, nostrum incidunt quam blanditiis quod quasi quos distinctio!
            </h1>
            <nav className=" rounded-full w-max p-3 bg-white mx-auto">
                <nav className=" flex items-center justify-center gap-1 whitespace-nowrap">
                  <h6 className=" text-xs">Learn More</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor"><path d="M11.086 7.757L15.328 12l-4.242 4.243l-1.414-1.414L12.5 12L9.672 9.172z"/><path fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1m9 11a9 9 0 1 0-18 0a9 9 0 0 0 18 0" clip-rule="evenodd"/></g></svg>
                </nav>
            </nav>
           </div>
          </div>
          
          <div className="flex justify-end">
            <Button variant="primary">Learn More</Button>
          </div>
        </div>
        <div className="shadow-xl feature-card relative rounded-lg p-4 isolate shadow-gray-200 flex flex-col gap-6 overflow-hidden h-[26rem]">
          <Image className=" z-0 absolute inset-0 h-full w-full f-image" height={750} width={750} quality={100} src={"/images/hero-thumbnails/5.jpg"} priority alt="" />
          
          <div className=" bg-gradient-to-b from-gray-400/50 via-gray-600/80 to-gray-700/95 absolute inset-0 h-full w-full flex items-end">
           <div className=" min-h-[60%] w-full mt-auto px-4 pb-2">
           <p className=" text-white font-semibold text-center text-xl apply-text-shadow ">
              Who can apply?
            </p>
            <h1 className=" text-white font-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus molestiae totam odio mollitia voluptatibus doloremque consectetur natus, veritatis tenetur consequatur. Beatae dicta, nostrum incidunt quam blanditiis quod quasi quos distinctio!
            </h1>
            <nav className=" rounded-full w-max p-3 bg-white mx-auto">
                <nav className=" flex items-center justify-center gap-1 whitespace-nowrap">
                  <h6 className=" text-xs">Learn More</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor"><path d="M11.086 7.757L15.328 12l-4.242 4.243l-1.414-1.414L12.5 12L9.672 9.172z"/><path fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1m9 11a9 9 0 1 0-18 0a9 9 0 0 0 18 0" clip-rule="evenodd"/></g></svg>
                </nav>
            </nav>
           </div>
          </div>
          
          <div className="flex justify-end">
            <Button variant="primary">Learn More</Button>
          </div>
        </div>
        <div className="shadow-xl feature-card relative rounded-lg p-4 isolate shadow-gray-200 flex flex-col gap-6 overflow-hidden h-[26rem]">
          <Image className=" z-0 absolute inset-0 h-full w-full f-image" height={750} width={750} quality={100} src={"/images/hero-thumbnails/6.jpg"} priority alt="" />
          
          <div className=" bg-gradient-to-b from-gray-400/50 via-gray-600/80 to-gray-700/95 absolute inset-0 h-full w-full flex items-end">
           <div className=" min-h-[60%] w-full mt-auto px-4 pb-2">
           <p className=" text-white font-semibold text-center text-xl apply-text-shadow ">
              Who can apply?
            </p>
            <h1 className=" text-white font-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus molestiae totam odio mollitia voluptatibus doloremque consectetur natus, veritatis tenetur consequatur. Beatae dicta, nostrum incidunt quam blanditiis quod quasi quos distinctio!
            </h1>
            <nav className=" rounded-full w-max p-3 bg-white mx-auto">
                <nav className=" flex items-center justify-center gap-1 whitespace-nowrap">
                  <h6 className=" text-xs">Learn More</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor"><path d="M11.086 7.757L15.328 12l-4.242 4.243l-1.414-1.414L12.5 12L9.672 9.172z"/><path fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1m9 11a9 9 0 1 0-18 0a9 9 0 0 0 18 0" clip-rule="evenodd"/></g></svg>
                </nav>
            </nav>
           </div>
          </div>
          
          <div className="flex justify-end">
            <Button variant="primary">Learn More</Button>
          </div>
        </div>

      </div>
    </div>
    </div>

  );
};

export default ServiceSection;
