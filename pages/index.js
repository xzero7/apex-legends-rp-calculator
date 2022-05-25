import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Apex Legends RP Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Apex Legends RP Calculator" />
        <hr />
        <p className="description">
          Below is how you can verify and understand how the RP System Works.
        </p>
        <FeedbackForm />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}
