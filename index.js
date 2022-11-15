function rangeOfNumbers(startNum, endNum) {
	if (startNum > endNum) {
		return [];
	} else {
		const out = rangeOfNumbers(startNum + 1, endNum)
		out.unshift(startNum)
		return out
	}
	return out
};