dojo.require("wc.service.common");var ifCustProfDetSubmit=false;OCCustomProfileDetailsHelper={prepareSubmit:function(form){reWhiteSpace=new RegExp(/^\s+$/);var emailOK=true;form.email1.value=trim(form.email1.value);if(form.email1!=null&&reWhiteSpace.test(form.email1.value)||form.email1.value==""){document.getElementById("emailValidationErrorMsg").innerHTML='<div class="field_error_holder" id="emailValidationErrorMsg"><span id="email_Error" class="field_error">'+MessageHelper.messages.ERROR_EmailEmpty+"</span></div>";emailOK=false;document.getElementById("TopValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_TOP;}else{if(!MessageHelper.isValidUTF8length(form.email1.value,256)){document.getElementById("emailValidationErrorMsg").innerHTML='<div class="field_error_holder" id="emailValidationErrorMsg"><span id="email_Error" class="field_error">'+MessageHelper.messages.ERROR_EmailTooLong+"</span></div>";emailOK=false;document.getElementById("TopValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_TOP;}else{if(!MessageHelper.isValidEmail(form.email1.value)||form.email1.value.substring(0,3)=="www"){document.getElementById("emailValidationErrorMsg").innerHTML='<div class="field_error_holder" id="emailValidationErrorMsg"><span id="email_Error" class="field_error">'+MessageHelper.messages.ERROR_EmailEmpty+"</span></div>";emailOK=false;document.getElementById("TopValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_TOP;}}}if(ifCustProfDetSubmit){return;}if((emailOK==true)){ifCustProfDetSubmit=true;document.getElementById("emailValidationErrorMsg").innerHTML='<div class="field_error_holder" id="emailValidationErrorMsg"><span id="email_Error" class="field_error"></span></div>';document.getElementById("TopValidationErrorMsg").innerHTML='<span id="TopValidationErrorMsg" class="field_error">&nbsp;</span>';form.submit();}},goToPrevPage:function(url){document.forms[0].action=url;document.forms[0].submit();}};