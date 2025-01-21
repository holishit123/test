// theme
(function () {
  const theme1 = {
    name: "Omae no Kaa-chan Ikutoki no Kao Sugee Busu da zo w 2 + C103 Omake Jukai Yokoku-teki na Paper",
    theme: `img/10/Omae no Kaa-chan Ikutoki no Kao Sugee Busu da zo w/Omae no Kaa-chan Ikutoki no Kao Sugee Busu da zo w 2 + C103 Omake Jukai Yokoku-teki na Paper/1.jpg`,
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
    window.location.href = "10/2.html";
  });
})();
