// theme
(function () {
  const theme1 = {
    name: "My Big Boobed Wife Is Fucking My Uncle Behind My Back! - 2",
    theme: `img/15/My Big Boobed Wife Is Fucking My Uncle Behind My Back!/1/2.jpg`,
  };

  const container = document.createElement("div");
  container.classList.add(
    "col-12",
    "col-md-6",
    "col-lg-4",
    "comic-wrapper",
    "card"
  );
  const title = document.createElement("h3");
  title.classList.add("card-title", "text-center");
  title.textContent = theme1.name;

  const img = document.createElement("img");
  img.classList.add("card-img");
  img.src = theme1.theme;
  img.alt = theme1.name;

  container.appendChild(img);
  container.appendChild(title);

  document.getElementById("list-comic").appendChild(container);

  container.addEventListener("click", function () {
    console.log("ccc");
    window.location.href = "15/2.html";
  });
})();
