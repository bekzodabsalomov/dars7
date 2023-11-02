function Gallery({ data: { results } }) {
    return (
      <div className="gallary">
        <ul>
          {results.map((image) => {
            return (
              <li key={image.id}>
                <img
                  src={image.urls.regular}
                  alt={image.alt_description}
                  width={300}
                  height={300}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  
  export default Gallery;
  