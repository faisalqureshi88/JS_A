const account_Id = 144553
let account_email = "qureshi.faisal@gmail.com"
var account_password = "12345"
account_city = "Jaipur"
let account_state;
// account_Id = 3 //not allowed

account_email = "hc@hmail.com"
account_password = "211112"
account_city = "Delhi"
account_country = null

/*
Never used var variable
beacause of issue in block scped and funcational scoped
*/

console.log(account_Id);
console.table([account_Id, account_email, account_password, account_city, account_state, account_country])

