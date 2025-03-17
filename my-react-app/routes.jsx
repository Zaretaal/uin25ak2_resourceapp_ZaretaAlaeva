function Resources() {
    const { category } = useParams();
    if (!category) {
      return <h1>No category selected</h1>;
    }
    return <h1>Viser ressurser for: {category}</h1>;
  }
  