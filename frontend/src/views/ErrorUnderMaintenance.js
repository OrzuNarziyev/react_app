import { Link } from "react-router-dom";

const ErrorUnderMaintenance = () => {
  return (
    <>
      <section className="top-bar">
        {/* Brand */}
        <span className="brand">Yeti</span>
      </section>

      <div className="container flex items-center justify-center mt-20 py-10">
        <div className="w-full md:w-1/2 xl:w-1/3">
          <div className="mx-5 md:mx-10 text-center uppercase">
            <h1 className="text-9xl font-bold">
              <span className="la la-cog"></span>
            </h1>
            <h2 className="text-primary mt-5">We Will Be Back Soon</h2>
            <h5 className="mt-2">
              We are undergoing scheduled maintenance. we should be back
              shortly.
            </h5>
            <Link to="/" className="btn btn_primary mt-5">
              Retry
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorUnderMaintenance;
