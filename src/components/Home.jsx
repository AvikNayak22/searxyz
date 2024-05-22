import Logo from "../assets/searxyz.svg";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="h-[100vh] flex flex-col">
      <HomeHeader />
      <main className="grow flex justify-center">
        <div className="w-full px-5 flex flex-col items-center mt-16">
          <img className="w-[172px] md:w-[272px] mb-8" src={Logo} alt="Logo" />
          <SearchInput />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
