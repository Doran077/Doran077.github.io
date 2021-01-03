var oldTitle = document.title;
var titleTime; //標題恢復計時器
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    document.querySelector("[rel='icon']").setAttribute("href", "/images/icons/favicon-32.png");
    document.title = "(QaQ)崩溃了！";
    clearTimeout(titleTime);
  } else {
    document.title = "(O.0)又好了！";
    document.querySelector("[rel='icon']").setAttribute("href", "/images/icons/crash.png");
    titleTime = setTimeout(function () {
      document.title = oldTitle;
    }, 1000);
  }
});
