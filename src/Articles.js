import Article from "./Article";

const Articles = (props) => {

    const articlesData = props.articles;
    
    return (
        <div>
            {articlesData.map((articleData) => {
                return (
                   <Article article={articleData} />
                )
            })}
       </div>
    );
}

export default Articles;