import { Button } from '@kampus-gratis/components/atoms';
import { url } from 'inspector';
import Image from 'next/image';
import React, { FC } from 'react';

const HeroSection: FC = () => {
  return (
    <>
      <section
        className="z-0 left-0 top-0 bg-white w-full h-full bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('images/hero-background.svg')`, width: 'auto', height: 'auto' }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="pt-12 px-6">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 self-center px-6">
                <h1 className="w-full md:w-[751px] md:text-[44px] md:leading-[54px] text-center md:text-start text-white text-2xl font-bold leading-[34px]">
                  SARJANA Gratis & Berkualitas Dengan Konversi SKS :
                </h1>
                <h2 className="w-full md:w-[751px] md:text-[28px] md:leading-[38px] text-center md:text-start text-orange-base text-xl font-bold leading-[27px] pt-6">
                  Kuliah, Pelatihan, Magang & Pengalaman Kerja
                </h2>
                <div className="w-full md:w-[720px] text-center md:text-start text-neutral-50 text-xl font-normal leading-relaxed pt-6">
                  Platform Pendidikan Tinggi Gratis Pertama di Indonesia. Dengan
                  akses belajar yang mudah bagi semua tanpa syarat.
                </div>
                <div className="justify-center flex mt-6 md:justify-start">
                  <Button
                    type="button"
                    className="text-white bg-orange-base py-3 px-12 text-lg font-semibold rounded-lg"
                  >
                    Coba Sekarang - Gratis
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-full md:flex md:justify-center lg:w-1/2">
                <Image
                  width={500}
                  height={500}
                  src="/images/hero-image.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
