import React from "react";
import "antd/dist/antd.css";
import "./searchbar.css";
import { Input, AutoComplete } from "antd";
import { UserOutlined } from "@ant-design/icons";
import lessons from "../fixtures/course.json";

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

const renderItem = (title, count) => ({
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

const options = [
  {
    label: renderTitle("Courses"),
    options: [
      renderItem("React"),
      renderItem("Vue"),
      renderItem("Javascript"),
      renderItem("CSS"),
    ],
  },
];

export default function SearchBar({ children, ...restProps }) {
  return (
    <AutoComplete
      dropdownClassName="certain-category-search-dropdown"
      dropdownMatchSelectWidth={500}
      style={{
        width: 600,
        margin: 15,
        height: 20,
      }}
      options={options}
    >
      <Input.Search
        size="large"
        placeholder="Search for your course today..."
        filterOption={(inputValue, lessons) =>
          lessons.name.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
    </AutoComplete>
  );
}