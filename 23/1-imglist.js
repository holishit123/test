//img
(function () {
  const baseUrl = `../img/23/Zenteika wa Kuro ni Somaru 2023 Fuyu Preview Han/`;
  const imgList = [];
  for (let i = 1; i <= 28; i++) {
    imgList.push(`${baseUrl}${i}.jpg`);
  }

  const imgContainer = document.getElementById("list-img");

  imgList.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-fluid", "mb-3");
    imgContainer.appendChild(img);
  });
})();
