function AboutUs() {
  return (
    <div
      className="about-us-container"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "30px",
        borderRadius: "12px",
        maxWidth: "600px",
        margin: "20px auto",
        color: "white",
      }}
    >
      <h1 style={{ color: "#4CAF50", fontSize: "2rem" }}>About Us</h1>
      <hr style={{ border: "1px solid #4CAF50", margin: "15px 0" }} />
      <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        Welcome to Paradise Nursery, where green meets serenity! At Paradise
        Nursery, we are passionate about bringing nature closer to you. Our
        carefully curated collection of plants is designed to transform your
        living spaces into lush, green havens. Whether you are a seasoned plant
        enthusiast or a beginner looking to start your green journey, we have
        the perfect plant for you.
      </p>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginTop: "15px" }}>
        Our mission is to make plant shopping easy, enjoyable, and accessible to
        everyone. We believe that every space deserves a touch of nature, and we
        are here to help you find the ideal plants to suit your style and needs.
        From air-purifying wonders to aromatic herbs and beautiful indoor
        varieties, our selection has something for everyone.
      </p>
    </div>
  );
}

export default AboutUs;
