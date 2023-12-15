import style from "./input.module.css";
import PropTypes from "prop-types";

export default function Input({ id, label, value, onChange, type }) {
  return (
    <div className={style.form_group}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder=" "
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["password", "text"]).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
