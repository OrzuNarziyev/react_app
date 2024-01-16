import Footer from "partials/Footer";

import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";

const HomePage = () => {
    return (
        <main className="workspace">
            
            <Breadcrumb title="Home Page">
                <BreadcrumbItem link="#no-link">Pages</BreadcrumbItem>
                <BreadcrumbItem>Home Page</BreadcrumbItem>
            </Breadcrumb>

            <Footer />
        </main>
    );
};

export default HomePage;