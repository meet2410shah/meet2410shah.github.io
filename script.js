const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const time = new Date('1 March 2026').getTime();

const Counter = setInterval(() => {
	let current_time = Date.now();
	let dif = time - current_time;

	let secs = parseInt(dif / 1000) % 60;
	let mins = parseInt(parseInt(dif / (1000 * 60)) % 60);
	let hs = parseInt(parseInt(dif / (1000 * 60 * 60)) % 24);
	let ds = parseInt(dif / (1000 * 60 * 60 * 24));

	seconds.innerHTML = secs;
	minutes.innerHTML = mins;
	hours.innerHTML = hs;
	days.innerHTML = ds;
	let ss = parseInt(seconds.innerHTML)--;
	let mm = parseInt(minutes.innerHTML);
	let hh = parseInt(hours.innerHTML);
	let dd = parseInt(days.innerHTML);
	if (ss < 0) {
		ss = 59;
		mm--;
		if (mm < 0) {
			mm = 59;
			hh--;
			if (hh < 0) {
				hh = 23;
				dd--;
			}
		}
	}
	if (dd < 0) {
		clearInterval(Counter);
	}
	seconds.innerHTML = ss;
	minutes.innerHTML = mm;
	hours.innerHTML = hh;
	days.innerHTML = dd;
}, 1000);
