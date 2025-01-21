//img
(function () {
  const baseUrl = `../img/48/kimda/7_2/`;
  const imgList = [];
  for (let i = 1; i <= 90; i++) {
    const formattedNumber = String(i).padStart(2, "0"); // Định dạng số với 3 chữ số, thêm '0' vào trước nếu cần
    imgList.push(`${baseUrl}${formattedNumber}.jpg`);
  }

  const imgContainer = document.getElementById("list-img");

  imgList.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-fluid", "mb-3");
    imgContainer.appendChild(img);
  });
})();
