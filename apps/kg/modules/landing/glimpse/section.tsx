import { Button } from '@kampus-gratis/components/atoms';
import Image from 'next/image';
import React from 'react';

const GlimpseSection = () => {
  const [isHidden, setIsHidden] = React.useState(true);

  return (
    <section className="bg-blue-base w-full mt-20 text-white px-8 lg:flex py-5 lg:py-10">
      <div className="w-full lg:w-1/2 py-5 lg:py-20">
        <h1 className="text-4xl font-bold">
          Sekilas Info <span className="text-orange-base ">Kampus Gratis</span>
        </h1>
        <p className='pt-6'>
        Kampus Gratis bekerjasama dengan perguruan tinggi yang berkualitas, dimana seluruh pembelajaran di KG, baik berupa : (1) Perkuliahan, (2) Pelatihan, (3) Magang maupun (4) Pengalaman kerja dari siswa akan dikonversi menjadi SKS untuk memperoleh Ijazah Pendidikan tinggi setara S1 dan S2. Team KG didukung sepenuhnya oleh M-Knows Consulting, konsultan manajemen nasional yang berumur lebih dari 20 tahun.
        </p>
        <p className='pt-6'>
        Dengan kekuatan dibidang solusi manajemen dan edukasi, M-Knows Konsisten dalam bidang Pelatihan, LMS & LXP, Solusi Artificial Intelligence bagi bisnis dan pendidikan, pengembangan Photorealistic VR Dari itu Kampus Gratis atau disingkat KG, mengadopsi aturan baru dari merdeka belajar depdikbud, seperti Magang, Studi independent Bersertifikat (MSIB) dan Rekognisi Pembelajaran Lampau (RPL). 
        </p>
        <p className={`${isHidden ? 'hidden' : ''} pt-6`}>
        Sesuai Peraturan Menteri Kementerian Riset, Teknologi, Dan Pendidikan Tinggi Republik Indonesia N0. 26 tahun 2016. Program MSIB telah diikuti oleh team KG sejak awal peluncurannya hingga sekarang. RPL adalah pengakuan atas Capaian Pembelajaran seseorang yang diperoleh dari pendidikan formal, nonformal, informal, dan/atau pengalaman kerja, sebagai dasar untuk melanjutkan pendidikan formal, dan untuk melakukan penyetaraan akademik atas pengalaman kerja atau pelatihan bersertifikasi, untuk memperoleh kualifikasi ijazah pendidikan tinggi.
        </p>
        <div className='justify-center flex mt-6'>
                <Button type="button" onClick={() => (setIsHidden(!isHidden))} className='text-white bg-transparent py-3 px-12 text-lg rounded-lg'>Lihat Semua</Button>
              </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center ">
        <Image
        width={500}
        height={500}
        src="/images/glimpse-image.png" alt="" className='lg:w-[500px] lg:h-[540px]' />
      </div>
    </section>
  );
};

export default GlimpseSection;
