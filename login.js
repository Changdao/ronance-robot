const request = require('request');

let timestamp = new Date().valueOf();

let options = {
        //host:"dataapi.linkeye.com",
        url: 'http://test.ronance.net:8084/api/web/1_0_0/doLogin',
        //url:'https://dataapi.linkeye.com/nonbank/gateway/proService',
        //path:"/nonbank/gateway/proService",
        method: 'GET',
		qs:{
			callback: 'jQuery112405624541773343337_'+timestamp,
			userName:'1111111',
			countryCode:86,
			loginPwd:'gbv3N2/QrKRlcXXV5aESlG84e7nJ7mI6dLWjhXLogk+iIxms4xDwFLnNGNovp4U3sMrLj/oqFzWVWHwO6uT1LyZ/lbTXXG8TZEqofzZWPWlVWe6aOnpZ6bNru2BRHkRLsuhI1Bgye1WxtU5aaIYZ8kSHUZYdPvDaKci/xgUEhm8=',
			imgCode:'',
			_:timestamp

		}
};

request(options,function(err,res,body){
	console.log(body);
});