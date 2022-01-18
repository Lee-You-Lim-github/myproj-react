import { Link } from "react-router-dom";

function ArticleSummary({ article }) {
  return (
    <div>
      {article.photo && (
        <img
          src={article.photo}
          alt={article.title}
          className="w-5 h-5 mr-1 rounded inline"
        />
      )}
      <Link to={`/news/${article.id}`}>{article.title}</Link>
      <p>{article.author.username}</p>
    </div>
  );
}

export default ArticleSummary;
