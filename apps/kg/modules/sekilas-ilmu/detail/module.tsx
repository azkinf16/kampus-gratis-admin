import { FC, ReactElement } from "react";
import { BreadCrumb } from "@kampus-gratis/components/atoms";
import { RelatedGlimpseKnowledgeCard } from "../../../components/sekilas-ilmu/Detail/RelatedGlimpseKnowledgeCard";
import Image from "next/image";



export const DetailSekilasIlmuModule: FC = (): ReactElement => {
    const GlimpseKnowledgeBreadcumbs = [
        {
          name: "Home",
          link: "/",
        },
        { name: "Sekilas Ilmu", link: "/sekilas-ilmu" },
       
      ];
  return (
    <section className="min-h-[100vh] bg-neutral-50/60 mt-3">
    <BreadCrumb items={GlimpseKnowledgeBreadcumbs} />
    <main className="grid grid-cols-3 px-8 md:px-14 lg:px-16 lg:gap-x-24">
      <section className="col-span-3 lg:col-span-2">
        <h1 className="font-bold text-xl md:text-3xl">
        Masih sering gugup saat public speaking? Terapin 6 tips Ampuh ini!
        </h1>
        <p className={`text[12px] text-center bg-[#E5E5E5] font-semibold px-3 my-4 md:my-0 md:mt-4  w-[100px] rounded-md`}>#softskills</p>
        <div>
          <div className="block md:flex justify-between md:py-6">
            <p>Megawanto - Sel, 28 Feb 2023 | 15:21</p>
            <div className="flex justify-end item-center py-4 md:py-0">
                <div className="flex gap-1 pr-2">
                    <Image src={"/icons/share.svg"} width={20} height={20} alt="Detail Article Icon"/>
                <p className="font-semibold text-blue-base">Share</p>
                </div>
                <div className="flex gap-1">
                    <Image src={"/icons/flag-report.svg"} width={20} height={20} alt="Detail Article Icon"/>
                <p className="font-semibold text-red-base">Laporkan</p>
                </div>
            </div>
            </div>
            <div className="w-full rounded-lg flex justify-center">
              <Image src={"/images/article/img1.png"} width={600} height={400} alt="Detail Article Image" className="object-fill"/>
            </div>
            <p className="py-4">
            Public speaking atau berbicara di depan umum merupakan keterampilan yang sangat penting dalam dunia kerja maupun kehidupan sosial. Bagi sebagian orang, berbicara di depan umum dapat menjadi momok yang menakutkan dan menimbulkan rasa cemas yang berlebihan. Namun, dengan beberapa tips dan latihan yang tepat, setiap orang dapat meningkatkan keterampilan public speaking mereka.
            </p>
        </div>
      </section>
      <section className="col-span-3 lg:col-span-1 mt-6">
        <h1 className="font-bold">Lainnya dari Sekilas Ilmu</h1>
        <span className="h-[4px] w-24 bg-[#0B568D] block rounded-md mb-2"></span>
        <div className="h-[500px] overflow-y-scroll">
        {[...Array(10)].map((item, index) => {
          return <RelatedGlimpseKnowledgeCard key={index} />;
        })}
        </div>
      </section>
    </main>
  </section>
  );
};
