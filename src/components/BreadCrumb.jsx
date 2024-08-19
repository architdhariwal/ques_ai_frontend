import React from "react";
import { Link, useLocation } from "react-router-dom";
import home from './../assets/home.svg'

const Breadcrumb = () => {
  const location = useLocation();
  
  // Split the pathname into an array
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="flex pb-4" >
      <ol className="inline-flex items-center ">
        {/* Home breadcrumb */}
        <li className="inline-flex items-center">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600">
            <img src={home} />
            Home/
          </Link>
        </li>
        {/* Breadcrumbs for other paths */}
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="inline-flex items-center">
              {!isLast ? (
                <>
                  <Link
                    to={to}
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
                  >
                    {value.replaceAll("%20"," ").trim()}/
                  </Link>
                </>
              ) : (
              <span className="text-sm font-medium text-gray-500">
                  {value.replaceAll("%20"," ").trim()}/
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;