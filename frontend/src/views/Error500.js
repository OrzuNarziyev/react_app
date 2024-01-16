import { Link } from "react-router-dom";

const Error500 = () => {
  return (
    <>
      <section className="top-bar">
        {/* Brand */}
        <span className="brand">Yeti</span>
      </section>

      <div className="container flex items-center justify-center mt-20 py-10">
        <div className="w-full md:w-1/2 xl:w-1/3">
          <div className="mx-5 md:mx-10 text-center uppercase">
            <h1 className="text-9xl font-bold">500</h1>
            <h2 className="text-primary mt-5">Something Went Wrong</h2>
            <h5 className="mt-2">Sorry, it’s me, not you</h5>
            <Link to="/" className="btn btn_outlined btn_primary mt-5">
              Go Back
            </Link>
            <Link to="/" className="btn btn_primary mt-5 ltr:ml-2 rtl:mr-2">
              Retry
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error500;
