const Tweet = (text) => {
    
    fetch("http://localhost:4000/tweet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Add this header
      },
      body: JSON.stringify({ user: "Vampire.js", msg: text }),
    });
  };

export default Tweet