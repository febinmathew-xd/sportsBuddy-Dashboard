import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";

function Home() {
  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <Sidebar />
        <div className="content">
          <Header />
          <Content />
        </div>
      </div>
    </>
  );
}

export default Home;
