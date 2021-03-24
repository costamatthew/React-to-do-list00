import * as React from "react";
import PropTypes from "prop-types";
import "./form.css";

import { FaPlus } from "react-icons/fa";

export default function Form({ handleSubmit, handleChange, novaTarefa }) {
  return (
    <form onSubmit={(e) => handleSubmit(e)} action="#" className="form">
      <input onChange={(e) => handleChange(e)} type="text" value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
