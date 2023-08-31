import { BaseLayout } from "../../../../kg/components/layouts/base";
import FooterCredit from "../../../components/footer/footer-credit/footer-credit";
import { FC, ReactElement } from "react";
import { GlimpseKnowledgePage } from "../../../components/sekilas-ilmu/GlimpseKnowledgePage";



export const FavoriteArticleModule: FC = (): ReactElement => {
  return (
    <BaseLayout>
      <GlimpseKnowledgePage />
      <FooterCredit/>
    </BaseLayout>
  );
};
