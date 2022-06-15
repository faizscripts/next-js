import axios from "axios";

function NewsArticlesList({articles}) {
    return(
        <div>
            <h1>List of News Articles</h1>
            {articles.map(article => {
                return(
                    <div key={article.id}>
                        <h2>{article.id} {article.title} | {article.category}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default NewsArticlesList

export async function getServerSideProps() {
    const response = await axios.get("http://localhost:4000/news")

    return {
        props: {
            articles: response.data
        }
    }
}