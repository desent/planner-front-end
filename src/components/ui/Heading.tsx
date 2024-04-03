type HadingType = {
  title: string;
};

export function Heading({ title }: HadingType) {
  return (
    <div>
      <h1 className="text-3xl font-medium">{title}</h1>
      <div className="bg-border my-3 h-0.5 w-full" />
    </div>
  );
}
