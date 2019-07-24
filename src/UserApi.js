export const API = "https://api.jsonbin.io/b/5c547bb0a3fb18257acc2a7c/3";

// function checkStatus(response){
// 	if(response){
// 		return Promise.resolve(response);
// 	}else{
// 		return Promise.reject(new Error(response.statusText));
// 	}
// }

// export function postData(data){

//     const { name, email, birthday, zip, gender, newsletter, profileImage } = data;

// 	const config = {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify({ name, email, birthday, zip, gender, newsletter, profileImage })
// 	}

// 	fetch(api, config)
// 		.then(checkStatus)
// 		.then(res => res.json())
// 		.then(data => console.log(data));

// }
