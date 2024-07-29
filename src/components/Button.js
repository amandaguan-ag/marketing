import PropTypes from "prop-types";
import classNames from "classnames";
import Link from "next/link";

const Button = ({ type, href, children, className, ...props }) => {
  const baseClass =
    "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2";
  const classes = classNames(
    baseClass,
    {
      "bg-indigo-700 text-white hover:bg-indigo-800 px-6 py-4 rounded text-center":
        type === "primary",
      "bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-100 px-6 py-4 rounded text-center":
        type === "secondary",
      "text-indigo-700 px-0.5 text-center": type === "text",
    },
    className
  );

  return (
    <Link href={href} passHref legacyBehavior>
      <a className={classes} {...props}>
        {children}
      </a>
    </Link>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "text"]).isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: "",
};

export default Button;
