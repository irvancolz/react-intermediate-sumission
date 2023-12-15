import style from "./button.module.css";
import PropTypes from "prop-types";

export default function Button({
  variant = "primary",
  children,
  className,
  ...rest
}) {
  const variantStyle = variant == "primary" ? style.primary : style.secondary;
  return (
    <button
      className={`${className} ${variantStyle} ${style.button}`}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
