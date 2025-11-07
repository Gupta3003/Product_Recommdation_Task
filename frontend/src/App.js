import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [firstProduct, setFirstProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");
    setFirstProduct(null);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000"}/ask`,
        { question }
      );

      const fullAnswer = response.data.answer || "No response received.";
      setAnswer(fullAnswer);

      // Extract first product line
      const lines = fullAnswer.split("\n").filter((line) => line.trim() !== "");
      const productLine = lines.find(
        (line) =>
          line.match(/^\d+\./) ||
          line.toLowerCase().match(/lenovo|hp|asus|dell|iphone|samsung/)
      );

      if (productLine) {
        const productName = productLine.replace(/^\d+\.\s*/, "").trim();
        setFirstProduct(productName);
      }
    } catch (err) {
      console.error(err);
      setAnswer("Error fetching response from AI.");
    }

    setLoading(false);
  };

  const getSearchLink = (product) => {
    const query = encodeURIComponent(product);
    return `https://www.google.com/search?q=${query}+site:amazon.in+OR+site:flipkart.com`;
  };

  return (
    <div className="app">
      <h1>🧠 AI Product Assistant</h1>

      <textarea
        rows="4"
        placeholder="Ask me something like 'Suggest phones under $500'..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button onClick={handleAsk} disabled={loading}>
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {/* Top Recommendation */}
      {firstProduct && (
        <div className="highlight-box">
          ⭐ <strong>Top Recommendation:</strong>{" "}
          <a
            href={getSearchLink(firstProduct)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {firstProduct}
          </a>
        </div>
      )}

      {/* AI Response */}
      <div className="answer-box">
        <h3>AI Response:</h3>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default App;
