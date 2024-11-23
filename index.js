let count = 0;
if (DS) {
	// findKey(DS, 'childDurationChange');
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

function printAllKey(obj, parentKey = '') {
	if (!obj || count > 1000) return;
	if (typeof obj === 'object') {
		for (const key in obj) {
			if (key === 'constructor') continue;
			count++;
			try {
				const currentKey = parentKey ? parentKey + '_' + key : key;
				console.info(currentKey);

				if (!obj || !obj?.[key]) continue;
				if (typeof obj[key] === 'function' && typeof obj[key].prototype === 'object' && Object.keys(obj[key].prototype).length > 0) {
					printAllKey(obj[key].prototype, key);
				}
				if (typeof obj[key] === 'object' && key !== '__proto__' && Object.keys(obj[key]).length > 0) {
					if (key === 'data:updated' || key === '_listeningTo' || key === 'player:accessibleTextChanged' || !Number.isNaN(parseInt(key))) {
						console.info(`🟠 index.js	Line:41	ID:7f0a22`, key);
						continue;
					}
					printAllKey(obj[key], currentKey);
				}
			} catch {
				continue;
			}
		}
	} else if (typeof obj === 'function') {
		printAllKey(obj.prototype, parentKey);
	}
}
