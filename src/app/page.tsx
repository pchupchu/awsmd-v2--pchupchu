import Banner from '@/components/banner';
import Blog from '@/components/blog';
import Portfolio from '@/components/portfolio';
import Reviews from '@/components/reviews';
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
        <Blog />
        <Reviews />
      </main>
      <footer>footer</footer>
    </div>
  );
}
