import React, { Component } from "react";
import Icon from "../Icon/Icon";
import SearchBar from "./SearchBar";
import SearchBtn from "./SearchBtn";
import PropTypes from "prop-types";

export default class Search extends Component {
  render() {
    return (
      <div>
        <div>
          <Icon name="Logo" size="12em" />
        </div>
        <div>
          <SearchBar />
        </div>
        <div>
          <SearchBtn />
        </div>
      </div>
    );
  }
}
