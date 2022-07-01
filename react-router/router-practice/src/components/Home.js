import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className='section'>
      <h2>home page</h2>
      {/* <Link> is used to map paths within the application */}
      <Link to="/about" className="btn">
        About
      </Link>

      {/* <a href="google.com"></a>  this is used for visiting paths outside the application*/}
    </section>
  );
};
export default Home;
