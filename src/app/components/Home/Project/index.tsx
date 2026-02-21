"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { ProjectType } from "@/app/types/project";
import ProjectSkeleton from "../../Skeleton/Project";

const Project = () => {
  const [project, setProject] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setProject(data.ProjectData);
      } catch (error) {
        console.error("Error fetching service", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4, // Desktop: tetap 4 kolom berjejer
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2, // Tablet: 2 kolom
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1, // Mobile: MENURUN (1 kolom penuh), tidak akan berantakan lagi
        centerMode: false,
      }
    }
  ]
};

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
  {project.map((item, i) => (
    <div key={i} className="w-full">
      <div className="bg-[#0a192f] border border-white/10 rounded-2xl 
                      shadow-xl flex flex-col items-center 
                      p-6 lg:p-7
                      transition-all duration-300 
                      hover:border-primary/50
                      h-full">

        {/* Icon */}
        <div className="p-3 bg-primary/10 rounded-full mb-5">
          <Image 
            src={item.imgSrc}
            alt={item.name}
            width={32}
            height={32}
            className="lg:w-9 lg:h-9"
          />
        </div>

        {/* Title */}
        <h5 className="text-center font-bold text-white uppercase 
                       text-sm lg:text-base 
                       tracking-wider mb-3">
          {item.name}
        </h5>

        {/* Divider */}
        <div className="w-8 h-[3px] bg-primary mb-4 rounded-full"></div>

        {/* Description */}
        <p className="text-center text-xs lg:text-sm 
                      text-gray-300 leading-relaxed italic">
          "{item.description}"
        </p>

      </div>
    </div>
  ))}
</div>


return (
  <div id="operation" className="scroll-mt-12">
  <section className="bg-[#000b21] py-16">
  <div className="w-full max-w-[1600px] mx-auto px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-primary font-bold tracking-widest text-3xl mb-2 uppercase">
            OPERATIONS PRINCIPLE
          </h2>
          <h1 className="text-2xl md:text-3xl font-semibold text-white max-w-2xl mx-auto leading-snug">
            Pelayanan Yang Menuntun Operasional Harian Perusahaan
          </h1>
        </div>

        {/* Grid Section: Menurun di mobile (grid-cols-1), Berjejer di desktop (md:grid-cols-4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <ProjectSkeleton key={i} />
              ))
            : project.map((item, i) => (
                <div key={i} className="h-full">
                  <div className="p-8 bg-[#0a192f] border border-white/10 rounded-2xl shadow-xl flex flex-col items-center h-full transition-all duration-300 hover:border-primary/50">
                    
                    {/* Icon */}
                    <div className='p-4 bg-primary/10 rounded-full w-max mb-6 flex items-center justify-center'>
                      <Image 
                        src={item.imgSrc} 
                        alt={item.name} 
                        width={40} 
                        height={40} 
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-grow flex flex-col items-center">
                      <h5 className="text-center mb-4 font-bold text-white uppercase text-lg tracking-widest">
                        {item.name}
                      </h5>
                      
                      {/* Divider Line */}
                      <div className="w-12 h-1 bg-primary mb-6 rounded-full"></div>
                      
                      <p className="text-center text-sm md:text-base text-gray-300 leading-relaxed italic">
                        "{item.description}"
                      </p>
                    </div>

                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  </div>
);
};

export default Project;
