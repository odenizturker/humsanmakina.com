import React from "react";
import Seperator, { HalfDivider } from "./components/HalfDivider";
import BlockQuote from "./components/BlockQuote";
import PrimaryProductPreview from "./components/PrimaryProductPreview";
import SecondaryProductPreview from "./components/SecondaryProductPreview";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ImageSwiper from "./components/ImageSwiper";

export default function Home() {
  return (
  <main>
    <div>
      <ImageSwiper/>
      <div className="space-y-11 my-24">
        <HalfDivider/>
        <BlockQuote/>
        <HalfDivider/>
      </div>
      <div className="space-y-10 my-24">
        <PrimaryProductPreview
        title="Ahır İçi Ekipmanlar"
        description="Ahır içi ekipmanlarımız, hayvan refahını en üst düzeye çıkarmak için tasarlandı. Yüksek dayanıklı malzemeler ve ergonomik tasarım sayesinde uzun ömürlü ve kullanışlı çözümler sunuyoruz. Verimliliği ve hijyeni önceliklendirerek, modern çiftliklerin ihtiyaçlarına uygun çözümler geliştiriyoruz."
        imageSrc="/ahir_ici.png"
        />
        <SecondaryProductPreview
        title="İklimlendirme"
        description="Çiftlik ve endüstriyel alanlar için özelleştirilebilir iklimlendirme çözümleri sunuyoruz. Hümsan Makine olarak enerji verimliliğine ve sürdürülebilirliğe öncelik veriyoruz. Sistemlerimiz, maksimum performansla minimum enerji tüketimini bir araya getirerek, hem çevre dostu hem de maliyet etkili çözümler sağlar."
        imageSrc="/iklimlendirme.png"
        />
        <PrimaryProductPreview
        title="Römorklular"
        description="Tarım ve hayvancılık için özel olarak tasarladığımız römorklu makineler, güçlü yapısı ve çok yönlülüğüyle öne çıkıyor. Taşıma kapasitesini ve verimliliği artıracak şekilde dizayn edilen bu makineler, en zor şartlarda bile üretkenliğinizi sürdürmenize yardımcı olur. Hümsan Makine, sahada güvenebileceğiniz çözümler sunar."
        imageSrc="/romorklular.png"
        />
      </div>
      <div id="contact">
      <Contact/>
      <Footer/>
      </div>
    </div>
    
  </main>
);
}
