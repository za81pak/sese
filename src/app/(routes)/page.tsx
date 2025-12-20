import HeroSection from "@/widgets/hero/ui/section.ui";
import CardSection from "@/widgets/card/ui/section.ui";
import CalcSection from "@/widgets/calc/ui/section.ui";
import StockSection from "@/widgets/stock/ui/section.ui";
import PromotionSection from "@/widgets/ promotion/ui/section.ui";
import DoctorsSection from "@/widgets/doctors/ui/section.ui";
import AdvantagesSection from "@/widgets/Advantages/ui/section.ui";
import FaqSection from "@/widgets/faq/ui/section.ui";
import ConSection from "@/widgets/contacts/ui/section.ui";
import Footer from "@/widgets/footer/ui/footer"


export default function Home() {
  return (
      <div>
        <HeroSection/>
          <CardSection/>
          <CalcSection/>
          <StockSection/>
          <PromotionSection/>
          <DoctorsSection/>
          <AdvantagesSection/>
          <FaqSection/>
          <ConSection/>
          <Footer/>
      </div>
  );
}