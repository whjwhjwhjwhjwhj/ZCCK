var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");     //获取S1、S2、S3、S4的ID
var s3 = document.getElementById("s3");
var s4 = document.getElementById("s4");
var a = 0;//a为单行中p标签的ID的变量
var b = 0;//b为多行中p标签的ID的变量
var m = 0; //m为单项选择中div标签的变量
var n = 0; //n为多项选择中div标签的变量
var obj;


function Typedys(type) {  //定义一个类
	this.type=type;       //给this.type赋值参数type
}


/*
 * tpyedys.prototype.type = function(type){  //专门用一个type来传（type）
 *	this.test = type.test;		//this.test 就是type.test
 *	switch(this.type){     //判断this.type
 *												//case就都是type.text
 * }
 */


Typedys.prototype.tp = function() { 			//添加一个方法
	switch(this.type) {											//用switch语句来调用的公开的type
		case "text":                    		 //是text执行下面
			dh();
		break;


		case "textarea":                      //是textarea执行下面
			DH();
		break;


		case "radio":                            //单选
			dxk();																	//调用zt()
		break;


		case "checkbox":
			fxk();
		break;
	}
}


//创建4个属性
//c1 是text      c2  是textarea       c3 是radio          c4是checkbox
c1 = new Typedys("text");					
c2 = new Typedys("textarea");  
c3 = new Typedys("radio");
c4 = new Typedys("checkbox");


function cj(event) {     	 //点击事件   传参
	event.tp();			//  参数对象调用
}
/*
 *单行的代码
 */
function dh() {
	var left =document.getElementById("leftone");  //获取leftone的ID
	var te = document.createElement("p");        //创建p标签并给te
	var span = document.createElement("span");   //创建span标签并给span
	var span1 = document.createElement("span");   //创建span标签给span1
	var inp = document.createElement("input"); //创建input标签并给inp
	te.setAttribute("onclick","GU(event)")         // 添加点击事件 GU给p标签
	te.setAttribute("ondblclick","sanchu()");  //添加双击事件sanchu给跑p标签
	inp.setAttribute("type","text");           //input是text格式
	te.setAttribute("id","tedh"+a);						//给动态生成的p标签取ID
	inp.setAttribute("disabled","");         //让这个input标签不能获取焦点
	left.appendChild(te);                  //把p标签放到left中
	te.appendChild(span);                //把span、span1、inp放到te中
	te.appendChild(span1);
	te.appendChild(inp);
	te.className = "dhpcla";
	inp.className = "inpcla";						//input的class样式
	span.className = "spcla1";
	span1.className = "spcla2";
	span.innerHTML = "未命名";							//span的innerHTML
	a++;	
}


/*
 *多行的代码
 */


function DH() {
	var left =document.getElementById("leftone");   //获取leftone的ID
	var te = document.createElement("p");          //创建p标签并给te
	var span = document.createElement("span");			//创建span标签并给span
	var span1 = document.createElement("span");   //创建span标签给span1
	var inp = document.createElement("textarea");    //创建textarea标签并给inp
	te.setAttribute("onclick","GU(event)")         // 添加点击事件GU给p标签
	te.setAttribute("ondblclick","sanchu()");  //添加双击事件sanchu给跑p标签
	te.setAttribute("id","teDH"+b);									//给p添加ID名
	inp.setAttribute("disabled","");										//让这个input标签不能获取焦点
	left.appendChild(te);                             //把te移动到left的div中
	te.appendChild(span);															//把span、span1、inp放到te中
	te.appendChild(span1);
	te.appendChild(inp);
	te.className = "DHpcla";                        //te 的classname的名字是pcla
	inp.className = "inpcla";
	span.className = "spcla1";
	span1.className = "spcla2";
	span.innerHTML = "未命名";	                    //span的innerHTML是未命名
	b++;
}


/*
 *单选框的代码
 */


function dxk() {
	var left =document.getElementById("leftone");        //获取ID
	var div = document.createElement("div");			//创建div
	var tex = document.createElement("p");         //创建p标签
	var span1 = document.createElement("span");   //创建span标签给span1
	div.setAttribute("id","dxdiv"+m);       //设置ID  ID是个变量
	div.setAttribute("onclick","GU(event)");     //添加点击事件给  div标签
	div.setAttribute("ondblclick","sanchu()");  //添加双击事件sanchu给跑div标签
	left.appendChild(div);		//把div放到leftone中
	div.appendChild(tex);     //把p标签放到div中
	div.appendChild(span1);						//把span1放到div标签中
	div.className = "dxkdivcla";       //div的样式是divcla	
	tex.innerHTML = "未命名";		// p的内容为未命名
	tex.className = "texcla";
	span1.className = "spcla2";
	dxkONE();     //调用3次dx()
	dxkONE();
	dxkONE();
	m++;     //变量m自加
}


function dxkONE() {     // 定义dxkONE
	var div =document.getElementById("dxdiv"+m);    //获取动态生成的ID名
	var te = document.createElement("p");      //创建P标签
	var inp = document.createElement("input");			//创建input标签
	var span = document.createElement("span");        //创建span标签
	inp.setAttribute("type","radio");     //是一个单选框
	inp.setAttribute("name","xx"+m);    //调用了3次，这3次的name一样才能选择1个
	inp.setAttribute("disabled","");   //左边的input的标签不能选择
	div.appendChild(te);    //把p标签移动到div中
	te.appendChild(inp);   //input和span标签都移动到p标签中
	te.appendChild(span);
	te.className = "pcla";   //p标签的样式是Ppcla
	span.className = "spcla";     //span的样式是spcla
	span.innerHTML = "未命名1";      // span的内容是未命名1
}


/*
 *复选框的代码
 */


function fxk() {
	var left =document.getElementById("leftone");     //获取leftone的ID
	var div = document.createElement("div");          //创建div
	var tex = document.createElement("p");            //创建p标签
	var span1 = document.createElement("span");   //创建span标签给span1
	div.setAttribute("id","fxdiv"+n); 							//给创建的div名ID
	div.setAttribute("onclick","GU(event)");			//添加点击事件给  div标签
	div.setAttribute("ondblclick","sanchu()");  //添加双击事件sanchu给跑div标签
	left.appendChild(div);			//把未命名的p标签放到leftone中
	div.appendChild(tex);         //把tex放到div中
	div.appendChild(span1);						//把span1放到p标签中
	div.className = "fxkdivcla";      //div用名字为divcla的class
	tex.className = "texcla";			//p标签的样式是texcla 、它的内容是未命名
	tex.innerHTML = "未命名";
	span1.className = "spcla2";
	fxkONE();      //调用3次
	fxkONE();
	fxkONE();
	n++;
}


function fxkONE() {
	var div = document.getElementById("fxdiv"+n);				//获取上面动态生成的div的ID
	var te = document.createElement("p");           //创建p标签
	var inp = document.createElement("input");        //创建input标签
	var spa = document.createElement("span");							//创建span
	inp.setAttribute("type","checkbox");             //input是复选框
	inp.setAttribute("disabled","");              //让这个input标签不能获取焦点
	div.appendChild(te);					//把p标签放到div中
	te.appendChild(inp);       //把input标签分别放到对应的p标签中
	te.appendChild(spa);        //把3span标签分别放到对应的p标签中
	te.className = "pcla";       //p标签名字为pcla的class
	inp.className = "inpacla";      //input标签名字为inpacla的class
	spa.className = "spcla";      //span标签名字为spcla的class
	spa.innerHTML = "未命名";      //span的innerHTML为未命名
}


/*
 *下面是创建右边总体的标签
 */


function GU(event) {    //调用GU（参数）
	obj = event.currentTarget;
	var div = document.getElementById("bjzd");  // 获取ID为bjzd的div
	div.innerHTML = null;       //每一次调用都清空div中所有内容
	var div1 = document.createElement("div");   //创建3个div
	var div2 = document.createElement("div");
	var div3 = document.createElement("div");
	var p1 = document.createElement("p");  //创建p标签
	var inpu1 = document.createElement("input");  // 创建input标签
	var p2 = document.createElement("p"); // 创建p标签
	var inpu2 = document.createElement("textarea");   //创建p标签
	div2.setAttribute("id","divv");   //给第二个div创建ID      ID为变量
	inpu1.setAttribute("type","text");		//inpu1的type是tex
	inpu1.value = "未命名";			//inpu1里的值是未命名
	inpu2.value = "提示";
	p1.innerHTML = "标题";   //第一个p标签的内容是标题
	p2.innerHTML = "提示";   //  第二个p标签的内容是提示
	p1.className = "pcla";
	p2.className = "pcla"; 		//p1  p2 都用样式名为pcla
	div.appendChild(div1);    //   把div1 、div2 、 div3都放到ID为bjzd的div中                 
	div.appendChild(div2);
	div.appendChild(div3);																				
	div1.appendChild(p1);		//   把p1  inpu1都放到div1中
	div1.appendChild(inpu1);
	div3.appendChild(p2);			// 把p2  inpu2都放到div3中
	div3.appendChild(inpu2);
	var leftone = document.getElementById("leftone");
		for(let p=0; p<leftone.querySelectorAll("p.dhpcla").length; p++) {
			if(obj.id == "tedh"+p) {
				teONE();        //如果ID是"tedh"+p时调用  teONE
				A(c1);					//调用A函数
			}
		}

		for(let p=0; p<leftone.querySelectorAll("p.DHpcla").length; p++) {
			if(obj.id == "teDH"+p) {
				teaONE();				//如果ID是"teDH"+p时调用   teaONE
				djfz();
				A(c2);   			//调用A函数
			}
		}

		for(let p=0; p<leftone.querySelectorAll("div.dxkdivcla").length; p++) {
			if(obj.id == "dxdiv"+p) {
				dxONE();       //如果ID是"dxdiv"+p时调用   dxONE
				dxONE();
				dxONE();
				A(c3);   			//调用A函数
			}
		}

		for(let p=0; p<leftone.querySelectorAll("div.fxkdivcla").length; p++) {
			if(obj.id == "fxdiv"+p) {
				fxONE();
				fxONE();     //如果ID是"fxdiv"+p时调用   fxONE
				fxONE();
				A(c4);   			//调用A函数
			}
		}
}                                                         


function teONE() {
	var div = document.getElementById("divv");   //获取ID名 为divv的动态生成的div
	var te = document.createElement("p");     //动态生成p标签
	var inpu = document.createElement("input");   //动态生成input标签
	inpu.setAttribute("type","text");     //input的type是text
	inpu.setAttribute("onblur","G(c1)");				//给复选按钮添加点击事件
	div.appendChild(te);     //把p标签和input标签放到div中
	div.appendChild(inpu);
	te.className = "pcla";    //p标签的样式是pcla
	te.innerHTML = "默认值";    //	p标签的内容是默认值
}


function teaONE() {
	var div = document.getElementById("divv");    //获取ID名 为divv的动态生成的div
	var te = document.createElement("p");     //动态生成p标签
	var inp = document.createElement("textarea");			 //动态生成textarea标签
	inp.setAttribute("onblur","G(c2)");				//给复选按钮添加点击事件
	div.appendChild(te);    //把p标签和input标签放到div中
	div.appendChild(inp);
	te.className = "pcla";     //p标签的样式是pcla
	te.innerHTML = "默认值";		 //	p标签的内容是默认值
}


function dxONE() {
	var div = document.getElementById("divv");		 //获取ID名 为divv的动态生成的div				
	var te = document.createElement("p");			 //动态生成p标签	
	var inpu = document.createElement("input");     //动态生成两个input标签
	var input = document.createElement("input");
	inpu.setAttribute("onclick","G(c3)");				//给复选按钮添加点击事件
	inpu.setAttribute("type","radio");   //inpu的type是radio  
	inpu.setAttribute("name","xxx"+m);      //inpu的name是xxx
	div.appendChild(te);          //把p标签放到div中
	te.appendChild(inpu);			//把input和input的input标签放到p标签中		
	te.appendChild(input);
	te.className = "pcla";     //p标签的样式是pcla
	inpu.className = "rxzkinp";			//divv中p标签的第一个input的class样式是rxzkinp
	input.className = "rsrkinp";			//divv中p标签的第二个input的class样式是rsrkinp
	input.value = "未命名1";    //input标签的value是未命名
}


function fxONE() {
	var div = document.getElementById("divv"); 	 //获取ID名 为divv的动态生成的div
	var te = document.createElement("p");					//动态生成p标签	
	var inpu = document.createElement("input");   //动态生成两个input标签
	var input = document.createElement("input");
	inpu.setAttribute("onclick","G(c4)");				//给复选按钮添加点击事件
	inpu.setAttribute("type","checkbox");			 //inpu的type是checkbox  
	div.appendChild(te);				//p标签放到div中
	te.appendChild(inpu);        //两个input都放到p标签中
	te.appendChild(input);
	te.className = "pcla";			//p标签的样式是pcla
	inpu.className = "rxzkinp";			//divv中p标签的第一个input的class样式是rxzkinp
	input.className = "rsrkinp";			//divv中p标签的第二个input的class样式是rsrkinp
	input.value = "提示";			//input标签的value是未命名
}


/*
 * 是text和textarea的时候是失去焦点事件
 * 是radio和时候checkbox的时候是点击事件
 * 对象调用forInp()方法
 */


function G(event) {
	event.forInp();
}


Typedys.prototype.forInp = function() {				//给Typedys添加forInp方法				
	let bjzd = document.getElementById("bjzd");				//获取ID为bjzd的div
	let divv = document.getElementById("divv");				//获取ID为divv的div
//点击那个div就是那个div  ， 把bjzd中的第一个子元素的input的值赋值给obj的第一个子元素的内容
	obj.firstChild.innerHTML = bjzd.firstChild.querySelector("input").value;
//obj中样式为spcla2的span的内容 = divv中最后一个子元素中的textarea的内容
	obj.querySelector(".spcla2").innerHTML = bjzd.lastChild.querySelector("textarea").value;
	 	if(obj.firstChild.innerHTML == "") {				//如果obj的第一个子元素的内容为空
 			alert("标题不能为空!");				//就弹出“标题不能为空！”
 		}

 		if(this.type == "text") {				//如果this.type是text
				//obj中唯一的input的值 等于 divv中唯一的input的值
			obj.querySelector("input").value = divv.querySelector("input").value;
		}

		if(this.type == "textarea") {				//如果this.type是textarea
				//obj中唯一的textarea的值 等于 divv中唯一的textarea的值
			obj.querySelector("textarea").value = divv.querySelector("textarea").value;
		}

		if(this.type == "radio") {				//如果this.type是radio
				for(let p=0; p<obj.childNodes.length-1; p++) {
					//obj中所有的input的checked 等于 divv中所有的input样式是rxzkinp的checked
					obj.querySelectorAll("input")[p].checked = divv.querySelectorAll("input.rxzkinp")[p].checked;
					//obj中所有的span的内容 等于 divv中所有的input样式是rsrkinp的内容
					obj.querySelectorAll("span.spcla")[p].innerHTML = divv.querySelectorAll("input.rsrkinp")[p].value;
				}
		}

		if(this.type == "checkbox") {				//如果this.type是radio
				for(let p=0; p<obj.childNodes.length-1; p++) {
					//obj中所有的input的checked = divv中所有的input样式是rxzkinp的checked
					obj.querySelectorAll("input")[p].checked = divv.querySelectorAll("input.rxzkinp")[p].checked;
					//obj中所有的span的内容 等于 divv中所有的input样式是rsrkinp的value
					obj.querySelectorAll("span.spcla")[p].innerHTML = divv.querySelectorAll("input.rsrkinp")[p].value;
				}
		}
}


/*
 * 删除事件
 */


function sanchu() {				//点击事件，删除（隐藏） 由于创建右边的时候是由ID来
	let bjzd = document.getElementById("bjzd");				//获取ID为bjzd的div
		for(let p=0; p<bjzd.childNodes.length; p++){
			bjzd.querySelectorAll("div")[p].style.display = "none";				//bjzd中所有的div的样式隐藏
		}
			obj.style.display = "none";				//点击谁的样式隐藏
	// obj.parentNode.removeChild(obj);
}


/*
 * 当再次点击时
 * 左边的所有值传到给右边
 */


function A(event) {
	event.djfz();				//对象调用djfz（点击赋值）
}


Typedys.prototype.djfz = function() {
	let bjzd = document.getElementById("bjzd");				//获取ID为bjzd的div
	let divv = document.getElementById("divv");				//获取ID为divv的div

//点击那个div就是那个div  ， 把obj的第一个子元素的内容 = bjzd中的第一个子元素的input的值
	bjzd.firstChild.querySelector("input").value = obj.firstChild.innerHTML;
//obj中样式为spcla2的span的内容 = divv中最后一个子元素中的textarea的内容
	bjzd.lastChild.querySelector("textarea").value = obj.querySelector(".spcla2").innerHTML;
		if(this.type == "text") {				//如果this.type是text
			//divv中的input的value值 = obj中input的值
			divv.querySelector("input").value = obj.querySelector("input").value;
		}
		if(this.type == "textarea") {				//如果this.type是textarea
			//divv中的textarea的value值 = obj中textarea的值
			divv.querySelector("textarea").value = obj.querySelector("textarea").value;
		}

		if(this.type == "radio") {				//如果this.type是radio

			for(let p=0; p<obj.childNodes.length-2; p++) {
				//divv中所有的input样式是rxzkinp的checked = obj中所有的input的checked
				
				divv.querySelectorAll("input.rxzkinp")[p].checked = obj.querySelectorAll("input")[p].checked;
				//divv中所有的input样式是rsrkinp的value = obj中所有的span的内容
				divv.querySelectorAll("input.rsrkinp")[p].value = obj.querySelectorAll("span.spcla")[p].innerHTML;
			}
		}

		if(this.type == "checked") {				//如果this.type是checked
			for(let p=0; p<obj.childNodes.length-2; p++) {
				//divv中所有的input样式是rxzkinp的checked = obj中所有的input的checked 
				divv.querySelectorAll("input.rxzkinp")[p].checked = obj.querySelectorAll("input")[p].checked;
				//divv中所有的input样式是rsrkinp的value = obj中所有的span的内容 
				divv.querySelectorAll("input.rsrkinp")[p].value = obj.querySelectorAll("span.spcla")[p].innerHTML;
			}
		}
}