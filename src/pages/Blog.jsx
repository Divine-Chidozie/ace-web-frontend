import { Fragment, useReducer } from "react";
import styles from "../styles/Blog.module.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import blog1cover from "../images/blog/buisnessGrowth.webp";

const blogData = [
  {
    cover: blog1cover,
    tags: ["tips"],
    title: "Top 5 things that help grow your business.",
    descrpition: "This post highlights the top 5 things that help grow your business, particularly Social Media Marketing Tips for Small Business Owners",
    author: "Yetunde Olukoya",
    estimatedReadTime: "3 min read",
    postCategory: "media",
  },
];

export default function Blog() {
  const [tabName, dispatch] = useReducer(reducer, blogData);
  return (
    <Fragment>
      <Navbar isAlwaysOpaque={true} />
      <div className={styles.container}>
        <div id={styles["blog-header"]}>
          <h1>Ace Digital Co Blog</h1>
          <div
            style={{
              display: "flex",
              backgroundColor: "var(--primary-color)",
              borderRadius: "2rem / 2rem",
              overflow: "hidden",
            }}
          >
            <input
              className={styles.input}
              id="search-input"
              type="search"
              placeholder="Search blog posts..."
            />
            <button title="search">
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>
        </div>
        <div id={styles["featured-container"]}>
          <a href="/blog" className={styles.link}>
            <div>
              <h3>FEATURED</h3>
              <h2>Why Your business isn't getting leads</h2>
              <p>
                Discover the common pitfalls that may be hindering your
                business's ability to attract and convert leads effectively.
                From website design to marketing strategies, we explore the key
                factors that can impact lead generation and provide actionable
                tips to help you overcome these challenges.
              </p>
            </div>
          </a>
        </div>
        <div id={styles["recent-post"]}>
          <h2>Recent Posts</h2>
          <div className={styles["tab-container"]}>
            <button
              className={styles.tab}
              onClick={(e) => dispatch({ type: "all" })}
            >
              All
            </button>
            <button
              className={styles.tab}
              onClick={(e) => dispatch({ type: "media" })}
            >
              Social Media
            </button>
            <button
              className={styles.tab}
              onClick={(e) => dispatch({ type: "brand" })}
            >
              Branding
            </button>
            <button
              className={styles.tab}
              onClick={(e) => dispatch({ type: "software" })}
            >
              SEO
            </button>
          </div>
          <div id={styles["post-container"]}>
            {tabName.map((blog, index) => (
              <a key={index} className={styles.post} href="/blog/5-things-that-help-grow-your-business">
                <img src={blog.cover} alt={blog.title} />
                <div>
                  <p>
                    {blog.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </p>
                  <h3>{blog.title}</h3>
                  <p>{blog.descrpition}</p>
                  <p>
                    <span>{blog.author}</span>
                    <span>{blog.estimatedReadTime}</span>
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <button>View More</button>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}

function reducer(prevState, action) {
  switch (action.type) {
    case "media": {
      return blogData.filter((blog) => blog.postCategory === "media");
    }
    case "brand": {
      return blogData.filter((blog) => blog.postCategory === "brand");
    }
    case "software": {
      return blogData.filter((blog) => blog.postCategory === "software");
    }
    default: {
      return blogData;
    }
  }
}
