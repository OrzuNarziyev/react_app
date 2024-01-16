import { useState } from "react";

import Footer from "partials/Footer";

import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";
import Button from "components/Button";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "components/Modal";

const ComponentsModal = () => {
  const [isBasicModalActive, setIsBasicModalActive] = useState(false);
  const [isCenteredModalActive, setIsCenteredModalActive] = useState(false);
  const [isScrollableModalActive, setIsScrollableModalActive] = useState(false);
  const [isStaticBackdropModalActive, setIsStaticBackdropModalActive] =
    useState(false);
  const [isSideModalActive, setIsSideModalActive] = useState(false);

  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <Breadcrumb title="Modal">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Components</BreadcrumbItem>
        <BreadcrumbItem>Modal</BreadcrumbItem>
      </Breadcrumb>

      <div className="grid lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-y-5">
          <div className="card p-5">
            <h3>Basic</h3>
            <div className="mt-5">
              <Button
                className="uppercase"
                onClick={() => setIsBasicModalActive(true)}
              >
                Open Modal
              </Button>
            </div>
          </div>
          <div className="card p-5">
            <h3>Centered</h3>
            <div className="mt-5">
              <Button
                className="uppercase"
                onClick={() => setIsCenteredModalActive(true)}
              >
                Open Modal
              </Button>
            </div>
          </div>
          <div className="card p-5">
            <h3>Scrollable</h3>
            <div className="mt-5">
              <Button
                className="uppercase"
                onClick={() => setIsScrollableModalActive(true)}
              >
                Open Modal
              </Button>
            </div>
          </div>
          <div className="card p-5">
            <h3>Static Backdrop</h3>
            <div className="mt-5">
              <Button
                className="uppercase"
                onClick={() => setIsStaticBackdropModalActive(true)}
              >
                Open Modal
              </Button>
            </div>
          </div>
          <div className="card p-5">
            <h3>Side Modal</h3>
            <div className="mt-5">
              <Button
                className="uppercase"
                onClick={() => setIsSideModalActive(true)}
              >
                Open Modal
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Basic */}
      <Modal
        active={isBasicModalActive}
        onClose={() => setIsBasicModalActive(false)}
      >
        <ModalHeader>Modal Title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </ModalBody>
        <ModalFooter>
          <div className="flex ltr:ml-auto rtl:mr-auto">
            <Button
              color="secondary"
              className="uppercase"
              onClick={() => setIsBasicModalActive(false)}
            >
              Close
            </Button>
            <Button className="ltr:ml-2 rtl:mr-2 uppercase">
              Save Changes
            </Button>
          </div>
        </ModalFooter>
      </Modal>

      {/* Centered */}
      <Modal
        active={isCenteredModalActive}
        centered
        onClose={() => setIsCenteredModalActive(false)}
      >
        <ModalHeader>Modal Title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </ModalBody>
        <ModalFooter>
          <div className="flex ltr:ml-auto rtl:mr-auto">
            <Button
              color="secondary"
              className="uppercase"
              onClick={() => setIsCenteredModalActive(false)}
            >
              Close
            </Button>
            <Button className="ltr:ml-2 rtl:mr-2 uppercase">
              Save Changes
            </Button>
          </div>
        </ModalFooter>
      </Modal>

      {/* Scrollable */}
      <Modal
        active={isScrollableModalActive}
        scrollable
        onClose={() => setIsScrollableModalActive(false)}
      >
        <ModalHeader>Modal Title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </ModalBody>
        <ModalFooter>
          <div className="flex ltr:ml-auto rtl:mr-auto">
            <Button
              color="secondary"
              className="uppercase"
              onClick={() => setIsScrollableModalActive(false)}
            >
              Close
            </Button>
            <Button className="ltr:ml-2 rtl:mr-2 uppercase">
              Save Changes
            </Button>
          </div>
        </ModalFooter>
      </Modal>

      {/* Static Backdrop */}
      <Modal
        active={isStaticBackdropModalActive}
        staticBackdrop
        onClose={() => setIsStaticBackdropModalActive(false)}
      >
        <ModalHeader>Modal Title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </ModalBody>
        <ModalFooter>
          <div className="flex ltr:ml-auto rtl:mr-auto">
            <Button
              color="secondary"
              className="uppercase"
              onClick={() => setIsStaticBackdropModalActive(false)}
            >
              Close
            </Button>
            <Button className="ltr:ml-2 rtl:mr-2 uppercase">
              Save Changes
            </Button>
          </div>
        </ModalFooter>
      </Modal>

      {/* Side */}
      <Modal
        active={isSideModalActive}
        aside
        onClose={() => setIsSideModalActive(false)}
      >
        <ModalHeader>Modal Title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet.
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            className="uppercase"
            onClick={() => setIsSideModalActive(false)}
          >
            Close
          </Button>
          <Button className="ltr:ml-2 rtl:mr-2 uppercase">Save Changes</Button>
        </ModalFooter>
      </Modal>

      <Footer />
    </main>
  );
};

export default ComponentsModal;
