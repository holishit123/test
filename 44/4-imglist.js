//img
(function () {
  const baseUrl = `../img/44/Tanesaki Kaori (39) Makes Her Doujin AV Debut In Place Of Her Daughter/4/`;
  const imgList = [];
  for (let i = 1; i <= 20; i++) {
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
