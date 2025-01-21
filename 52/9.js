// theme
(function () {
  const theme1 = {
    name: "ikuu被催眠洗脑 堕落为母狗性奴的冷艳千金与总裁母亲 - end - 9",
    theme: `img/52/ikuu被催眠洗脑 堕落为母狗性奴的冷艳千金与总裁母亲 - end/9/09_001.jpg`,
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
    window.location.href = "52/9.html";
  });
})();
