import FooterCredit from "apps/kg/components/footer/footer-credit/footer-credit";
import { BaseLayout } from "../../../components/layouts/base";
import { DetailSekilasIlmuModule } from "../../../modules/sekilas-ilmu/detail/module";
import { NextPage } from "next";
import { ReactElement } from "react";


const SekilasIlmuDetails: NextPage = (): ReactElement => {
  return(
    <BaseLayout>
  <DetailSekilasIlmuModule/>
  <FooterCredit/>
  </BaseLayout>
  )
};

export default SekilasIlmuDetails;
