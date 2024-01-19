const AuthLayout = ({ children }: any) => {
  return(
  <>
    <nav className="bg-red-500 text-white">This is auth navbar</nav>
    <div>{children}</div>
  </>
  );
};

export default AuthLayout;
