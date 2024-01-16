import { useMemo, useState } from "react";

import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
import moment from "moment";

import Footer from "partials/Footer";

import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";
import Badge from "components/Badge";
import Button from "components/Button";
import Checkbox from "components/form/Checkbox";
import Dropdown from "components/Dropdown";
import Pagination from "components/Pagination";

import blogPosts from "data/blogPosts";

const BlogList = () => {
  const [selectedItems, setSelectedItems] = useState([1]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const data = blogPosts;

  const currentPageData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize, data]);

  const handleToggleSelection = (id) => {
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

  const toggleSelectAll = () => {
    if (selectedItems.length) {
      setSelectedItems([]);
    } else {
      const newSelectedItems = currentPageData.map((item) => {
        return item.id;
      });

      setSelectedItems(newSelectedItems);
    }
  };

  const getBadge = (status) => {
    switch (status) {
      case "Draft":
        return (
          <Badge color="secondary" outlined className="uppercase">
            Draft
          </Badge>
        );

      case "Published":
        return (
          <Badge color="success" outlined className="uppercase">
            Published
          </Badge>
        );

      default:
    }
  };

  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <div className="lg:flex items-start">
        <Breadcrumb title="Blog">
          <BreadcrumbItem link="#no-link">Pages</BreadcrumbItem>
          <BreadcrumbItem link="#no-link">Blog</BreadcrumbItem>
          <BreadcrumbItem>List</BreadcrumbItem>
        </Breadcrumb>

        <div className="flex flex-wrap gap-2 items-center ltr:ml-auto rtl:mr-auto mb-5">
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
      </div>

      {/* List */}
      <div className="card p-5">
        <div className="overflow-x-auto">
          <table className="table table-auto table_hoverable w-full">
            <thead>
              <tr>
                <th className="w-px">
                  <Checkbox
                    checked={selectedItems.length}
                    partial={selectedItems.length < currentPageData.length}
                    onChange={toggleSelectAll}
                  />
                </th>
                <th className="ltr:text-left rtl:text-right uppercase">
                  Title
                </th>
                <th className="text-center uppercase">Views</th>
                <th className="text-center uppercase">Date</th>
                <th className="text-center uppercase">Pulbished</th>
                <th className="uppercase"></th>
              </tr>
            </thead>
            <tbody>
              {currentPageData.map((item) => {
                return (
                  <tr
                    key={item.id}
                    className={classNames({
                      row_selected: selectedItems.includes(item.id),
                    })}
                  >
                    <td>
                      <Checkbox
                        checked={selectedItems.includes(item.id)}
                        onChange={() => handleToggleSelection(item.id)}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td className="text-center">{item.views}</td>
                    <td className="text-center">
                      {moment.unix(item.createdDateTime).format("LL")}
                    </td>
                    <td className="text-center">{getBadge(item.status)}</td>
                    <td className="ltr:text-right rtl:text-left whitespace-nowrap">
                      <div className="inline-flex ltr:ml-auto rtl:mr-auto">
                        <a
                          href="#no-link"
                          className="btn btn-icon btn_outlined btn_secondary"
                        >
                          <span className="la la-pen-fancy"></span>
                        </a>
                        <a
                          href="#no-link"
                          className="btn btn-icon btn_outlined btn_danger ltr:ml-2 rtl:mr-2"
                        >
                          <span className="la la-trash-alt"></span>
                        </a>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
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

export default BlogList;
