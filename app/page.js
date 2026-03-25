import Hero from "@/components/Hero";
import FixTeeth from "@/app/fix-teeth/page";
import RCT from "@/app/rct/page";
import Capping from "@/app/capping/page";
import XRay from "@/app/xray/page";
import Pyorrhea from "@/app/pyorrhea/page";
import Braces from "@/app/braces/page";
import Contact from "@/app/contact/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <FixTeeth />
      <RCT />
      <Capping />
      <XRay />
      <Pyorrhea />
      <Braces />
      <Contact />
    </main>
  );
}