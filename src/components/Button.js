import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ type, children, href, ariaLabel, isIconOnly }) => {
  const buttonClass = classNames(
    "flex justify-center items-center gap-2.5 px-6 py-4 rounded text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
    {
      "bg-indigo-700 text-white hover:bg-indigo-800": type === "primary",
      "bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-100":
        type === "secondary",
      "p-2 rounded-full text-indigo-700 hover:bg-indigo-50": isIconOnly,
    }
  );

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} className={buttonClass}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={buttonClass}
      aria-label={ariaLabel}
      disabled={type === "disabled"}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "icon-only", "disabled"]),
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  ariaLabel: PropTypes.string,
  isIconOnly: PropTypes.bool,
};

export default Button;
