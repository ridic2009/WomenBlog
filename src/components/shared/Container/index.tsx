interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className,
}: ContainerProps): JSX.Element {
  return (
    <div className={className ? `container ${className}` : "container"}>
      {children}
    </div>
  );
}