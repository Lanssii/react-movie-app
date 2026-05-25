import "./FavoritesSection.css";

function FavoritesSection(props) {
  return (
    <>
      <section className="favorites-section">
        <div className="favorites-container container">
          <h2>{props.title}</h2>
        </div>
      </section>
    </>
  );
}

export default FavoritesSection;
