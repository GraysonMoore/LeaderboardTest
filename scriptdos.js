function load() {
      const name = localStorage.getItem("playername");
      document.getElementById("name").value = name;
      const bestscore = localStorage.getItem("bestever");
      console.log(bestscore);
    };

    async function createAccount() {
      const username = document.getElementById("name").value;
      if(!username) {
        return alert("Enter Your Name");
      }
      const method = "POST";
      const headers = {"Content-Type": "application/json"}
      const body = JSON.stringify({ username });
      const redirect = "error";
      try {
        await fetch({ method, headers, body, redirect });
        playername = username;
        localStorage.setItem("playername", playername);
        location.href = "leaderboard.html";
      } catch(ex) {
        alert("That name is already being used");
      }
    };
