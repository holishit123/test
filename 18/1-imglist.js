//img
(function () {
  const baseUrl = `../img/18/Kako ni Modotte Akogare no Onee-san o Netottemita/`;
  const imgList = [];
  for (let i = 1; i <= 58; i++) {
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
