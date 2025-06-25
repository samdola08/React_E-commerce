import React, { useState, useEffect } from "react";
import "../selectDrop/select.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const Select = ({ data, placeholder, icon }) => {
  const [isOpenSelect, setisOpenSelect] = useState(false);
  const [selectedIndex, setselectedIndex] = useState(0);
  const [selectedItem, setselectedItem] = useState(placeholder);

  const [listData, setListData] = useState([]);
  const [listData2, setListData2] = useState([]);


  useEffect(() => {
    console.log("Updated Data in Select:", data);
    setListData(data);
    setListData2(data);
  }, [data]);

  const openSelect = () => {
    setisOpenSelect(!isOpenSelect);
  };

  const closeSelect = (index, name) => {
    setselectedIndex(index);
    setisOpenSelect(false);
    setselectedItem(name);
  };

  const FilterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    const list = listData2.filter((item) => {
      const label = typeof item === "string" ? item : item.name;
      return label.toLowerCase().includes(keyword);
    });

    setListData(list);
  };

  return (
    <ClickAwayListener onClickAway={() => setisOpenSelect(false)}>
      <div className="selectDrop cursor" style={{ position: "relative", display:'flex', gap: '5px' }}>
        {icon}
        <span className="openSelect" onClick={openSelect}>
          {selectedItem.length>14 ? selectedItem.substr(0,14)+'...' : selectedItem}
          <KeyboardArrowDownIcon
            className="arrow"
            style={{ fontSize: "24px", marginLeft: "10px", marginTop: "-2px" }}
          />
        </span>

        {isOpenSelect && (
          <div className="selectDropdown">
            <div className="searchField">
              <input type="text" placeholder="Search here..." onChange={FilterList}/>
            </div>
            <ul className="searchResults">
              <li key={0} onClick={() => closeSelect(0, placeholder)} className={`${selectedIndex === 0 ? "active" : ""}`}>
                {placeholder}
              </li>
              {listData.map((item, index) => {
                const label = typeof item === "string" ? item : item.name;
                return (
                  <li key={index+1} onClick={() => closeSelect(index+1, label)} className={`${selectedIndex === index+1 ? "active" : ""}`}>
                    {label}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Select;
