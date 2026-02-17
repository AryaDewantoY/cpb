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
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="operation" className="scroll-mt-12">
      <section className="bg-secondary dark:bg-darklight overflow-hidden">
        <div className="container relative">
          <div className="mb-4">
            <h2 className="text-center">OPERATIONS PRINCIPLE</h2>
          </div>
          <div className="md:max-w-45 mx-auto mb-8">
            <h1 className="text-2xl font-normal text-center leading-8">
               Pelayanan yang Menuntun Operasional Harian Perusahaan
            </h1>
          </div>
          <div className="relative z-20 container my-10">
            <Slider {...settings}>
              {loading
                ? Array.from({ length: 4 }).map((_, i) => (
                    <ProjectSkeleton key={i} />
                  ))
                : project.map((item, i) => (
                    <div key={i} className="h-full">
                      {" "}
                      <div className="p-5 bg-white dark:bg-lightdarkblue m-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full min-h-[250px] flex flex-col">
                        <div className="w-full">
                           <div className='p-3 bg-primary/10 rounded-full w-max mb-4 mx-auto flex items-center justify-center'>
                                                <Image src={item.imgSrc} alt="icon" width={35} height={35} />
                                              </div>
                          <h5 className="text-center mb-4 font-bold text-darkblue dark:text-white uppercase text-lg border-b border-gray-100 dark:border-gray-700 pb-2">
                            {item.name}
                          </h5>

                          <p className="text-center text-xl text-gray-600 dark:text-gray-300 leading-relaxed italic">
                            "{item.description}"
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
