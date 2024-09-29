// components
import Logo from "./Logo";
import Button from "./Button";

const Header = () => {
  return (
    <header className="h-[80px] bg-black/20 backdrop-blur-2xl fixed inset-0 z-10 flex items-center">
      <div className="container mx-auto flex justify-between items-center px-6 xl:px-0">
        {/* logo */}
        <Logo />
        {/* button */}
        <Button btnText="Get started" variant="secondary" />
      </div>
    </header>
  );
};

export default Header;
