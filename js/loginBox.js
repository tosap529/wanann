let goCreate = document.getElementById("changeLoginBox");
let bgcImg = document.querySelector(".login_bgc_img");

goCreate.addEventListener("click", function () {
    if (bgcImg.classList.contains("login_box_right")) {
        bgcImg.classList.remove("login_box_right");
        bgcImg.classList.add("login_box_left");
        bgcImg.style.borderRadius = "10px 0 0 10px"
        goCreate.innerText = "登入";
        goCreate.previousElementSibling.previousElementSibling.innerText = "歡迎回來";
        goCreate.previousElementSibling.innerText = "登入預約方便安心的服務吧！";

    } else {
        bgcImg.classList.remove("login_box_left");
        bgcImg.classList.add("login_box_right");
        bgcImg.style.borderRadius = "0 10px 10px 0"
        goCreate.innerText = "註冊";
        goCreate.previousElementSibling.previousElementSibling.innerText = "還不是會員嗎？";
        goCreate.previousElementSibling.innerText = "創建帳號預約方便安心的服務吧！";
    }
})


let eye = document.querySelectorAll(".eye");
eye.forEach(function (item, i) {

    item.addEventListener("click", function () {
        // console.log(this.previousElementSibling);
        let inputType = this.previousElementSibling;
        if (inputType.getAttribute("type") == "password") {
            inputType.setAttribute("type", "text");

        } else {
            inputType.setAttribute("type", "password");
        }
    })

})
