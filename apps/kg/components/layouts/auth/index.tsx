import { FC, ReactElement, useEffect, useState } from 'react';
import Image from 'next/image';
import { TAuthLayoutProps } from './types';

const slides = [
  {
    src: '/images/loginImg1.svg',
    title: 'Selamat Datang di Kampus Gratis',
    description:
      'Platform belajar gratis pertama di Indonesia, belajar mudah dengan kampus gratis bisa diakses siapapun khususnya kaum marginal',
  },
  {
    src: '/images/loginImg2.svg',
    title: 'Solusi Pendidikan Gratis & Berkualitas',
    description:
      'Kamu bisa raih jenjang pendidikan yang cemerlang tanpa perlu mengeluarkan biaya sedikitpun',
  },
  {
    src: '/images/loginImg3.svg',
    title: 'Terdapat 16 fitur yang membantu kamu',
    description:
      'Dibimbing oleh mentor yang profesional, Dukungan untuk karir masa depan',
  },
];

const SliderLayout: FC = () => {
  const [slider, setSlider] = useState(0);

  return (
    <div className="hidden lg:flex flex-col justify-center items-center w-1/2 h-full">
      <figure className="h-[340px]">
        <Image
          src={slides[slider].src}
          width={354}
          height={354}
          loading="eager"
          priority
          alt="Auth"
          className="transition-all max-w-[300px]s"
        />
      </figure>
      <section className="min-h-[120px] w-full px-14 text-center">
        <div className="text-[#171717] text-[27px] font-[700]">
          {slides[slider].title}
        </div>
        <p className="text-[#737373] text-[16px] font-[500]">
          {slides[slider].description}
        </p>
      </section>
      <div className="flex justify-center gap-3 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlider(index)}
            className={`${
              slider === index ? 'w-12 bg-primary-500' : ' w-3 '
            } h-3  transition-all rounded-full bg-neutral-300`}
          />
        ))}
      </div>
    </div>
  );
};

export const AuthLayout: FC<TAuthLayoutProps> = ({
  title,
  description,
  children,
  h = 'screen',
  error,
}): ReactElement => {
  const [getError, setError] = useState('');

  useEffect(() => {
    setError(error as string);
  }, [error]);
  return (
    <section
      className={`w-full bg-neutral-100 flex justify-center items-center lg:py-10 lg:px-14 md:p-8 sm:p-6 p-4 ${
        h === 'full' ? 'h-full' : 'h-screen'
      }`}
    >
      <section className="flex items-center bg-white w-full h-full rounded-lg shadow-lg">
        <SliderLayout />
        <div className="flex-col md:gap-y-[57px] gap-y-6 items-center justify-center p-6 flex h-full w-full lg:w-1/2">
          <div
            className="flex flex-col
           w-full justify-center pt-[47px] items-center md:items-start md:justify-start gap-y-1"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#171717]">
              {title}
            </h1>
            <p className="text-sm  md:text-base text-[#737373] font-medium text-center md:text-left mt-1 lg:pr-36 lg:-mb-6">
              {description}
            </p>
          </div>
          <div className="flex flex-col w-full items-start pb-[37px] justify-start">
            {getError && (
              <span className="bg-error-100 mb-4 text-error-600 w-full font-[700] text-1xl p-4 rounded-lg border-2 border-error-500 flex justify-between">
                <strong>{error}</strong>
                <span onClick={() => setError('')} className="text-right">
                  x
                </span>
              </span>
            )}
            {children}
          </div>
        </div>
      </section>
    </section>
  );
};
