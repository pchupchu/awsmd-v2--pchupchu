import Banner from '@/components/banner';
import Portfolio from '@/components/portfolio';
import RunningLine from '@/components/running-line';

import About from '../components/about';
import Development from '../components/development';
import Hero from '../components/hero';
import Services from '../components/services';

export default function Home() {
  return (
    <div className='font-primary'>
      <main className=''>
        <div className='p-1'>
          <Hero />
        </div>
        <RunningLine
          initialX='0'
          xDirection='-100%'
          textStyle='text-[#2CA8FE]'
        />
        <Services />
        <About />
        <Development />
        <Portfolio />
        <Banner />
      </main>
      <footer className=''>footer</footer>
    </div>
  );
}
