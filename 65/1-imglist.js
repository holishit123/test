//img
(function () {
  const baseUrl = `../img/65/[Snow3D] 我的女友王雯/1-4/`;

  const imgList = [];
  for (let i = 1; i <= 621; i++) {
    const formattedNumber = String(i).padStart(4, "0"); // Định dạng số với 3 chữ số, thêm '0' vào trước nếu cần
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
