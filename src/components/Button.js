import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ children, type = "primary", disabled = false }) => {
  const baseStyles =
    "px-6 py-3 rounded font-medium text-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
  const primaryStyles =
    "bg-indigo-700 text-white hover:bg-indigo-800 focus:ring-indigo-500";
  const secondaryStyles =
    "bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-100 focus:ring-neutral-200";
  const disabledStyles = "cursor-not-allowed opacity-50";

  const buttonClasses = classNames(baseStyles, {
    [primaryStyles]: type === "primary" && !disabled,
    [secondaryStyles]: type === "secondary" && !disabled,
    [disabledStyles]: disabled,
  });

  return (
    <button className={buttonClasses} disabled={disabled}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
};

export default Button;
