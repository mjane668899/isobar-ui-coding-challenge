import React from "react";
import "antd/dist/antd.css";
import "./searchbar.css";
import lessons from "../fixtures/course.json";
import { Input, AutoComplete } from "antd";

const renderTitle = (title) => (
  <span>
    {title}
    <a
      style={{
        float: "right",
      }}
      href="https://www.google.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer"
    >
      more
    </a>
  </span>
);

const renderItem = (title) => ({
  value: title,
  label: (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {title}
    </div>
  ),
});

// This is a prepopulate Json Data
const options = [
  {
    label: renderTitle("Courses"),
    options: lessons.map((item) => renderItem(item.name)),
  },
];

// const options = [
//   {
//     label: renderTitle("Courses"),
//     options: [
//       renderItem("React"),
//       renderItem("Vue"),
//       renderItem("Javascript"),
//       renderItem("CSS"),
//     ],
//   },
// ];

// This is pre-populate Search Bar
export default function SearchBar({ children, ...restProps }) {
  return (
    <AutoComplete
      dropdownClassName="certain-category-search-dropdown"
      dropdownMatchSelectWidth={500}
      style={{
        width: 400,
      }}
      options={options}
    >
      <Input.Search
        size="large"
        placeholder="Search for your course today..."
      />
    </AutoComplete>
  );
}
