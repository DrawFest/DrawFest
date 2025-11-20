import { FooterTime } from "@/sections/Footer/components/FooterTime";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterDonation } from "@/sections/Footer/components/FooterDonation";

export const FooterContent = () => {
  return (
    <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
      <FooterTime />
      <FooterLinks />
      <FooterDonation />
    </div>
  );
};
