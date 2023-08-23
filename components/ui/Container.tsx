interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto w-full px-[20px] max-w-[1420px]">{children}</div>
  );
};

export default Container;
