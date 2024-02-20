import { useState } from "react";

const Filters = () => {
  const [category, setCategory] = useState("");

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Categories
      </button>
      <ul className="dropdown-menu">
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

export default Filters;
