// import "../../assets/User/css/style.css";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
// import "../../css/style.css";

type Props = {};

const HomeTemplate = (props: Props) => {
  return (
    <div className="user">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeTemplate;
