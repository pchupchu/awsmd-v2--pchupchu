import Image from 'next/image';

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
}

const BlogCard = ({ title, description, image }: BlogCardProps) => {
  return (
    <a href='https://dribbble.com/awsmd' target='_blank' rel='noreferrer'>
      <div className='relative mb-[25px] min-h-[240px] w-full'>
        <Image
          className='rounded-[12px] object-cover'
          src={image}
          alt={title}
          fill
        />
      </div>
      <div>
        <h3 className='mb-2 font-secondary text-xl font-semibold leading-tight tracking-[-0.01em]'>
          {title}
        </h3>
        <p className='line-clamp-3 text-base leading-[1.2] text-[#8d8d8d] text-opacity-50'>
          {description}
        </p>
      </div>
    </a>
  );
};
export default BlogCard;
