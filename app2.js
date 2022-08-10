const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked";
    h1.classList.toggle("clicked");
}
// toggle은 classList에 "clicked" 가 있는 것을 확인해서
// 이미 존재한다면 ("clicked")를 제거해주는 역할을 한다.
// 만약 classList에 clicked가 없다면, 해당 내용을 추가해준다.
h1.addEventListener("click", handleTitleClick);
