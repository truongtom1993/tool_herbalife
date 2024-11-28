let count = 0;
const maxError = 100;
const separator = '-';
if (DS) {
	// findKey(DS, 'AnimationTimeline');
	printAllKey(DS);
}
function findKey(obj, keyName, parentName = '') {
	// debugger
	for (const key in obj) {
		if (key === keyName) {
			console.info(`${parentName} - ${key}`);
			continue;
		}

		if (typeof obj[key] === 'object' && key !== '__proto__' && Object.keys(obj[key]).length > 0) {
			findKey(obj[key], keyName, key);
		}
		if (typeof obj[key] === 'function' && typeof obj[key].prototype === 'object' && Object.keys(obj[key].prototype).length > 0) {
			findKey(obj[key].prototype, keyName, key);
		}
	}
}

function printAllKey(obj, parentKey = '', isPrototype) {
	if (!obj) return;
	Object.keys(obj).length > 0 && console.info(`🟠 index.js	Line:26	ID:779455`, Object.keys(obj).join(' , '));
	if (isPrototype) return;
	one: for (const key in obj) {
		if (count > maxError) break one;
		count++;
		const currentKey = parentKey ? parentKey + separator + key + `-${typeof obj[key]}` : key;
		console.log(currentKey);
		try {
			const keyValue = obj?.[key];
			//  check, ko cho di tiep
			const keyName = ['_', '_assets', ''];
			if (keyName.includes(key)) continue one;
			const check = [DS.Backbone.View, DS.Backbone.Collection, DS.Backbone.Model];
			for (const element of check) {
				if (keyValue instanceof element) {
					console.info(`🟠 index.js	Line:36	ID:07d22a`, keyValue);
					continue one;
				}
			}
			switch (typeof keyValue) {
				case 'function':
					printAllKey(keyValue?.prototype, currentKey, true);
					break;
				case 'object':
					printAllKey(keyValue, currentKey);
					break;
			}
		} catch (err) {
			console.info(`🟠 index.js	Line:51	ID:2b4904`, key);
		}
	}
}

/*
liệt kê toàn bộ key cấp 1 của object
sau khi liệt kê xong thì mới duyệt đến từng key để duyệt tiếp

truy cap key bi loi
audioContext\/onerror
audioContext\/sinkId
audioContext\/onsinkchange
audioContext\/destination
audioContext\/sampleRate
audioContext\/currentTime
audioContext\/listener
audioContext\/state

*/
