//img
(function () {
  const baseUrl = `../img/27/Hiếp dâm em giáo viên tiểu học!/`;
  const imgList = [];
  for (let i = 1; i <= 14; i++) {
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
