import Blog from "../../components/Blog/Blog";
import Faq from "../../components/Faq/Faq";
import Features from "../../components/Features/Features";
import Hero from "../../components/Hero/Hero";
import Reviews from "../../components/Reviews/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <Features/>
      <Reviews/>
      <Blog/>
      <Faq/>
    </>
  );
}
