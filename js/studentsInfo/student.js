// JavaScript Document
//删除函数
function deletefunc(obj){
	var tr = obj.parentNode.parentNode;
	tr.parentNode.removeChild(tr);
}

//添加函数
function addfunc(){
	var number = prompt("输入学号");
	var name = prompt("输入姓名");
	if(number!=null&&number!=""&&name!=null&&name!=""){
		var tr = document.createElement("tr");
		var td1 = document.createElement("td");
		var td2 = document.createElement("td");
		var td3 = document.createElement("td");
		td1.innerHTML=number;
		td2.innerHTML=name;
		td3.innerHTML="<a href='javascript:;' onclick='deletefunc(this)'>删除</a>"
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		var node = document.getElementById("table");
		node.appendChild(tr);
	}else alert("姓名学号不能为空！");
}

  function bgcChange(obj)
     {
        obj.onmouseover=function(){
            obj.style.backgroundColor="#f2f2f2";
        }
        obj.onmouseout=function(){
            obj.style.backgroundColor="#fff";
        }
	 }
	 
	 window.onload = function(){
                  
     // 鼠标移动改变背景,可以通过给每行绑定鼠标移上事件和鼠标移除事件来改变所在行背景色。
        var tr=document.getElementsByTagName("tr");
          for(var i= 0;i<tr.length;i++)
          {
              bgcChange(tr[i]);
          }  
		
     
	 
	 }