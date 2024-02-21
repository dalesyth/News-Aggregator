import { useState, useEffect } from "react";
import { getTopHeadlines } from "../api/ApiCalls";
import Filters from "./Filters";

function App() {
  const [headlines, setHeadlines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("");
  

  useEffect(() => {
    console.log("category from useEffect: ", category);
    const getHeadlines = async () => {
      try {
        const response = await getTopHeadlines(category);
        console.log("response from getHeadlines: ", response);

        setHeadlines(response);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    getHeadlines();
  }, [category]);

  console.log("headlines.articles from useeffect: ", headlines.articles);

  return (
    <>
      <Filters setCategory={setCategory} />
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : headlines.length === 0 ? (
          <p>No news items available</p>
        ) : (
          <div>
            {headlines.articles.map((headline, index) => (
              <div key={index} className="card mb-3 mx-3">
                {headline.content === "[Removed]" &&
                headline.description === "[Removed]" &&
                headline.title === "[Removed]" ? null : (
                  <div className="row g-0">
                    <div className="col-md-4">
                      {headline.urlToImage ? (
                        <img
                          src={headline.urlToImage}
                          className="img-fluid rounded-start"
                          alt="..."
                        ></img>
                      ) : null}
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <p className="text-danger fw-bold">
                          {headline.source.name}
                        </p>
                        <h5 className="card-title">
                          <a
                            href={headline.url}
                            style={{ textDecoration: "none" }}
                          >
                            {headline.title}
                          </a>
                        </h5>

                        <p className="card-text">{headline.description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
