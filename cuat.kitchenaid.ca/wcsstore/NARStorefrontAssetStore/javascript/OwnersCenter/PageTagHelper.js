PageTagHelperJS={applianceType:"",setApplianceType:function(applianceType){this.applianceType=applianceType;},getApplianceType:function(){return this.applianceType;}};$(document).ready(function(){if($("#typeOfProblemDDDiv").length){$("#appliance").change(function(){populateProblemList("#appliance","#typeOfProbDropDown");});$("#typeOfProbDropDown").change(function(){verifyProblemDiscVisibility("#typeOfProbDropDown","#typeOfProblemDiv","#typeOfProblem");});}});$(window).load(function(){if($("#typeOfProblemDDDiv").length){if($("#appliance").val()!=""){$("#appliance").trigger("change");}var r2=document.getElementsByName("r2");var selectedr2;if(r2.length>0){for(i=0;i<r2.length;i++){if(r2[i].checked==true){selectedr2=r2[i].value;}}if(selectedr2!=null&&selectedr2=="O"){$("#typeOfProblemDDDiv").css("display","block");$("#typeOfProblemDiv").css("display","none");}else{if(selectedr2!=null&&selectedr2!=""){$("#typeOfProblemDDDiv").css("display","none");$("#typeOfProblemDiv").css("display","block");}}}}});function populateProblemList(applianceId,typeOfProbDropDownId){var appliance=$(applianceId).val();$.getJSON("/javascript/ApplianceProblemType.json",function(json){var typeOfProbList=json[appliance];var options='<option value="">Select</option>';if(typeOfProbList!=null){typeOfProbList.sort();for(i=0;i<typeOfProbList.length;i++){options+='<option value="'+typeOfProbList[i]+'">'+typeOfProbList[i]+"</option>";}}options+='<option value="Others">Other Misc Problem</option>';$(typeOfProbDropDownId).html(options);});}function verifyProblemDiscVisibility(typeOfProbDropDownId,typeOfProblemDivId,typeOfProblemTxtAreaId){if($(typeOfProbDropDownId).val()=="Others"){$(typeOfProblemDivId).css("display","block");$(typeOfProblemTxtAreaId).attr("value","");}else{$(typeOfProblemTxtAreaId).attr("value",$(typeOfProbDropDownId).val());$(typeOfProblemDivId).css("display","none");}}