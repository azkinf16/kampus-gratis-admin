import { FC, ReactElement } from "react";
import GlimpseKnowledgeLayoutPage from "./GlimpseKnowledgeLayoutPage";
import { BaseLayout } from "apps/kg/components/layouts/base";


export const GlimpseKnowledgeLayout: FC = (): ReactElement => {
  return (
    <BaseLayout>
      <GlimpseKnowledgeLayoutPage />
    </BaseLayout>
  );
};
