import { FC, ReactElement } from "react";
import { useRouter } from "next/router";

import { GlimpseKnowledgeLayoutMain } from "./Main/GlimpseKnowledgeLayoutMain";
import { BreadCrumb } from "@kampus-gratis/components/atoms";

const GlimpseKnowledgeLayoutPage: FC = (): ReactElement => {
  

  const GlimpseKnowledgeBreadcumbs = [
    {
      name: "Home",
      link: "/",
    },
    { name: "Sekilas Ilmu", link: "/sekilas-ilmu" },
   
  ];
  return (
    <section className="min-h-[100vh] bg-neutral-50/60">
      <BreadCrumb items={GlimpseKnowledgeBreadcumbs} />
      <GlimpseKnowledgeLayoutMain />
    </section>
  );
};

export default GlimpseKnowledgeLayoutPage;
