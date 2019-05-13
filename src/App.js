import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
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
      </table>
    );
  }
}

export default App;
// table.table
//   thead
//     tr
//       th URL
//       th クローラ
//       th スクレイパ
//       th 優先度
//       th ステータス
//       th 処理
//   tbody
//     tr v-for="queue in queues"
//       td = '{{ queue.url }}'
//       td = '{{ queue.crawler }}'
//       td = '{{ queue.scraper }}'
//       td = '{{ queue.priority }}'
//       td = '{{ queue.crawl_status }}'
//       td
//         button.btn.btn-primary @click="_queue(queue)" キューイング
//         button.btn.btn-primary @click="crawl(queue)" クロール
