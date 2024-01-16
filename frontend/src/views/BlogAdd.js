import Footer from "partials/Footer";

import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";
import Button from "components/Button";
import Checkbox from "components/form/Checkbox";
import CustomSelect from "components/form/CustomSelect";
import Input from "components/form/Input";
import Label from "components/form/Label";
import Textarea from "components/form/Textarea";
import Switch from "components/form/Switch";
import Tabs, {
  TabsContent,
  TabsContentItem,
  TabsNavigation,
  TabsNavigationItem,
} from "components/Tabs";

const BlogAdd = () => {
  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <Breadcrumb title="Blog">
        <BreadcrumbItem link="#no-link">Pages</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Blog</BreadcrumbItem>
        <BreadcrumbItem>Add Post</BreadcrumbItem>
      </Breadcrumb>

      <div className="grid lg:grid-cols-4 gap-5">
        {/* Content */}
        <div className="lg:col-span-2 xl:col-span-3">
          <div className="card p-5">
            <div className="mb-5 xl:w-1/2">
              <Label className="block mb-2" htmlFor="title">
                Title
              </Label>
              <Input id="title" />
            </div>
            <div className="mb-5 xl:w-1/2">
              <Label className="block mb-2" htmlFor="slug">
                Slug
              </Label>
              <Input id="slug" />
            </div>
            <div className="mb-5">
              <Label className="block mb-2" htmlFor="content">
                Content
              </Label>
              <Textarea id="content" rows="16" />
            </div>
            <div className="xl:w-1/2">
              <Label className="block mb-2" htmlFor="excerpt">
                Content
              </Label>
              <Textarea id="excerpt" rows="8" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-5 lg:col-span-2 xl:col-span-1">
          {/* Publish */}
          <div className="card p-5 flex flex-col gap-y-5">
            <h3>Publish</h3>
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center">
                <div className="w-1/4">
                  <Label>Status</Label>
                </div>
                <div className="w-3/4 ml-2">
                  <CustomSelect>
                    <option>Draft</option>
                    <option>Option</option>
                  </CustomSelect>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-1/4">
                  <Label>Visibility</Label>
                </div>
                <div className="w-3/4 ml-2">
                  <CustomSelect>
                    <option>Public</option>
                    <option>Option</option>
                  </CustomSelect>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-1/4">
                  <Label>Publish</Label>
                </div>
                <div className="w-3/4 ml-2">
                  <Switch label="Immediately" />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              <Button className="uppercase">Publish</Button>
              <Button color="secondary" outlined className="uppercase">
                Save Draft
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="card p-5">
            <h3>Categories</h3>
            <Tabs activeIndex={1} className="mt-5">
              <TabsNavigation>
                <TabsNavigationItem index={1} className="uppercase">
                  Most Used
                </TabsNavigationItem>
                <TabsNavigationItem index={2} className="uppercase">
                  All Categories
                </TabsNavigationItem>
              </TabsNavigation>
              <TabsContent>
                <TabsContentItem index={1} className="flex flex-col gap-y-2">
                  <Checkbox label="Uncategorized" defaultChecked />
                  <Checkbox label="Recent" />
                  <Checkbox label="Featured" />
                  <Checkbox label="Trending" />
                  <Checkbox label="International" />
                </TabsContentItem>
                <TabsContentItem index={2} className="flex flex-col gap-y-2">
                  <Checkbox label="Uncategorized" defaultChecked />
                  <Checkbox label="Recent" />
                  <Checkbox label="Featured" />
                  <Checkbox label="Trending" />
                  <Checkbox label="International" />
                </TabsContentItem>
              </TabsContent>
            </Tabs>
          </div>

          {/* Tags */}
          <div className="card p-5">
            <h3>Tags</h3>
            <div className="mt-5">
              <label className="form-control-addon-within flex-row-reverse">
                <input
                  className="form-control ltr:pl-2 rtl:pr-2 border-none w-full"
                  placeholder="Enter a tag"
                />
                <span className="flex items-center ltr:pl-4 rtl:pr-4">
                  <span className="badge badge_primary">
                    tag
                    <button
                      type="button"
                      className="ltr:ml-1 rtl:mr-1 la la-times"
                    ></button>
                  </span>
                </span>
              </label>
              <small className="block mt-2">Seperate tags with commas</small>
            </div>
          </div>

          {/* Featured Image */}
          <div className="card p-5">
            <h3>Featured Image</h3>
            <Button color="secondary" outlined className="mt-5 uppercase">
              Browse
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default BlogAdd;
