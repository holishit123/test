//img
(function () {
  const baseUrl = `../img/38/Picking Up Married Women At The NTR Hot Springs/`;
  const imgList = [];
  for (let i = 1; i <= 35; i++) {
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
