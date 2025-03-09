import LinkAccent from "../link-accent/LinkAccent";
import Title from "../title/Title";
import "./posts.css";

export default function Posts() {
  return (
    <section className="posts">
      <div className="container ">
        <div className="posts-up">
          <Title text="Recent posts" />
          <LinkAccent url="#" label="View all" />
        </div>

        <div className="posts-wrapper">
          <div className="posts-card">
            <h1>Making a design system from scratch</h1>
            <div className="date-category">
              <p className="posts-card-date">12 Feb 2020</p>
              <span className="divider"></span>
              <p className="posts-card-categories">Design, Pattern</p>
            </div>

            <p className="posts-card-desc">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.{" "}
            </p>
          </div>

          <div className="posts-card">
            <h1>Making a design system from scratch</h1>
            <div className="date-category">
              <p className="posts-card-date">12 Feb 2020</p>
              <span className="divider"></span>
              <p className="posts-card-categories">Design, Pattern</p>
            </div>

            <p className="posts-card-desc">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
