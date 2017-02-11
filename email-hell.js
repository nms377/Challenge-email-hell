var emailLog = require('./email_log.json');


//	Joe's solution

var duplicates = emailLog.emails.reduce((prev, curr, i, arr) => {

	if(!prev.hasOwnProperty( curr.email ) ) {
	prev[ curr.email ] = 0;
	}
	prev[curr.email]++;
	return prev;

}, {});	// create an empty object to initialize the first object


console.log('duplicates', duplicates);

module.exports = {
	duplicates: duplicates
};