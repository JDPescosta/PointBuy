import React, { useState, useEffect, useRef } from "react";
import DropdownIcon from "../../../images/icons/arrow.svg";
import "./Dropdown.scss";

const Dropdown = ({ onOptionClick, options, selectedOption }) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(
    options.filter((option) => option !== selectedOption.name)
  );

  const dropdownOptions = useRef(null);

  useEffect(() => {
    setFilteredOptions(
      options.filter((option) => option !== selectedOption.name)
    );
  }, [selectedOption]);

  

  useEffect(() => {
    const closeOptions = (e) => {
      if(dropdownOptions.current && !dropdownOptions.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", closeOptions);
    return () => {
      document.removeEventListener("mousedown", closeOptions);
    }

  },[dropdownOptions])


  const handleOnClick = (optionValue) => {
    setDropdownOpen(false);
    onOptionClick(optionValue);

  };

  return (
    <div className="dropdown" ref={dropdownOptions}>
      <div onClick={() => setDropdownOpen(!dropdownOpen)}>
        <h1>{selectedOption.name}
          <span>
            <DropdownIcon />
          </span>
        </h1>
        
      </div>
      {dropdownOpen && (
        <div className="dropdown-option-container" >
          <ul>
            {filteredOptions.map((option) => (
              <li key={option} onClick={() => handleOnClick(option)} value={option}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
