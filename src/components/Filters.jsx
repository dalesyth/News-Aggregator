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
            onClick={() => handleCategoryChange("Business")}
          >
            Business
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => handleCategoryChange("Entertainment")}
          >
            Entertainment
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => handleCategoryChange("General")}
          >
            General
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => handleCategoryChange("Health")}
          >
            Health
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => handleCategoryChange("Science")}
          >
            Science
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => handleCategoryChange("Sports")}
          >
            Sports
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => handleCategoryChange("Technology")}
          >
            Technology
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Filters;
