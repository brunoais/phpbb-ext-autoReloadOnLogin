// No proper API, no treat
var hasLocalStorage = false;
try{
	hasLocalStorage = !!window.localStorage;
}catch(e){
	// try/catch because a security error may be thrown at this point
}
if(document.addEventListener && document.querySelectorAll && hasLocalStorage){
	if(isLoginPage && !isLoggedIn){
		localStorage.removeItem("brunoais|loginMade");
		window.addEventListener('storage', function (e){
			if(e.key == "brunoais|loginMade" &&
				e.newValue == "1"){
				localStorage.removeItem("brunoais|loginMade");
				location.reload();
			}
		}, false);
	}else if(isLoggedIn){
		if(localStorage.getItem("brunoais|loginMade") != "1"){
			localStorage.setItem("brunoais|loginMade", "1");
		}
	}
}