import Hero from './components/hero';

export default function Home() {
  return (
    <div className='font-primary'>
      <main className=''>
        <div className='p-1'>
          <Hero />
        </div>
      </main>
      <footer className=''>footer</footer>
    </div>
  );
}
