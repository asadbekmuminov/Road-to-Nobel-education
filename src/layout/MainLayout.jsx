import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
function MainLayout() {
  return (
    <>
      <Header />
      <main className="align-element mb-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
