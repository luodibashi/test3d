// 初始值 最大长度12 每次显示6个长度
// var AllData = [
// 	[1,2,3,4,5,6],
// 	[7,8,9,10,11,12],
// 	[13,14,15,16,17,18],
// 	[19,20,21,22,23,24],
// 	[25,26,27,28,29,30],
// 	[31,32,33,34,35,36],
// 	[37,38,39,40,41,42],
// 	[43,44,45,46,47,48],
// 	[49,50,51,52,53,54],
// 	[55,56,57,58,59,60],
// 	[61,62,63,64,65,66],
// 	[67,68,69,70,71,72]
// ]
var AllData = [
	[1,2,3,4,5,6],       //1
	[7,8,9,10,11,12],       //2
	[13,14,15,16,17,18],       //3
	[19,20,21,22,23,24],       //4
	[25,26,27,28,29,30],       //5
	[31,32,33,34,35,36],       //6
	[37,38,39,40,41,42],       //7
	[43,44,45,46,47,48],       //8
	[49,50,51,52,53,54],       //9
	[55,56,57,58,59,60],       //10
	[61,62,63,64,65,66],       //11
	[67,68,69,70,71,72]       //12
];
var targetNumber = 1;
// console.log(targetNumber);
var baseData = [];
// baseData.push()
for(var i=0; i<6; i++){
	baseData.push(AllData[i]);
}
// console.log(baseData);

// 默认显示数据

$('.chooseBox-left').click(function(){
	baseData = [];
	if(targetNumber==1){
		targetNumber = 12;
		baseData.push(AllData[11]);
		baseData.push(AllData[0]);
		baseData.push(AllData[1]);
		baseData.push(AllData[2]);
		baseData.push(AllData[3]);
		baseData.push(AllData[4]);
	} else {
		targetNumber --;
		if(targetNumber==11){
			baseData.push(AllData[10]);
			baseData.push(AllData[11]);
			baseData.push(AllData[0]);
			baseData.push(AllData[1]);
			baseData.push(AllData[2]);
			baseData.push(AllData[3]);
		} else if(targetNumber==10){
			baseData.push(AllData[9]);
			baseData.push(AllData[10]);
			baseData.push(AllData[11]);
			baseData.push(AllData[0]);
			baseData.push(AllData[1]);
			baseData.push(AllData[2]);
		} else if(targetNumber==9){
			baseData.push(AllData[8]);
			baseData.push(AllData[9]);
			baseData.push(AllData[10]);
			baseData.push(AllData[11]);
			baseData.push(AllData[0]);
			baseData.push(AllData[1]);
		} else if(targetNumber==8){
			baseData.push(AllData[7]);
			baseData.push(AllData[8]);
			baseData.push(AllData[9]);
			baseData.push(AllData[10]);
			baseData.push(AllData[11]);
			baseData.push(AllData[0]);
		} else if(targetNumber==7){
			baseData.push(AllData[6]);
			baseData.push(AllData[7]);
			baseData.push(AllData[8]);
			baseData.push(AllData[9]);
			baseData.push(AllData[10]);
			baseData.push(AllData[11]);
		} else if(targetNumber==6){
			baseData.push(AllData[5]);
			baseData.push(AllData[6]);
			baseData.push(AllData[7]);
			baseData.push(AllData[8]);
			baseData.push(AllData[9]);
			baseData.push(AllData[10]);
		} else if(targetNumber==5){
			baseData.push(AllData[4]);
			baseData.push(AllData[5]);
			baseData.push(AllData[6]);
			baseData.push(AllData[7]);
			baseData.push(AllData[8]);
			baseData.push(AllData[9]);
		} else if(targetNumber==4){
			baseData.push(AllData[3]);
			baseData.push(AllData[4]);
			baseData.push(AllData[5]);
			baseData.push(AllData[6]);
			baseData.push(AllData[7]);
			baseData.push(AllData[8]);
		} else if(targetNumber==3){
			baseData.push(AllData[2]);
			baseData.push(AllData[3]);
			baseData.push(AllData[4]);
			baseData.push(AllData[5]);
			baseData.push(AllData[6]);
			baseData.push(AllData[7]);
		} else if(targetNumber==2){
			baseData.push(AllData[1]);
			baseData.push(AllData[2]);
			baseData.push(AllData[3]);
			baseData.push(AllData[4]);
			baseData.push(AllData[5]);
			baseData.push(AllData[6]);
		} else if(targetNumber==1){
			baseData.push(AllData[0]);
			baseData.push(AllData[1]);
			baseData.push(AllData[2]);
			baseData.push(AllData[3]);
			baseData.push(AllData[4]);
			baseData.push(AllData[5]);
		}
	}
	// console.log(baseData)
	// console.log(targetNumber)
	showTable();
});

$('.chooseBox-right').click(function(){
	baseData = [];
	if(targetNumber==12){
		targetNumber = 1;
		baseData.push(AllData[0]);
		baseData.push(AllData[1]);
		baseData.push(AllData[2]);
		baseData.push(AllData[3]);
		baseData.push(AllData[4]);
		baseData.push(AllData[5]);
		// console.log('12'+baseData)
	} else {
		targetNumber ++;
		if(targetNumber==12){
			baseData.push(AllData[0]);
			baseData.push(AllData[1]);
			baseData.push(AllData[2]);
			baseData.push(AllData[3]);
			baseData.push(AllData[4]);
			baseData.push(AllData[5]);
		} else if(targetNumber==11){
			baseData.push(AllData[10]);
			baseData.push(AllData[11]);
			baseData.push(AllData[0]);
			baseData.push(AllData[1]);
			baseData.push(AllData[2]);
			baseData.push(AllData[3]);
		} else if(targetNumber==10){
			baseData.push(AllData[9]);
			baseData.push(AllData[10]);
			baseData.push(AllData[11]);
			baseData.push(AllData[0]);
			baseData.push(AllData[1]);
			baseData.push(AllData[2]);
		} else if(targetNumber==9){
			baseData.push(AllData[8]);
			baseData.push(AllData[9]);
			baseData.push(AllData[10]);
			baseData.push(AllData[11]);
			baseData.push(AllData[0]);
			baseData.push(AllData[1]);
		} else if(targetNumber==8){
			baseData.push(AllData[7]);
			baseData.push(AllData[8]);
			baseData.push(AllData[9]);
			baseData.push(AllData[10]);
			baseData.push(AllData[11]);
			baseData.push(AllData[0]);
		} else if(targetNumber==7){
			baseData.push(AllData[6]);
			baseData.push(AllData[7]);
			baseData.push(AllData[8]);
			baseData.push(AllData[9]);
			baseData.push(AllData[10]);
			baseData.push(AllData[11]);
		} else if(targetNumber==6){
			baseData.push(AllData[5]);
			baseData.push(AllData[6]);
			baseData.push(AllData[7]);
			baseData.push(AllData[8]);
			baseData.push(AllData[9]);
			baseData.push(AllData[10]);
		} else if(targetNumber==5){
			baseData.push(AllData[4]);
			baseData.push(AllData[5]);
			baseData.push(AllData[6]);
			baseData.push(AllData[7]);
			baseData.push(AllData[8]);
			baseData.push(AllData[9]);
		} else if(targetNumber==4){
			baseData.push(AllData[3]);
			baseData.push(AllData[4]);
			baseData.push(AllData[5]);
			baseData.push(AllData[6]);
			baseData.push(AllData[7]);
			baseData.push(AllData[8]);
		} else if(targetNumber==3){
			baseData.push(AllData[2]);
			baseData.push(AllData[3]);
			baseData.push(AllData[4]);
			baseData.push(AllData[5]);
			baseData.push(AllData[6]);
			baseData.push(AllData[7]);
		} else if(targetNumber==2){
			baseData.push(AllData[1]);
			baseData.push(AllData[2]);
			baseData.push(AllData[3]);
			baseData.push(AllData[4]);
			baseData.push(AllData[5]);
			baseData.push(AllData[6]);
		}
	}
	// console.log(baseData)
	// console.log(targetNumber)
	showTable();
});
var showTable = function(){
	// console.log(baseData)
	$.each(baseData,function(i,base){
		var childBox = "";
		childBox += "<div class='child'><ul>"+"<li>"+base[0]+"</li>"+"<li>"+base[1]+"</li>"+"<li>"+base[2]+"</li>"+"<li>"+base[3]+"</li>"+"<li>"+base[4]+"</li>"+"<li>"+base[5]+"</li>"+"</ul></div>";
		$("#box").append(childBox);
	});
};
// showTable();
var nowValue = 0;
var timer = setInterval(function(){
	nowValue+=1;
	// console.log(nowValue);
	if(nowValue===100){
		nowValue = 0;
		clearInterval(timer);
	}
	$('#progress').val(nowValue);
},200);


var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
ctx.fillStyle = '#ff0000';
ctx.fillRect(0,0,150,75);
