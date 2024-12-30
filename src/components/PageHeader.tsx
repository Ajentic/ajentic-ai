interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
        {title}
      </h1>
      {subtitle && (
        <h2 className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </h2>
      )}
    </div>
  );
};

export default PageHeader;