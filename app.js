(() => {
	const domCheck = node => {
		node ? node.remove() : console.log('node doesnt exist');
	};

  domCheck(document.querySelector('.portal_stip_wrapper'));
  domCheck(document.getElementById('corps').querySelector('.portal_div_wrapper'));
  domCheck(document.getElementById('breadcrumbs'));

  document.getElementById('PracticalInfo').parentNode.style.width = "100%";
  document.getElementById('PracticalInfo').parentNode.style.margin = 0;
  document.getElementById('PracticalInfo').style.width = "100%";

	const settings = document.createElement('li');
	settings.innerHTML = "<a>leho-min settings</a>";
	document.querySelector('#usermenu ul').appendChild(settings);
})();
