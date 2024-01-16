import { useMemo, useState } from "react";

import Footer from "partials/Footer";

import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";
import Button from "components/Button";
import { CardList } from "components/Card";
import Dropdown from "components/Dropdown";
import Pagination from "components/Pagination";

import files from "data/files";

const ApplicationsMediaLibrary = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);

  const data = files;

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
      <div className="lg:flex items-start">
        <Breadcrumb title="Media Library">
          <BreadcrumbItem link="#no-link">Applications</BreadcrumbItem>
          <BreadcrumbItem>Media Library</BreadcrumbItem>
        </Breadcrumb>

        <div className="flex flex-wrap gap-2 items-center ltr:ml-auto rtl:mr-auto mb-5">
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
        </div>
      </div>

      {/* Actions */}
      <div className="card p-4 flex flex-wrap gap-2">
        <Button className="uppercase">
          <span className="la la-sync text-xl leading-none ltr:mr-2 rtl:ml-2"></span>
          Refresh
        </Button>
        <div className="flex flex-wrap gap-2 ltr:ml-auto rtl:mr-auto">
          <Button className="uppercase">
            <span className="la la-upload text-xl leading-none ltr:mr-2 rtl:ml-2"></span>
            Upload
          </Button>
          <Button className="uppercase">
            <span className="la la-folder-plus text-xl leading-none ltr:mr-2 rtl:ml-2"></span>
            New Folder
          </Button>
          <Button className="uppercase">
            <span className="la la-random text-xl leading-none ltr:mr-2 rtl:ml-2"></span>
            Move
          </Button>
          <Button className="uppercase">
            <span className="la la-redo-alt text-xl leading-none ltr:mr-2 rtl:ml-2"></span>
            Rename
          </Button>
          <Button color="danger" className="uppercase">
            <span className="la la-trash text-xl leading-none ltr:mr-2 rtl:ml-2"></span>
            Remove
          </Button>
        </div>
      </div>

      {/* Breadcrumb - Media Library */}
      <Breadcrumb className="breadcrumb_alt mt-5 mb-0 p-4">
        <BreadcrumbItem link="#no-link">
          <span className="la la-folder text-xl ltr:mr-2 rtl:ml-2"></span>
          Root
        </BreadcrumbItem>
        <BreadcrumbItem>Folder</BreadcrumbItem>
      </Breadcrumb>

      <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
        <div className="lg:col-span-2 xl:col-span-3">
          {/* Items */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {currentPageData.map((item) => {
              return (
                <CardList
                  key={item.id}
                  id={item.id}
                  title={item.name}
                  thumbnail={
                    item.thumbnail
                      ? require("assets/images/" + item.thumbnail)
                      : null
                  }
                  type={item.type}
                  dateTime={item.updatedDateTime}
                  selected={selectedItems.includes(item.id)}
                  onToggleSelection={handleToggleSection}
                />
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-y-5 lg:col-span-1">
          {/* Preview */}
          <div className="card card_column">
            <div className="image">
              <div className="aspect-w-4 aspect-h-3">
                <img src={require("assets/images/ingredients.jpg")} alt="" />
              </div>
            </div>
            <div className="body">
              <h6 className="uppercase">Name</h6>
              <p>filename.ext</p>
              <h6 className="mt-4 uppercase">Public URL</h6>
              <p>
                <a href="#no-link" target="_blank">
                  filename.ext
                </a>
              </p>
              <h6 className="mt-4 uppercase">Type</h6>
              <p>image/jpg</p>
              <h6 className="mt-4 uppercase">Last Modified</h6>
              <p>December 15, 2019</p>
              <h6 className="mt-4 uppercase">Size</h6>
              <p>100 KB</p>
            </div>
          </div>

          {/* Dropzone */}
          <div className="card p-5">
            <h3>Dropzone</h3>
            <div className="dropzone mt-5">
              <h3>Drop files here to upload</h3>
            </div>
          </div>
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

      <Footer />
    </main>
  );
};

export default ApplicationsMediaLibrary;
