import About from './components/about';
import Hero from './components/hero';
import Services from './components/services';

export default function Home() {
  return (
    <div className='font-primary'>
      <main className=''>
        <div className='p-1'>
          <Hero />
        </div>
        <Services />
        <About />
      </main>
      <footer className=''>footer</footer>
    </div>
  );
}
