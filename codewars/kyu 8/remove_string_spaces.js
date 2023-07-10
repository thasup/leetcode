/*
 * Question : Remove String Spaces
 *
 * Write a function that removes the spaces from the string, then return the resultant string.
*/
function noSpace(str = ""){
  return str.replaceAll(" ", "");
}

console.log(
	noSpace("sdfss sdFSe SEfsd seRSE"),
	noSpace("fdgr rgedrgdS efs Sgs fsdg "),
);