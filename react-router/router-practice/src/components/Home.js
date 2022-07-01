import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <section className='section'>
      <h2>home page</h2>
      {/* <Link> is used to map paths within the application */}
      {/* using Outlet makes home page to be shared in all the nested routes of home route */}
      <Outlet /> 
      {/* <a href="google.com"></a>  this is used for visiting paths outside the application*/}
    </section>
  );
};
export default Home;
