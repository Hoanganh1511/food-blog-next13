interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto w-full px-[20px] sm:max-w-[1420px] xl:max-w-[1820px]">
      {children}
    </div>
  );
};

export default Container;
