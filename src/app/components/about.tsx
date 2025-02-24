import Partners from './partners';
import Title from './title';

const aboutData = [
  {
    number: '+300',
    text: 'We have successfully completed a total of 300+ projects',
    videoSrc: '/about/volchek-color.mp4',
  },
  {
    number: '100K',
    text: 'We have gathered dozens of reviews from the clients and + 100k reviews from their users',
    videoSrc: '/about/pruzina-color.mp4',
  },
  {
    number: '+10',
    text: 'Years of experience',
    videoSrc: '/about/time-color.mp4',
  },
  {
    number: '+280',
    text: 'Team members all over the world',
    videoSrc: '/about/ball-color.mp4',
  },
];

const About = () => {
  return (
    <section>
      <div className='container mb-[33px]'>
        <div>
          <div className='mb-5 flex flex-col gap-4'>
            <Title number='02' title='About us' />
            <h3 className='text-2xl font-medium leading-none tracking-tight'>
              We Strive to Innovate
            </h3>
          </div>
          <div className='h-4 w-full border-l-[1px] border-r-[1px] border-t-[1px] border-black/20'></div>
        </div>
        <div>
          <div>
            <p className='font-secondary mb-[50px] mt-7 text-base leading-[18px] text-[#838383]'>
              <span className='text-black'>Solid Strategy</span> aligned with
              business needs and robust data analysis are fundamental
              ingredients to&nbsp;extract actionable insights
            </p>
            <div>
              <h4 className='mb-6 text-base font-semibold capitalize leading-[18px] text-[#999796]'>
                Some numbers about us
              </h4>
              <ul className='grid grid-cols-1 gap-y-2'>
                {aboutData.map((data, index) => (
                  <li
                    className='relative h-[180px] overflow-hidden rounded-[30px] bg-[#F2F0F1] px-5 py-3'
                    key={index}>
                    <div className='max-w-40'>
                      <span className='font-secondary mb-1 text-4xl font-bold leading-[44px]'>
                        {data.number}
                      </span>
                      <p className='text-[12px] leading-4 text-[#9B9B9B]'>
                        {data.text}
                      </p>
                    </div>
                    <video
                      className='absolute bottom-0 right-0 z-10 max-w-36 rounded-br-[30px] object-cover'
                      autoPlay
                      playsInline
                      muted
                      loop>
                      <source src={data.videoSrc} type='video/mp4' />
                    </video>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Partners />
    </section>
  );
};

export default About;
