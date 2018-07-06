function getArea (arr){
	if (typeof(arr) === undefined)
	{
		console.log(1);
		return -1;
	}
	else{
		if (arr.length != 2){
			console.log(2);
			return -1;
		}
		else{
			if((parseInt(arr[0]) != arr[0])||((parseInt(arr[1])) != arr[1])){
				console.log(3);
				return -1;
			}
			else{
				if((arr[0]<0)||(arr[1]<0)){
					console.log(4);
					return -1;
				}
				else{
					area = arr[0]*arr[1];
					return area;
				}
			}
		}
	}

};

module.exports = getArea;