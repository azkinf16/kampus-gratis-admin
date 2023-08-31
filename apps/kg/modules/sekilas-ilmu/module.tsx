import FooterCredit from "apps/kg/components/footer/footer-credit/footer-credit";
import { BaseLayout } from "../../../kg/components/layouts/base";
import { GlimpseKnowledgePage } from "../../../kg/components/sekilas-ilmu/GlimpseKnowledgePage";
import { FC, ReactElement } from "react";
import { useGetArticle } from "apps/kg/hooks/article/hook";



export const GlimpseKnowledgeModule: FC = (): ReactElement => {
  const { data } = useGetArticle();
  console.log(data);
  

  return (
    <BaseLayout>
      <GlimpseKnowledgePage />
      <FooterCredit/>
    </BaseLayout>
  );
};
