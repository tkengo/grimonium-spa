import React, { Component } from 'react';

export default class CrawlingUrls extends Component {
  componentDidMount() {
    this.props.userActions.loadCrawlingUrls();
  }

  render() {
    let elements = this.props.urls.map((v, i) => {
      return (
        <tr key={i}>
          <td><a href={v.url} target="_blank">{v.url}</a></td>
          <td>{v.crawler}</td>
          <td>{v.scraper}</td>
          <td>{v.priority}</td>
          <td>{v.status}</td>
          <td>{v.process}</td>
        </tr>
      );
    });

    return (
      <table className="table">
        <thead>
          <tr>
            <th>URL</th>
            <th>Crawler</th>
            <th>Scraper</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Process</th>
          </tr>
        </thead>
        <tbody>
          {elements}
        </tbody>
      </table>
    );
  }
};
