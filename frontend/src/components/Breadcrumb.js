import { Link } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";

const Breadcrumb = (props) => {
  const { title, className, children } = props;

  const lastIndex = children.length - 1;

  const renderItems = () => {
    const Item = (props) => {
      const { item, index } = props;

      return (
        <>
          {item}
          {index < lastIndex ? (
            <li className="divider la la-arrow-right"></li>
          ) : null}
        </>
      );
    };

    return children.map((item, index) => {
      return <Item key={index} item={item} index={index} />;
    });
  };

  return (
    <section className={classNames("breadcrumb", className)}>
      {title ? <h1>{title}</h1> : null}
      <ul>{renderItems()}</ul>
    </section>
  );
};

Breadcrumb.propTypes = {
  title: PropTypes.string,
};

const BreadcrumbItem = (props) => {
  const { link, children } = props;

  if (link) {
    return (
      <li>
        <Link to={link}>{children}</Link>
      </li>
    );
  } else {
    return <li>{children}</li>;
  }
};

BreadcrumbItem.propTypes = {
  link: PropTypes.string,
};

export default Breadcrumb;

export { BreadcrumbItem };
