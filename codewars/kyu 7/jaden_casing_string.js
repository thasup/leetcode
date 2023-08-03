function toJaden(str = "") {
	return str?.split(" ").map(v => v.charAt(0).toUpperCase() + v.slice(1)).join(" ")
};

console.log(
	toJaden("How can mirrors be real if our eyes aren't real")
);