import PropTypes from "prop-types";

const Filters = ({ setCategory }) => {
  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-dark dropdown-toggle mx-3 mb-5"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Categories
      </button>
      <ul className="dropdown-menu justify-centent-center">
        <li>
          <button
            className="dropdown-item"
            onClick={() => handleCategoryChange("business")}
          >
            Business
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => handleCategoryChange("entertainment")}
          >
            Entertainment
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => handleCategoryChange("general")}
          >
            General
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => handleCategoryChange("health")}
          >
            Health
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => handleCategoryChange("science")}
          >
            Science
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => handleCategoryChange("sports")}
          >
            Sports
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => handleCategoryChange("technology")}
          >
            Technology
          </button>
        </li>
      </ul>
    </div>
  );
};

Filters.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default Filters;
