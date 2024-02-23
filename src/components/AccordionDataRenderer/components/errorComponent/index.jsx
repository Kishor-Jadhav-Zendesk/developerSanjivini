import React from "react";

const ErrorComponent = () => (
  <div style={styles.container}>
    <p style={styles.errorText}>
      {" "}
      Something went wrong. Please try again later.
    </p>
  </div>
);

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    fontFamily: "Arial, sans-serif",
  },
  errorText: {
    fontSize: "1.5em",
    fontWeight: "bold",
    color: "#6c757d",
    padding: "20px",
    borderRadius: "5px",
    border: "1px solid #6c757d",
    textAlign: "center",
  },
};

export default ErrorComponent;
