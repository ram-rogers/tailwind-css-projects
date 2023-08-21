import { Nav } from "./Components/Nav";
import CustomerReview from "./sections/CustomerReview";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { PopularProducts } from "./sections/PopularProducts";
import Services from "./sections/Services";
import { SpecialOffers } from "./sections/SpecialOffers";
import { Subscribe } from "./sections/Subscribe";
import { SuperQuality } from "./sections/SuperQuality";

const App = () => {
  return (
    <main className="relative">
      <Nav />

      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>

      <section className="padding">
        <PopularProducts />
      </section>

      <section className="padding">
        <SuperQuality />
      </section>

      <section className="padding-x py-10 ">
        <Services />
      </section>

      <section className="padding">
        <SpecialOffers />
      </section>

      <section className="padding bg-pale-blue">
        <CustomerReview />
      </section>

      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>

      <section className="text-white bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
