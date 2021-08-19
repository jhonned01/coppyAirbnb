import Head from "next/head";
import MediumCard from "../components/ MediumCard";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import SmallCard from "../components/SmallCard";
function index({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />
      {/* banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16  ">
        <section className="pt-6 ">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* pull some data from a server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item, key) => (
              <SmallCard
                img={item.img}
                distance={item.distance}
                location={item.location}
                key={key}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live AnyWehre</h2>
          <h2>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -m-3">
              {cardsData?.map((item) => (
                <MediumCard key={item.img} img={item.img} title={item.title} />
              ))}
            </div>
          </h2>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="THe Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

export default index;

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    }, // will be passed to the page component as props
  };
}
