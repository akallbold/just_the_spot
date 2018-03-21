import React, { Component } from 'react';

class TitleList extends Component {

handleClick = (article) => {
  this.props.changeCurrentArticle(article)
}

  createElements = () => {
    let relevantLists = this.props.allArticles.filter(article => {
      return article.title.toUpperCase().includes(this.props.searchTerm.toUpperCase())
    })
    return relevantLists.map(article => {
      return(
        <div>
          <a className= "article" key={article.id} article= {article} onClick={()=>this.handleClick(article)}>{article.title}</a>
        </div>
      )
    })
  }


  render() {

    return (
      <div className="title-list">
        <p>"Title List"</p>
        {this.createElements()}
      </div>
    );
  }
}

export default TitleList;
