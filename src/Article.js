const Article = (props) => {

    const article = props.article;

    return (
        <div>
            <h1>{article.title}</h1>
            <img src={article.image} alt={article.title}/>
            <p>{article.content}</p>
        </div>
    );
}

export default Article;
