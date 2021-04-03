const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const time = new Date('24 October 2022').getTime() + 100 * 24 * 3600 * 1000;

const seconds_only = document.querySelector('#seconds_only');

const renderIt = (s) => {
	let n = s.length;
	let ans = [];
	let ct = 0;
	let k = 0;
	for (let i = n - 1; i >= 0; i--) {
		ans.push(s[i]);
		if (k == 0) {
			k = 1;
			if (ct == 3) {
				ans.push(',');
				ct = 0;
			}
		} else {
			if (ct == 2) {
				ans.push(',');
				ct = 0;
			}
		}
		ct++;
	}
	ans = ans.reverse();
	ans = ans.join('');
	if (ans[0] == ',') ans = ans.slice(1, ans.length);
	return ans;
};

setInterval(() => {
	let current_time = Date.now();
	let dif = time - current_time;

	seconds_only.innerHTML =
		renderIt(parseInt(dif / 1000).toString()) + ' seconds';

	let secs = parseInt(dif / 1000) % 60;
	let mins = parseInt(parseInt(dif / (1000 * 60)) % 60);
	let hs = parseInt(parseInt(dif / (1000 * 60 * 60)) % 24);
	let ds = parseInt(dif / (1000 * 60 * 60 * 24));

	seconds.innerHTML = secs;
	minutes.innerHTML = mins;
	hours.innerHTML = hs;
	days.innerHTML = ds;
}, 1000);
