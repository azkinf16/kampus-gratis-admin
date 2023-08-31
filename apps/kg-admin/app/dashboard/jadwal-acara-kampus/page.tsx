import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import { JadwalMk } from '@/components/jadwal-mk/JadwalMk';
import BaseLayout from '@/modules/base/BaseLayout';
import { Fragment } from 'react';

const EventKampusPage = () => {
  const acaraKampusPageBC = [
    {
      name: 'Dashboard',
      link: '/dashboard',
    },
    {
      name: 'Acara Kampus',
      link: '/dashboard/jadwal-acara-kampus',
    },
  ];

  const acaraKampusData = [
    {
      date: 'Selasa, 28 Februari 2023',
      items: [
        {
          image: '/assets/pic-jmk.png',
          title: 'Webinar Cyber Security',
          dateEven: 'Selasa, 28 Februari 2023',
          time: 'Pukul 19:00 WIB',
        },
        {
          image: '/assets/pic-jmk.png',
          title: 'Webinar Cyber Security',
          dateEven: 'Selasa, 28 Februari 2023',
          time: 'Pukul 19:00 WIB',
        },
        {
          image: '/assets/pic-jmk.png',
          title: 'Webinar Cyber Security',
          dateEven: 'Selasa, 28 Februari 2023',
          time: 'Pukul 19:00 WIB',
        },
      ],
    },
    {
      date: 'Rabu, 29 Februari 2023',
      items: [
        {
          image: '/assets/pic-jmk.png',
          title: 'Webinar Cyber Security',
          dateEven: 'Rabu, 29 Februari 2023',
          time: 'Pukul 19:00 WIB',
        },
        {
          image: '/assets/pic-jmk.png',
          title: 'Webinar Cyber Security',
          dateEven: 'Rabu, 29 Februari 2023',
          time: 'Pukul 19:00 WIB',
        },
        {
          image: '/assets/pic-jmk.png',
          title: 'Webinar Cyber Security',
          dateEven: 'Rabu, 29 Februari 2023',
          time: 'Pukul 19:00 WIB',
        },
      ],
    },
    {
      date: 'Kamis, 30 Februari 2023',
      items: [
        {
          image: '/assets/pic-jmk.png',
          title: 'Webinar Cyber Security',
          dateEven: 'Kamis, 30 Februari 2023',
          time: 'Pukul 19:00 WIB',
        },
        {
          image: '/assets/pic-jmk.png',
          title: 'Webinar Cyber Security',
          dateEven: 'Kamis, 30 Februari 2023',
          time: 'Pukul 19:00 WIB',
        },
        {
          image: '/assets/pic-jmk.png',
          title: 'Webinar Cyber Security',
          dateEven: 'Kamis, 30 Februari 2023',
          time: 'Pukul 19:00 WIB',
        },
      ],
    },
  ];
  return (
    <BaseLayout>
      <div className="absolute right-0 w-[calc(100%-300px)] top-[15%] ml-10">
        <div className="w-max-full mt-5 mb-16 pr-10">
          <Breadcrumb items={acaraKampusPageBC} />
          {acaraKampusData.map((even, i) => (
            <Fragment key={i}>
              <h2 className="font-semibold mt-14 mb-9">{even.date}</h2>
              <div className="grid grid-cols-3 gap-10">
                {even.items.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                  >
                    <JadwalMk
                      image={item.image}
                      title={item.title}
                      dateEven={item.dateEven}
                      time={item.time}
                      position='vert'
                    />
                  </div>
                ))}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default EventKampusPage;
