import { FC, ReactElement } from "react";
import { GlimpseKnowledgePage } from "./component/GlimpseKnowledgePage";
import { BaseLayout } from "apps/kg/components/layouts/base";


export const GlimpseKnowledgeModule: FC = (): ReactElement => {
  return (
    <BaseLayout>
      <GlimpseKnowledgePage />
    </BaseLayout>
  );
};
