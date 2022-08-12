const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked";
    h1.classList.toggle("clicked");
}
// toggle은 classList에 "clicked" 가 있는 것을 확인해서
// 이미 존재한다면 ("clicked")를 제거해주는 역할을 한다.
// 만약 classList에 clicked가 없다면, 해당 내용을 추가해준다.
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("")
h1.addEventListener("mouse")

// t2의 콘텐츠를 바꾸는 함수
function modifyText(new_text) {
    const t2 = document.getElementById("t2");
    t2.firstChild.nodeValue = new_text;
  }
  
  // 화살표 함수를 사용한 이벤트 수신기를 표에 추가
  const el = document.getElementById("outside");
  el.addEventListener("click", () => { modifyText("four"); }, false);