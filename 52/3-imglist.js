//img
(function () {
  const baseUrl = `../img/52/ikuu被催眠洗脑 堕落为母狗性奴的冷艳千金与总裁母亲 - end/3/`;
  const imgList = [];
  for (let i = 1; i <= 97; i++) {
    const formattedNumber = String(i).padStart(3, "0"); // Định dạng số với 3 chữ số, thêm '0' vào trước nếu cần
    imgList.push(`${baseUrl}03_${formattedNumber}.jpg`);
  }

  const imgContainer = document.getElementById("list-img");

  imgList.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-fluid", "mb-3");
    imgContainer.appendChild(img);
  });
})();
