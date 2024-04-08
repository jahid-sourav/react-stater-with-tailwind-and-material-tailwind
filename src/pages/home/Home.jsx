import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <div className="template-container py-6">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h2>Home Page</h2>
    </div>
  );
}

export default Home;
