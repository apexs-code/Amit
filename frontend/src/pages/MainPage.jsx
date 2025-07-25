import Header from "../components/Header";
import Hero from "../components/Hero";
import Collaboration from "../components/AboutUs";
import Pricing from "../components/Pricing";
import Roadmap from "../components/Roadmap";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ButtonGradient from "../assets/svg/ButtonGradient";
import Testimonials from "../components/Textimonials";
import ProductPage from "../components/ProductPage";
import ContactPage from "../components/ContactPage";

const DashboardPage = () => {
	return (
		 <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Collaboration />
        <ProductPage />
        <Testimonials />
        <Pricing />
        <Roadmap />
        <ContactPage />
        <Footer />
      </div>
      <ScrollToTop />
      <ButtonGradient />
    </>
	);
};
export default DashboardPage;