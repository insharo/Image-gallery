import React from "react";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseWeddingApp from "@/components/WhyChooseWeddingApp";
import CaptureMoment from "@/components/CaptureMoment";
import Testimonials from "@/components/Testimonials";
import GetStarted from "@/components/GetStarted";
import PromoSection from "@/components/PromoSection";
import WeddingForm from "@/components/WeddingForm";
import Image from "next/image";

function Welcome() {
  return (
    <div className="bg-gray-50 relative">
      <Image
        src={"./landingRightFlower.svg"}
        width={200}
        height={200}
        alt="Home"
        className="absolute right-0 top-1/4" // transform -translate-y-1/2
      />
      {/* <Image
        src={"./landingRightFlower2.svg"}
        width={200}
        height={200}
        alt="Home"
        className="absolute right-0 top-1/2" // transform -translate-y-1/2
      /> */}
      <PromoSection />
      <WeddingForm />
      <HowItWorks />
      <WhyChooseWeddingApp />
      <CaptureMoment />
      <Testimonials />
      <GetStarted />
    </div>
  );
}

export default Welcome;
