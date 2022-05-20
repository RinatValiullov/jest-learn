import React, { Component } from "react";
import Input from "../Input/input";
import Pagination from "../Pagination/Pagination";
import Post from "../Post/Post";
import Select from "../Select/Select";
import Title from "../Title/Title";
import {
  BASE_PATH,
  HITS,
  PAGE_HITS,
  PAGE_PARAM,
  SEARCH_PARAM,
  SEARCH_PATH,
} from "./constants";
import "./posts.css";

class Posts extends Component {
  state = {
    searchQuery: "",
    result: {},
    hitsPerPage: 20,
    page: 0,
  };

  componentDidMount() {
    const { searchQuery, hitsPerPage, page } = this.state;
    this.fetchData(searchQuery, hitsPerPage, page);
  }

  fetchData = (searchQuery, hitsPerPage, page) => {
    fetch(
      `${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}&${PAGE_HITS}${hitsPerPage}&${PAGE_PARAM}${page}`
    )
      .then((res) => res.json())
      .then((result) => this.setNews(result));
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      searchQuery: value,
    });
  };

  handleHitsChange = ({ target: { value } }) => {
    const { searchQuery } = this.state;

    this.setState(
      {
        hitsPerPage: +value,
        page: 0,
      },
      () => {
        this.fetchData(searchQuery, this.state.hitsPerPage, 0);
      }
    );
  };

  getSearch = ({ key }) => {
    if (key === "Enter") {
      const { searchQuery, hitsPerPage } = this.state;
      this.setState({
        page: 0,
      });
      this.fetchData(searchQuery, hitsPerPage, 0);
    }
  };

  setNews = (result) => {
    this.setState({ result });
  };

  handlePageChange = ({ target }) => {
    const btnType = target.getAttribute("data-name");
    let { page } = this.state;

    if (!isNaN(btnType)) {
      this.updatePage(+btnType);
    } else {
      if (btnType === "next") {
        this.updatePage(page + 1);
      }
      if (btnType === "prev") {
        this.updatePage(page - 1);
      }
    }
  };

  updatePage = (page) => {
    const { searchQuery, hitsPerPage } = this.state;
    this.setState(
      {
        page,
      },
      () => {
        this.fetchData(searchQuery, hitsPerPage, page);
      }
    );
  };

  render() {
    const { searchQuery, result, hitsPerPage } = this.state;
    const { hits = [], page, nbPages } = result;

    return (
      <div className="wrapper">
        <Title title="Hacker News" />
        <Select
          options={HITS}
          handleChange={this.handleHitsChange}
          value={hitsPerPage}
        />
        {hits.length > 0 && (
          <Pagination
            onClick={this.handlePageChange}
            page={page}
            lastPage={nbPages}
          />
        )}
        <Input
          onKeyPress={this.getSearch}
          onChange={this.handleInputChange}
          value={searchQuery}
        />
        <ul className="newsList">
          {hits.map(
            ({
              author,
              created_at,
              num_comments,
              objectID,
              title,
              points,
              url,
            }) => (
              <Post
                key={objectID}
                author={author}
                created_at={created_at}
                num_comments={num_comments}
                title={title}
                points={points}
                url={url}
              />
            )
          )}
        </ul>
      </div>
    );
  }
}

export default Posts;
