import React, { FC } from 'react'

const FeatureSection:FC = () => {
  const _feature = [
    {
      id:1,
      title1: "Instruktur",
      title2: "Profesional",
      icon: "icons/feature-1.svg",
    },
    {
      id:2,
      title1: "Perencanaan",
      title2: "Studi & Karir",
      icon: "icons/feature-2.svg",
    },
    {
      id:3,
      title1: "Sertifikasi",
      title2: "Online",
      icon: "icons/feature-3.svg",
    },
    {
      id:4,
      title1: "Penyaluran",
      title2: "Kerja",
      icon: "icons/feature-4.svg",
    },
    {
      id:5,
      title1: "6000+",
      title2: "Peserta",
      icon: "icons/feature-5.svg",
    },
  ];
  return (
    <section className="flex z-10 p-6 w-full items-center md:h-[140px] justify-between mt-10">
    <div className="md:flex grid grid-cols-2 gap-6 md:gap-x-12 items-center justify-center w-full">
      {_feature.map((feat) => (
       <div className="w-[165px] h-[165px] px-5 py-4 bg-neutral-50 rounded-lg shadow flex-col justify-center items-start gap-3 inline-flex" key={feat.id}>
  <img  src={feat.icon}  className="w-[55px] h-[55px] ">
  </img>
 <div>
 <p className=" text-neutral-900 text-lg font-medium">{feat.title1}</p>
  <p className=" text-neutral-900 text-lg font-medium">{feat.title2}</p>
 </div>
</div>
      ))}
    </div>
  </section>
  )
}

export default FeatureSection