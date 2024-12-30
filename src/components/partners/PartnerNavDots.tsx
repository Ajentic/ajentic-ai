import { Link } from "react-scroll";

const PartnerNavDots = () => {
  return (
    <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col gap-4">
        <Link
          to="reseller"
          spy={true}
          smooth={true}
          duration={500}
          className="bg-primary/10 hover:bg-primary/20 p-2 rounded-full cursor-pointer"
        >
          1
        </Link>
        <Link
          to="technology"
          spy={true}
          smooth={true}
          duration={500}
          className="bg-primary/10 hover:bg-primary/20 p-2 rounded-full cursor-pointer"
        >
          2
        </Link>
        <Link
          to="cloud"
          spy={true}
          smooth={true}
          duration={500}
          className="bg-primary/10 hover:bg-primary/20 p-2 rounded-full cursor-pointer"
        >
          3
        </Link>
      </div>
    </nav>
  );
};

export default PartnerNavDots;