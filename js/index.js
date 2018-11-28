var total=4;
		var current=2;
		function showOne()
		{
			for(var i=1;i<=total;i++)
			{
				if(i==current)
				{
					document.getElementById("img"+i).style.display="inline";
					document.getElementsByTagName("span")[i-1].className="currentID";
				}
				else
				{
					document.getElementById("img"+i).style.display="none";
					document.getElementsByTagName("span")[i-1].className="spanID";
				}
			}current++;
			if(current==total+1)
			{
				current=1;
			}
		}
			window.onload = function()
			{
         	 		time=setInterval("showOne()" , 2000);
         	 		var a=document.getElementsByTagName("span");
         	 		var ig=document.getElementsByTagName("img")
				for(var i=0;i<a.length;i++)
				{
  	 			a[i].onclick=function()
				{
  	 			time=setInterval("showOne()" , 2000);
				}
				ig[i].onclick=function()
				{
				var a=window.showModalDialog("secone.html",this.src);
				}	
			}
         	
        	 }
     			 onclick=function showTwo(){
  			 var a=document.getElementsByTagName("span");
  			for(var i=0;i<a.length;i++){
  			 a[i].onclick=function(){
  	 		clearInterval(time);
		this.className ="currentID";
		current=parseInt(this.innerText);
		for(var j=0;j<a.length;j++){
		if(a[j]!=this){
		a[j].className ="spanID";
				}
			}
		}
	}
	for(var i=1;i<=total;i++){
       	 if(i ==current){
       	 document.getElementById("imgBook"+i).style.display ="inline";
       	 document.getElementById("spanID_"+i).className ="currentID";
       	 }
       	 else
      	 {
     	 document.getElementById("imgBook"+i).style.display ="none";
      	 document.getElementById("spanID_"+i).className ="spanID";
      	 }
     	 
		}
}

/* 
	onload=function(){
		var imgs= document.getElementsByTagName("img");
		for(var i=0;i<imgs.length;i++){
			imgs[i].onmouseover=function(){
				this.style.opacity="0.5";
			}
			imgs[i].onmouseout=function(){
				this.style.opacity="1";
			}
		}
	} */