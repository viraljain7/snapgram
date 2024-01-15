import { Outlet, Navigate } from "react-router-dom";
const AuthLayout = () => {
  const isAuthenicated = false;
  return (
    <>
      {isAuthenicated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>
          <img
            src="/assets/images/side-img.svg"
            alt="logo"
            className="hidden lg:block w-1/2 h-screen object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
