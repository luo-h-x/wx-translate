import config from "../config.js";
const MD5 = require('js-md5');

export default function editUrl(options) {
	const {
		query,
		from = "auto",
		to = "en"
	} = options;
	const salt = Date.now();
	const sign = MD5(config.appid + query + salt + config.key);
	const encodeQuery = encodeURI(query);
	const URL =
		`https://api.fanyi.baidu.com/api/trans/vip/translate?q=${encodeQuery}&from=${from}&to=${to}&appid=${config.appid}&salt=${salt}&sign=${sign}`;
	return URL;
}
