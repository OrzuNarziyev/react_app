import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Footer from "partials/Footer";

import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";

const ExtrasEditors = () => {
  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <section className="breadcrumb">
        <Breadcrumb title="Editors">
          <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
          <BreadcrumbItem link="#no-link">Extras</BreadcrumbItem>
          <BreadcrumbItem>Editors</BreadcrumbItem>
        </Breadcrumb>
      </section>

      {/* CKEditor */}
      <div className="card p-5">
        <h3>CKEditor</h3>
        <div className="mt-5">
          <CKEditor
            editor={ClassicEditor}
            data=""
            onReady={(editor) => {
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ExtrasEditors;
