import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import LanguageToggle from '../components/LanguageToggle';
import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Portfolio from '../components/Sections/Portfolio';
import Resume from '../components/Sections/Resume';
import Testimonials from '../components/Sections/Testimonials';
import {useLanguage} from '../contexts/LanguageContext';
import {getData} from '../data';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {language} = useLanguage();
  const data = getData(language);
  const {title, description} = data.homePageMeta;

  return (
    <Page description={description} title={title}>
      <LanguageToggle />
      <Header />
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </Page>
  );
});

export default Home;
