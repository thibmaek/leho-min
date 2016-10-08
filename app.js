{
	// DOM methods used because ES native modules don't seem to me supported :(
	const checkAndRemove = node => node ? node.remove() : null;

  checkAndRemove(document.querySelector('.portal_stip_wrapper'));
  checkAndRemove(document.getElementById('corps').querySelector('.portal_div_wrapper'));
  checkAndRemove(document.getElementById('breadcrumbs'));
  checkAndRemove(document.getElementById('course_ALGAUTOSTUDSSBKa7ae'));
  checkAndRemove(document.getElementById('course_ALGAUTOSTUDENQUETES50ca'));
  checkAndRemove(document.getElementById('course_ALGAUTOSTUDJHNYP9b60'));
  checkAndRemove(document.getElementById('course_ALGAUTOSTUDLEHO54f7'));
  checkAndRemove(document.getElementById('course_ALGAUTOSTUDSTUDRAADf334'));

  document.getElementById('PracticalInfo').parentNode.style.width = "100%";
  document.getElementById('PracticalInfo').parentNode.style.margin = 0;
  document.getElementById('PracticalInfo').style.width = "100%";

	// const settings = document.createElement('li');
	// settings.innerHTML = "<a>leho-min settings</a>";
	// document.querySelector('#usermenu ul').appendChild(settings);
};
