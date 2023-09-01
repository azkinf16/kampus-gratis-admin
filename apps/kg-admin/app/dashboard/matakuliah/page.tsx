import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import Matakuliah from '@/components/mk/Matakuliah';
import BaseLayout from '@/modules/base/BaseLayout';
import React from 'react';

function MatakuliahPage() {
  const mkPageBC = [
    {
      name: 'Dashboard',
      link: '/dashboard',
    },
    {
      name: 'Mata Kuliah',
      link: '/dashboard/matakuliah',
    },
  ];

  const mkData = [
    {
      image: '/assets/pic-mk.png',
      total_student: 322,
      title: 'Manajemen Keungan',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime atque natus alias necessitatibus ducimus minima architecto mollitia pariatur, sapiente sit. Corporis minima quia aliquam asperiores labore molestias magni, fugit consequatur voluptate?',
    },
    {
      image: '/assets/pic-mk.png',
      total_student: 322,
      title: 'Manajemen Keungan',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime atque natus alias necessitatibus ducimus minima architecto mollitia pariatur, sapiente sit. Corporis minima quia aliquam asperiores labore molestias magni, fugit consequatur voluptate?',
    },
    {
      image: '/assets/pic-mk.png',
      total_student: 322,
      title: 'Manajemen Keungan',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime atque natus alias necessitatibus ducimus minima architecto mollitia pariatur, sapiente sit. Corporis minima quia aliquam asperiores labore molestias magni, fugit consequatur voluptate?',
    },
    {
      image: '/assets/pic-mk.png',
      total_student: 322,
      title: 'Manajemen Keungan',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime atque natus alias necessitatibus ducimus minima architecto mollitia pariatur, sapiente sit. Corporis minima quia aliquam asperiores labore molestias magni, fugit consequatur voluptate?',
    },
    {
      image: '/assets/pic-mk.png',
      total_student: 322,
      title: 'Manajemen Keungan',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime atque natus alias necessitatibus ducimus minima architecto mollitia pariatur, sapiente sit. Corporis minima quia aliquam asperiores labore molestias magni, fugit consequatur voluptate?',
    },
    {
      image: '/assets/pic-mk.png',
      total_student: 322,
      title: 'Manajemen Keungan',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime atque natus alias necessitatibus ducimus minima architecto mollitia pariatur, sapiente sit. Corporis minima quia aliquam asperiores labore molestias magni, fugit consequatur voluptate?',
    },
    {
      image: '/assets/pic-mk.png',
      total_student: 322,
      title: 'Manajemen Keungan',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime atque natus alias necessitatibus ducimus minima architecto mollitia pariatur, sapiente sit. Corporis minima quia aliquam asperiores labore molestias magni, fugit consequatur voluptate?',
    },
    {
      image: '/assets/pic-mk.png',
      total_student: 322,
      title: 'Manajemen Keungan',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime atque natus alias necessitatibus ducimus minima architecto mollitia pariatur, sapiente sit. Corporis minima quia aliquam asperiores labore molestias magni, fugit consequatur voluptate?',
    },
  ];
  return (
    <BaseLayout>
      <div className="absolute right-0 w-[calc(100%-300px)] top-[15%] ml-10">
        <div className="w-max-full mt-5 mb-16 pr-10">
          <Breadcrumb items={mkPageBC} />
          <div className="grid grid-cols-3 gap-10 mt-12">
            {mkData.map((mk, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              >
                <Matakuliah
                  image={mk.image}
                  total_student={mk.total_student}
                  title={mk.title}
                  desc={mk.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default MatakuliahPage;
