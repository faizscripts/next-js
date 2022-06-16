import axios from "axios";

function ArticlesByCategory({articles, category}) {
    return(
        <div>
            <h1>List of {category} articles</h1>
            {articles.map(article => {
                return(
                    <div key={article.id}>
                        <h2>{article.id} {article.title}</h2>
                        <p>{article.description}</p>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}

export default ArticlesByCategory

export async function getServerSideProps(context) {
    const {params} = context
    const {category} = params
    const response = await axios.get(`http://localhost:4000/news?category=${category}`)

    return{
        props: {
            articles: response.data,
            category
        }
    }
}