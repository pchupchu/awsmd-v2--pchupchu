interface TitleProps {
  number: string;
  title: string;
}

const Title = ({ number, title }: TitleProps) => {
  return (
    <h2 className='text-base font-medium capitalize text-[#999999]'>
      {number} — {title}
    </h2>
  );
};

export default Title;
