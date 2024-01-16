import { useMemo, useState } from "react";

import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";

import Footer from "partials/Footer";

import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";
import Button from "components/Button";
import { CardRow } from "components/Card";
import Dropdown from "components/Dropdown";
import Pagination from "components/Pagination";

import blogPosts from "data/blogPosts";

const BlogListCardRows = () => {
  const [selectedItems, setSelectedItems] = useState([1]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const data = blogPosts;

  const currentPageData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize, data]);

  const handleToggleSection = (id) => {
    let newSelectedItems = selectedItems;

    if (newSelectedItems.includes(id)) {
      const index = newSelectedItems.indexOf(id);
      newSelectedItems.splice(index, 1);

      newSelectedItems = [...newSelectedItems];
    } else {
      newSelectedItems = [...newSelectedItems, id];
    }

    setSelectedItems(newSelectedItems);
  };

  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <section className="breadcrumb lg:flex items-start">
        <Breadcrumb title="Blog">
          <BreadcrumbItem link="#no-link">Pages</BreadcrumbItem>
          <BreadcrumbItem link="#no-link">Blog</BreadcrumbItem>
          <BreadcrumbItem>List - Card Rows</BreadcrumbItem>
        </Breadcrumb>

        <div className="flex flex-wrap gap-2 items-center ltr:ml-auto rtl:mr-auto mt-5 lg:mt-0">
          {/* Layout */}
          <div className="flex gap-x-2">
            <NavLink
              to="/blog-list"
              end
              className={({ isActive }) =>
                classNames(
                  "btn",
                  "btn-icon",
                  "btn-icon_large",
                  "btn_outlined",
                  {
                    btn_primary: isActive,
                    btn_secondary: !isActive,
                  }
                )
              }
            >
              <span className="la la-bars"></span>
            </NavLink>
            <NavLink
              to="/blog-list-card-rows"
              end
              className={({ isActive }) =>
                classNames(
                  "btn",
                  "btn-icon",
                  "btn-icon_large",
                  "btn_outlined",
                  {
                    btn_primary: isActive,
                    btn_secondary: !isActive,
                  }
                )
              }
            >
              <span className="la la-list"></span>
            </NavLink>
            <NavLink
              to="/blog-list-card-columns"
              end
              className={({ isActive }) =>
                classNames(
                  "btn",
                  "btn-icon",
                  "btn-icon_large",
                  "btn_outlined",
                  {
                    btn_primary: isActive,
                    btn_secondary: !isActive,
                  }
                )
              }
            >
              <span className="la la-th-large"></span>
            </NavLink>
          </div>

          {/* Search */}
          <form className="flex flex-auto">
            <label className="form-control-addon-within rounded-full">
              <input
                className="form-control border-none"
                placeholder="Search"
              />
              <button className="text-gray-300 dark:text-gray-700 text-xl leading-none la la-search ltr:mr-4 rtl:ml-4"></button>
            </label>
          </form>

          <div className="flex gap-x-2">
            {/* Sort By */}
            <Dropdown
              content={
                <div className="dropdown-menu">
                  <a href="#no-link">Ascending</a>
                  <a href="#no-link">Descending</a>
                </div>
              }
            >
              <Button color="secondary" outlined className="uppercase">
                Sort By
                <span className="ltr:ml-3 rtl:mr-3 la la-caret-down text-xl leading-none"></span>
              </Button>
            </Dropdown>

            {/* Add New */}
            <Link to="/blog-add" className="btn btn_primary uppercase">
              Add New
            </Link>
          </div>
        </div>
      </section>

      {/* List */}
      <div className="flex flex-col gap-y-5">
        {currentPageData.map((item) => {
          return (
            <CardRow
              key={item.id}
              id={item.id}
              title={item.title}
              overview={item.overview}
              thumbnail={require("assets/images/" + item.thumbnail)}
              views={item.views}
              status={item.status}
              dateTime={item.createdDateTime}
              selected={selectedItems.includes(item.id)}
              onToggleSelection={handleToggleSection}
            />
          );
        })}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page)}
        onPageSizeChange={(size) => setPageSize(size)}
        className="mt-5"
      />

      {/* Footer Bar */}
      {selectedItems.length ? (
        <div className="footer-bar">
          <div className="flex items-center uppercase">
            <span className="badge badge_primary ltr:mr-2 rtl:ml-2">
              {selectedItems.length}
            </span>
            Post Selected
          </div>
          <div className="ltr:ml-auto rtl:mr-auto">
            <button className="btn btn_danger uppercase">
              <span className="la la-trash-alt text-xl leading-none ltr:mr-2 rtl:ml-2"></span>
              Remove
            </button>
          </div>
        </div>
      ) : null}

      <Footer />
    </main>
  );
};

export default BlogListCardRows;
