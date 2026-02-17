"use client";

import { SpecializeType } from "@/app/types/specialize";
import Image from "next/image";
import { useEffect, useState } from "react";
import SpecializeSkeleton from "../../Skeleton/Specialize";

const Specialize = () => {
  const [specialization, setSpecialization] = useState<SpecializeType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setSpecialization(data.SpecializeData);
      } catch (error) {
        console.error("Error fetching service", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section
      id="equipment"
      className="bg-secondary dark:bg-darklight scroll-mt-10"
    >
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="mb-6">MAIN EQUIPMENT</h2>
          <h3 className="text-2xl text-black dark:text-white font-normal max-w-2xl mx-auto">
            Kami menyediakan peralatan dan solusi terkait pengerukan dan
            reklamasi. Kami dapat menjadi mitra yang terpercaya dan unggul dalam
            menyediakan kebutuhan user terkait pengerukan dan reklamasi,
            dengan fokus pada kualitas, inovasi, dan layanan pelanggan yang
            unggul.
          </h3>
        </div>
        {/*  */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <SpecializeSkeleton key={i} />
              ))
            : specialization.map((item, i) => (
                <div key={i}>
                  <div className="bg-primary/10  dark:bg-darklight rounded-lg p-8">
                    <div className="p-3 rounded-lg bg-secondary justify-center w-fit mb-8 shadow-lg shadow-primary/30">
                      <Image
                        src={item.imgSrc}
                        alt={item.title}
                        width={320}
                        height={14}
                      />
                    </div>
                    <div>
                      <h5 className="font-bold mb-2">{item.title}</h5>
                      <p className="text-base font-normal max-w-xs">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Specialize;
