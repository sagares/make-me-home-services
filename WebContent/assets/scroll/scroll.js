var resultEl = document.getElementById("result"), elementDiv = document
		.getElementById("element"), content = document
		.getElementById("content"), indicators = document
		.getElementById("indicators"), indicator = indicators
		.getElementsByTagName('li'), body = document.body, last_known_scroll_position = 0, wHeight = 0, ticking = false;

window.addEventListener('scroll', function(e) {
	last_known_scroll_position = window.scrollY;
	if (!ticking) {
		window.requestAnimationFrame(function() {
			doSomething(last_known_scroll_position, wHeight);
			ticking = false;
		});
	}
	;
	ticking = true;
})

function switchIndicator(arr, el) {
	for (i = 0; i < arr.length; i++) {
		arr[i].style.background = "#12939A";
		arr[i].style.transform = "scale(0.5)";
	}
	arr[el].style.background = "transparent";
	arr[el].style.transform = "scale(1)";
}

function doSomething(scroll_pos, wHeight) {
	wHeight = window.innerHeight;
	/*resultEl.innerHTML = "from top: " + scroll_pos + "px, window height: " + wHeight + "px"*/

	if (scroll_pos >= 2200) {
		elementDiv.style.position = "absolute";
		elementDiv.style.top = "1250px";
		elementDiv.style.left = "29.5%";
		elementDiv.style.background = "url('./assets/img/services/carpenter.jpg')";
		elementDiv.style.backgroundSize = "500px 313px";
		indicators.style.position = "absolute";
		indicators.style.top = "1355px";
		indicators.style.left = "1%";
		indicator[0].style.background = "transparent";
		indicator[0].style.transform = "scale(1)";
		content.style.transform = "translateY(0px)";
		body.style.backgroundAttachment = "scroll";
	} else if (scroll_pos >= 2000) {
		elementDiv.style.background = "url('./assets/img/services/carpenter.jpg')";
		elementDiv.style.backgroundSize = "500px 313px";
		content.style.transform = "translateY(-750px)";
		elementDiv.style.position = "fixed";
		elementDiv.style.top = "100px";
		elementDiv.style.left = "19.5%";
		indicators.style.position = "fixed";
		indicators.style.top = "185px";
		indicators.style.left = "7%";
		switchIndicator(indicator, 3);
		body.style.backgroundAttachment = "fixed"
	} else if (scroll_pos >= 1600) {
		elementDiv.style.background = "url('./assets/img/services/plumbing.jpg')";
		elementDiv.style.backgroundSize = "500px 313px";
		content.style.transform = "translateY(-500px)";
		switchIndicator(indicator, 2);
	} else if (scroll_pos >= 1180) {
		elementDiv.style.background = "url('./assets/img/services/electrical.jpg')";
		elementDiv.style.backgroundSize = "500px 313px";
		content.style.transform = "translateY(-250px)";
		switchIndicator(indicator, 1);
	} else if (scroll_pos >= 950) {
		elementDiv.style.background = "url('./assets/img/services/home.jpg')";
		elementDiv.style.backgroundSize = "500px 313px";
		content.style.transform = "translateY(0px)";
		elementDiv.style.position = "fixed";
		elementDiv.style.top = "100px";
		elementDiv.style.left = "19.5%";
		indicators.style.position = "fixed";
		indicators.style.top = "185px";
		indicators.style.left = "7%";
		switchIndicator(indicator, 0);
		body.style.backgroundAttachment = "fixed";
	} else {
		elementDiv.style.position = "absolute";
		elementDiv.style.top = "7%";
		elementDiv.style.bottom = "";
		elementDiv.style.left = "29.5%";
		indicators.style.position = "absolute";
		indicators.style.top = "14%";
		indicators.style.left = "1%";
		indicator[0].style.background = "transparent";
		indicator[0].style.transform = "scale(1)";
		elementDiv.style.background = "url('./assets/img/services/home.jpg')";
		elementDiv.style.backgroundSize = "500px 313px";
		content.style.transform = "translateY(320px)";
		body.style.backgroundAttachment = "scroll";
	}
}