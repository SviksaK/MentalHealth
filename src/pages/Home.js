import Header from './../components/header/Header'
import Article from './article.json'

const Home = () => {
    return (
      <>
        <Header />
        <main className="section">
          <div className="container">
            <ul className="content-list">
              {
               Article.sections.map(section =>{
                
                return (
                   <li className="content-list__item">
                   <h2 className="title-2">{section.heading}</h2>
                   <p>{section.content}</p>
                 </li>
                  )
               })
              }
            </ul>
          </div>
        </main>
      </>
    );
}

export default Home;