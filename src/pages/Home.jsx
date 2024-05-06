import Header from "../components/Header"
import Banner from "../components/Banner"
import FeatureItem from "../components/FeatureItem"
import Footer from "../components/Footer"
import Chat from "../assets/icon-chat.webp"
import Money from "../assets/icon-money.webp"
import Security from "../assets/icon-security.webp"

export default function Home () {
  return (
    <main>
      <Header />
      <Banner />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeatureItem
          logo={Chat}
          altText="Chat-Icon"
          title="You are our #1 priority"
          description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <FeatureItem
          logo={Money}
          altText="Money"
          title="More savings means higher rates"
          description="The more you save with us, the higher your interest rate will be!"
        />
        <FeatureItem
          logo={Security}
          altText="Security"
          title="Security you can trust"
          description="We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>
      <Footer/>
    </main>
  );
}

