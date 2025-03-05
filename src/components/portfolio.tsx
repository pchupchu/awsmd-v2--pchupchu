import Project from './project';
import Title from './title';

const projects = [
  {
    id: 1,
    title: 'SpinApp',
    description:
      'Web Development for Web3 Gaming Platform with community-driven assets, decentralized economy and gamified experience',
    image: '/projects/spinapp.png',
  },
  {
    id: 2,
    title: 'Bottle-Haus',
    description:
      'Website Development for Bottle-Haus - Leading Online Retailer of Fine Alcoholic Spirits',
    image: '/projects/bottle-haus.png',
  },
  {
    id: 3,
    title: 'UI UX Design And Mobile Development for Fintech App',
    description:
      'In Syfter App,we made it easy for people to invest into crypto and stock market assets with its user friendly interface and interactive swiping experience',
    image: '/projects/syfter.jpg',
  },
  {
    id: 4,
    title: 'Mobile App Design and Development for NFT Marketplace',
    description:
      'We created slick design for nft app that brings nft market right into users smartphone allowing them to trade tokens and share with their friends',
    image: '/projects/vvs.jpg',
  },
  {
    id: 5,
    title: 'Modern Design And Development of Ecommerce App',
    description:
      'Retlify - is an ecommerce app that broadens limits of users and sellers by offering them interactive and innovative shopping experience',
    image: '/projects/ritilo.jpg',
  },
];

const Portfolio = () => {
  return (
    <section className='container flex flex-col items-center gap-[45px] pb-[55px] pt-[100px]'>
      <div className='flex flex-col gap-4'>
        <Title number='03' title='Our Portfolio' />
        <h3 className='font-secondary text-[33px] leading-[1.12] tracking-tight'>
          We don&apos;t do cookie-cutter solution
        </h3>
      </div>
      <ul className='mb-16 flex flex-col gap-[30px]'>
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </ul>
      <a
        className='flex items-center gap-3 rounded-[40px] bg-[#242424] p-[15px] pr-8 text-base font-medium capitalize leading-tight tracking-tight text-white'
        href='https://dribbble.com/awsmd'
        target='_blank'
        rel='noreferrer'>
        <p>Check full portfolio</p>
        <span className='h-1 w-1 rounded-full bg-white'></span>
      </a>
    </section>
  );
};
export default Portfolio;
