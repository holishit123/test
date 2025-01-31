//img
(function () {
  const baseUrl = `../img/58/LeveChi na Swapping/1/`;
  const baseUrl2 = `../img/58/LeveChi na Swapping/2/`;

  const imgList = [];
  for (let i = 1; i <= 50; i++) {
    const formattedNumber = String(i).padStart(3, "0"); // Định dạng số với 3 chữ số, thêm '0' vào trước nếu cần
    imgList.push(`${baseUrl}${formattedNumber}.jpg`);
  }

  for (let i = 1; i <= 57; i++) {
    const formattedNumber = String(i).padStart(2, "0"); // Định dạng số với 3 chữ số, thêm '0' vào trước nếu cần
    imgList.push(`${baseUrl2}${formattedNumber}.webp`);
  }

  const imgContainer = document.getElementById("list-img");

  imgList.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-fluid", "mb-3");
    imgContainer.appendChild(img);
  });
})();
