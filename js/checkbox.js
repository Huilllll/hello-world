<script type="text/javascript" language="javascript>
function selectAllDels(){
	var allCheckBoxs=document.getElementsByName("preDelCheck");
	var desc=document.getElementById("allChecked");
	var selectOrUnselect=false;
	for(var i=0;i<allCheckBoxs.length;i++){
		if(allCheckBoxs[i].checked){
			selectOrUnselect=true;
			break;
		}	
	}
	if(selectOrUnselect){
		_allUnchecked(allCheckBoxs);
	}else{
		_allchecked(allCheckBoxs);
	}
}
function_allchecked(allCheckBoxs){
	for(var i=0;i<allCheckBoxs.length;i++){
		allCheckBoxs[i].checked=flase;
		}	
}<&#47;