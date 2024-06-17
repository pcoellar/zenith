import Header from "../ui/landing/header";
import TopNav from "../ui/landing/topnav";
import Search from "../ui/landing/search";
import Topics from "../ui/landing/topics";
import HowItWorks from "../ui/landing/howitworks";
import Explore from "../ui/landing/explore";
import Statistics from "../ui/landing/statistics";
import Blogs from "../ui/landing/blogs";
import Contact from "../ui/landing/contact";
import Footer from "../ui/landing/footer";
import Reviews from "../ui/landing/reviews";

export default function Page({
  searchParams,
}: {
  searchParams?: {
    category?: string;
    location?: string;
  };
}) {
  const category = searchParams?.category || '';
  const location = searchParams?.location || '';
  return (
    <main>
      <Header />
      <TopNav />
      <Search />
      <Topics category={category} location={location}/>
      <HowItWorks />
      <Explore category={category} location={location}/>
      <Reviews category={category} location={location}/>
      <Statistics category={category} location={location}/>
      <Blogs category={category} location={location}/>
      <Contact />
      <Footer />
    </main>
  );
}
