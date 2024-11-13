import HeaderLogo from "./HeaderLogo";

export default function Header() {
  return (
    <header className="border-b border border-lightGray py-9">
      <div className="container mx-auto">
        <HeaderLogo />
      </div>
    </header>
  );
}
