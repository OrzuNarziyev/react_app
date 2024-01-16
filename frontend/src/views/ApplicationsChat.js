import Avatar from "components/Avatar";
import Sidebar from "components/Sidebar";
import Tabs, {
  TabsContent,
  TabsContentItem,
  TabsNavigation,
  TabsNavigationItem,
} from "components/Tabs";

const ApplicationsChat = () => {
  return (
    <>
      {/* Workspace */}
      <main className="workspace workspace_with-sidebar pb-32">
        {/* Header */}
        <section className="flex items-center lg:justify-end mb-5">
          <Avatar size="medium" status="success" className="ltr:mr-5 rtl:ml-5">
            <img src={require("../assets/images/potato.jpg")} alt="" />
          </Avatar>
          <div>
            <h5>Potato Bahadur</h5>
            <p>Last seen today 2:20PM</p>
          </div>
        </section>

        <hr className="dark:border-gray-800 mb-8" />

        {/* Chats */}
        <div className="relative flex-grow">
          <div className="absolute flex flex-col gap-5 w-full top-0 bottom-0 overflow-y-scroll">
            {/* Received */}
            <div className="card flex items-start w-11/12 p-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span className="whitespace-nowrap ltr:ml-auto rtl:mr-auto ltr:text-right rtl:text-left ltr:pl-5 rtl:pr-5 text-muted">
                Yesterday 2:20PM
              </span>
            </div>
            <div className="card flex items-start w-11/12 p-5">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam
              <span className="whitespace-nowrap ltr:ml-auto rtl:mr-auto ltr:text-right rtl:text-left ltr:pl-5 rtl:pr-5 text-muted">
                Yesterday 2:20PM
              </span>
            </div>
            <div className="card flex items-start w-11/12 p-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span className="whitespace-nowrap ltr:ml-auto rtl:mr-auto ltr:text-right rtl:text-left ltr:pl-5 rtl:pr-5 text-muted">
                Yesterday 2:20PM
              </span>
            </div>

            {/* Sent */}
            <div className="card flex items-start w-11/12 ltr:ml-auto rtl:mr-auto p-5 bg-primary text-component">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span className="whitespace-nowrap ltr:ml-auto rtl:mr-auto ltr:text-right rtl:text-left ltr:pl-5 rtl:pr-5">
                Yesterday 2:20PM
              </span>
            </div>
            <div className="card flex items-start w-11/12 ltr:ml-auto rtl:mr-auto p-5 bg-primary text-component">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam
              <span className="whitespace-nowrap ltr:ml-auto rtl:mr-auto ltr:text-right rtl:text-left ltr:pl-5 rtl:pr-5">
                Yesterday 2:20PM
              </span>
            </div>
            <div className="card flex items-start w-11/12 ltr:ml-auto rtl:mr-auto p-5 bg-primary text-component">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span className="whitespace-nowrap ltr:ml-auto rtl:mr-auto ltr:text-right rtl:text-left ltr:pl-5 rtl:pr-5">
                Yesterday 2:20PM
              </span>
            </div>
          </div>
        </div>

        {/* Footer Bar - Send Message */}
        <div className="footer-bar absolute">
          <input
            className="flex flex-auto ltr:mr-5 rtl:ml-5 bg-transparent outline-none placeholder:text-placeholder"
            placeholder="Enter message..."
          />
          <div className="flex sm:flex-wrap gap-5 ltr:ml-auto rtl:mr-auto">
            <button className="btn btn-icon btn-icon_large btn_outlined btn_primary">
              <span className="la la-paperclip text-xl leading-none"></span>
            </button>
            <button className="btn btn_primary uppercase">
              <span className="la la-paper-plane text-xl leading-none ltr:mr-2 rtl:ml-2"></span>
              Send
            </button>
          </div>
        </div>
      </main>

      <Sidebar>
        <div className="overflow-y-auto">
          {/* Tabs */}
          <Tabs activeIndex={1} className="mt-5 p-5">
            <TabsNavigation>
              <TabsNavigationItem index={1} className="uppercase">
                Messages
              </TabsNavigationItem>
              <TabsNavigationItem index={2} className="uppercase">
                Contacts
              </TabsNavigationItem>
            </TabsNavigation>
            <TabsContent>
              <TabsContentItem index={1}>
                {/* Search */}
                <form className="flex mb-5">
                  <label className="form-control-addon-within rounded-full">
                    <input
                      className="form-control border-none"
                      placeholder="Search"
                    />
                    <button className="text-gray-300 dark:text-gray-700 text-xl leading-none la la-search ltr:mr-4 rtl:ml-4"></button>
                  </label>
                </form>

                <div className="flex items-center py-5">
                  <Avatar
                    size="medium"
                    status="success"
                    className="ltr:mr-5 rtl:ml-5"
                  >
                    <img src={require("../assets/images/potato.jpg")} alt="" />
                  </Avatar>
                  <div>
                    <h5>Potato Bahadur</h5>
                    <p>Lorem ispum dolot is sit</p>
                  </div>
                  <small className="ltr:ml-auto rtl:mr-auto ltr:pl-5 rtl:pr-5">
                    2:22PM
                  </small>
                </div>
                <hr />
                <div className="flex items-center py-5">
                  <Avatar
                    size="medium"
                    status="success"
                    className="ltr:mr-5 rtl:ml-5"
                  >
                    <img src={require("../assets/images/tomato.jpg")} alt="" />
                  </Avatar>
                  <div>
                    <h5>Tomato Prashad</h5>
                    <p>Lorem ispum dolot is sit</p>
                  </div>
                  <small className="ltr:ml-auto rtl:mr-auto ltr:pl-5 rtl:pr-5">
                    1:00PM
                  </small>
                </div>
                <hr />
                <div className="flex items-center py-5">
                  <Avatar size="medium" className="ltr:mr-5 rtl:ml-5">
                    <img
                      src={require("../assets/images/breakfast.jpg")}
                      alt=""
                    />
                  </Avatar>
                  <div>
                    <h5>Onion Kale</h5>
                    <p>Lorem ispum dolot is sit</p>
                  </div>
                  <small className="ltr:ml-auto rtl:mr-auto ltr:pl-5 rtl:pr-5">
                    3:30PM
                  </small>
                </div>
              </TabsContentItem>
              <TabsContentItem index={2}>
                <div className="flex items-center py-5">
                  <Avatar
                    size="medium"
                    status="success"
                    className="ltr:mr-5 rtl:ml-5"
                  >
                    <img src={require("../assets/images/potato.jpg")} alt="" />
                  </Avatar>
                  <div>
                    <h5>Potato Bahadur</h5>
                    <p>Last seen today 2:20PM</p>
                  </div>
                </div>
                <hr />
                <div className="flex items-center py-5">
                  <Avatar
                    size="medium"
                    status="warning"
                    className="ltr:mr-5 rtl:ml-5"
                  >
                    <img src={require("../assets/images/tomato.jpg")} alt="" />
                  </Avatar>
                  <div>
                    <h5>Tomato Prashad</h5>
                    <p>Last seen today 2:20PM</p>
                  </div>
                </div>
                <hr />
                <div className="flex items-center py-5">
                  <Avatar
                    size="medium"
                    status="success"
                    className="ltr:mr-5 rtl:ml-5"
                  >
                    <img
                      src={require("../assets/images/breakfast.jpg")}
                      alt=""
                    />
                  </Avatar>
                  <div>
                    <h5>Onion Kale</h5>
                    <p>Last seen today 2:20PM</p>
                  </div>
                </div>
                <hr />
                <div className="flex items-center py-5">
                  <Avatar
                    size="medium"
                    status="success"
                    className="ltr:mr-5 rtl:ml-5"
                  >
                    <img src={require("../assets/images/potato.jpg")} alt="" />
                  </Avatar>
                  <div>
                    <h5>Potato Bahadur</h5>
                    <p>Last seen today 2:20PM</p>
                  </div>
                </div>
                <hr />
                <div className="flex items-center py-5">
                  <Avatar
                    size="medium"
                    status="danger"
                    className="ltr:mr-5 rtl:ml-5"
                  >
                    <img src={require("../assets/images/tomato.jpg")} alt="" />
                  </Avatar>
                  <div>
                    <h5>Tomato Prashad</h5>
                    <p>Last seen today 2:20PM</p>
                  </div>
                </div>
              </TabsContentItem>
            </TabsContent>
          </Tabs>
        </div>
      </Sidebar>
    </>
  );
};

export default ApplicationsChat;
