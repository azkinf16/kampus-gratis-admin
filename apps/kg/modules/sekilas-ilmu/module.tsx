import FooterCredit from "apps/kg/components/footer/footer-credit/footer-credit";
import { BaseLayout } from "../../../kg/components/layouts/base";
import { GlimpseKnowledgePage } from "../../../kg/components/sekilas-ilmu/GlimpseKnowledgePage";
import { FC, ReactElement } from "react";



export const GlimpseKnowledgeModule: FC = (): ReactElement => {
  return (
    <BaseLayout>
      <GlimpseKnowledgePage />
      <FooterCredit/>
    </BaseLayout>
  );
};
