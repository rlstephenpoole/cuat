if(typeof(MessageHelper)=="undefined"||!MessageHelper||!MessageHelper.topicNamespace){MessageHelper={messages:{},identifier:"",alternateErrorTextId:null,alternateMessageTextId:null,getCurrentYear:function(){return new Date().getFullYear();},getCurrentMonth:function(){return new Date().getMonth()+1;},getCurrentDay:function(){return new Date().getDate();},getRenderContextProperty:function(context,propertyName){console.debug("enter getRenderContextProperty with propertyName = "+propertyName);if(context==null){console.debug("context is null. Return null...");return null;}var result=context.properties[propertyName];console.debug("the found property value is: "+result);return result;},setMessage:function(key,msg){this.messages[key]=msg;},displayErrorMessage:function(msg){if(this.messages.ERROR_MESSAGE_TYPE!=null&&this.messages.ERROR_MESSAGE_TYPE!="undefined"){var MsgType=this.messages.ERROR_MESSAGE_TYPE;msg=MsgType+msg;}var duplicateErrorMsg=true;var duplicateMessageArea=true;if(MessageHelper.alternateErrorTextId==null||dojo.trim(MessageHelper.alternateErrorTextId)==""||!dojo.byId(MessageHelper.alternateErrorTextId)){MessageHelper.alternateErrorTextId="ErrorMessageText";duplicateErrorMsg=false;}if(MessageHelper.alternateMessageTextId==null||dojo.trim(MessageHelper.alternateMessageTextId)==""||!dojo.byId(MessageHelper.alternateMessageTextId)){MessageHelper.alternateMessageTextId="MessageArea";duplicateMessageArea=false;}dojo.byId(MessageHelper.alternateErrorTextId).className="error_msg";msg1=msg.replace("&amp;apos;","'");dojo.byId(MessageHelper.alternateErrorTextId).innerHTML=msg1;if(duplicateErrorMsg){dojo.byId("ErrorMessageText").className="error_msg";dojo.byId("ErrorMessageText").innerHTML=msg;}dojo.byId(MessageHelper.alternateMessageTextId).style.display="block";dojo.byId(MessageHelper.alternateMessageTextId).focus();if(duplicateMessageArea){dojo.byId("MessageArea").style.display="block";}setTimeout("dojo.byId('"+MessageHelper.alternateErrorTextId+"').focus()",2000);if(dojo.byId("MessageText")!=null&&dojo.byId("MessageText")!="undefined"){dojo.byId("MessageText").style.display="none";}},displayStatusMessage:function(msg){var duplicateErrorMsg=true;var duplicateMessageArea=true;if(MessageHelper.alternateErrorTextId==null||dojo.trim(MessageHelper.alternateErrorTextId)==""||!dojo.byId(MessageHelper.alternateErrorTextId)){MessageHelper.alternateErrorTextId="ErrorMessageText";duplicateErrorMsg=false;}if(MessageHelper.alternateMessageTextId==null||dojo.trim(MessageHelper.alternateMessageTextId)==""||!dojo.byId(MessageHelper.alternateMessageTextId)){MessageHelper.alternateMessageTextId="MessageArea";duplicateMessageArea=false;}dojo.byId(MessageHelper.alternateErrorTextId).className="status_msg";dojo.byId(MessageHelper.alternateErrorTextId).innerHTML=msg;if(duplicateErrorMsg){dojo.byId("ErrorMessageText").className="status_msg";dojo.byId("ErrorMessageText").innerHTML=msg;}dojo.byId(MessageHelper.alternateMessageTextId).style.display="block";dojo.byId(MessageHelper.alternateMessageTextId).focus();if(duplicateMessageArea){dojo.byId("MessageArea").style.display="block";}setTimeout("dojo.byId('"+MessageHelper.alternateErrorTextId+"').focus()",2000);},hideAndClearMessage:function(){if(dojo.byId("ErrorMessageText")!=null&&dojo.byId("ErrorMessageText")!="undefined"){dojo.byId("ErrorMessageText").innerHTML="";}if(dojo.byId("MessageArea")!=null&&dojo.byId("MessageArea")!="undefined"){dojo.byId("MessageArea").style.display="none";}},hideAndClearMessageInCustomAreas:function(errorMessageTextId,messageAreaId){if(dojo.byId(errorMessageTextId)!=null&&dojo.byId(errorMessageTextId)!="undefined"){dojo.byId(errorMessageTextId).innerHTML="";}if(dojo.byId(messageAreaId)!=null&&dojo.byId(messageAreaId)!="undefined"){dojo.byId(messageAreaId).style.display="none";}},displayErrorMessageInCustomLocation:function(errorMessageTextId,messageAreaId,msg){if(this.messages.ERROR_MESSAGE_TYPE!=null&&this.messages.ERROR_MESSAGE_TYPE!="undefined"){var MsgType=this.messages.ERROR_MESSAGE_TYPE;msg=MsgType+msg;}dojo.byId(errorMessageTextId).className="error_msg";dojo.byId(errorMessageTextId).innerHTML=msg;dojo.byId(errorMessageTextId).style.display="block";dojo.byId(messageAreaId).style.display="block";},displayStatusMessageInCustomLocation:function(statusMessageTextId,messageAreaId,msg){dojo.byId(statusMessageTextId).className="status_msg";dojo.byId(statusMessageTextId).innerHTML=msg;dojo.byId(statusMessageTextId).style.display="block";dojo.byId(messageAreaId).style.display="block";},formErrorHandle:function(serviceResponse,formName){this.formErrorHandleClient(serviceResponse.errorMessageParam,serviceResponse.errorMessage);},formErrorHandleClient:function(id,errorMessage){var element=dojo.byId(id);if(errorMessage==null){console.debug("formErrorHandleClient: The error message is null.");return;}if(element){if(this.identifier!=(id+"_tooltip")){this.identifier=id+"_tooltip";var node=document.createElement("span");var imgDirPath=getImageDirectoryPath();if(dojo.isIE<7){node.innerHTML=errorMessage+"<iframe id='errorMessageIFrame' scrolling='no' frameborder='0' src='"+imgDirPath+"images/empty.gif'></iframe>";}else{node.innerHTML=errorMessage;}var tooltip=new dijit.Tooltip({connectId:[id]},node);tooltip.startup();console.log("created",tooltip,tooltip.id);element.focus();tooltip.open(element);dojo.connect(element,"onblur",tooltip,"close");dojo.connect(element,"onblur",tooltip,"destroy");dojo.connect(element,"onblur",this,"clearCurrentIdentifier");var oIframe=dojo.byId("paymetricIframe");if(null!=oIframe){var y=(oIframe.contentWindow||oIframe.contentDocument);if(y.document){y=y.document;}var node=y.getElementById("Paymetric_CreditCardNumber");dojo.connect(node,"onblur",tooltip,"close");dojo.connect(node,"onblur",tooltip,"destroy");dojo.connect(node,"onblur",this,"clearCurrentIdentifier");}var myAccountLinks=dojo.query(".leftnav_myaccount_dotted a");if(null!=myAccountLinks){myAccountLinks.connect("onclick",tooltip,"close");myAccountLinks.connect("onclick",tooltip,"destroy");myAccountLinks.connect("onclick",this,"clearCurrentIdentifier");}tooltip._onMouseOver=this.emptyFunc;}}},clearCurrentIdentifier:function(){this.identifier="";},emptyFunc:function(event){},containsDoubleByte:function(target){var str=new String(target);var oneByteMax=127;for(var i=0;i<str.length;i++){chr=str.charCodeAt(i);if(chr>oneByteMax){return true;}}return false;},isValidEmail:function(strEmail){if(this.containsDoubleByte(strEmail)){return false;}if(strEmail.length==0){return true;}else{if(strEmail.length<5){return false;}else{if(strEmail.indexOf(" ")>0){return false;}else{if(strEmail.indexOf("@")<1){return false;}else{if(strEmail.lastIndexOf(".")<(strEmail.indexOf("@")+2)){return false;}else{if(strEmail.lastIndexOf(".")>=strEmail.length-2){return false;}}}}}}var pattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;if(pattern.test(strEmail)){return true;}else{return false;}},isValidUTF8length:function(UTF16String,maxlength){if(this.utf8StringByteLength(UTF16String)>maxlength){return false;}else{return true;}},utf8StringByteLength:function(UTF16String){if(UTF16String===null){return 0;}var str=String(UTF16String);var oneByteMax=127;var twoByteMax=2047;var byteSize=str.length;for(i=0;i<str.length;i++){chr=str.charCodeAt(i);if(chr>oneByteMax){byteSize=byteSize+1;}if(chr>twoByteMax){byteSize=byteSize+1;}}return byteSize;},IsNumeric:function(text,allowDot){if(allowDot){var ValidChars="0123456789.";}else{var ValidChars="0123456789";}var IsNumber=true;var Char;for(i=0;i<text.length&&IsNumber==true;i++){Char=text.charAt(i);if(ValidChars.indexOf(Char)==-1){IsNumber=false;}}return IsNumber;},IsValidPhone:function(text){var ValidChars="0123456789()-+ ";var IsValid=true;var Char;for(i=0;i<text.length&&IsValid==true;i++){Char=text.charAt(i);if(ValidChars.indexOf(Char)==-1){IsValid=false;}}return IsValid;},iframeFormErrorHandleClient:function(iframeId,id,errorMessage){var oIframe=document.getElementById(iframeId);var y=(oIframe.contentWindow||oIframe.contentDocument);if(y.document){y=y.document;}var element=y.getElementById(id);if(errorMessage==null){console.debug("formErrorHandleClient: The error message is null.");return;}if(element){if(this.identifier!=(id+"_tooltip")){this.identifier=id+"_tooltip";var node=y.createElement("span");var imgDirPath=getImageDirectoryPath();if(dojo.isIE<7){node.innerHTML=errorMessage+"<iframe id='errorMessageIFrame' scrolling='no' frameborder='0' src='"+imgDirPath+"images/empty.gif'></iframe>";}else{node.innerHTML=errorMessage;}var iFrameCoords=dojo.coords(dojo.byId(iframeId));var elementCoords=dojo.coords(element);var viewportCoords=dijit.getViewport();var dummyDivId=id+"_dummyDiv";var dummyDiv=dojo.create("div",{id:dummyDivId,style:{position:"absolute",visibility:"hidden",left:(viewportCoords.l+iFrameCoords.x+elementCoords.l)+"px",top:(viewportCoords.t+iFrameCoords.y+elementCoords.t)+"px",width:elementCoords.w+"px",height:elementCoords.h+"px","background-color":"black"}},dojo.body());var tooltip=new dijit.Tooltip({connectId:[dummyDivId]},node);tooltip.startup();console.log("created",tooltip,tooltip.id);element.focus();tooltip.open(dummyDiv);dojo.connect(element,"onblur",tooltip,"close");dojo.connect(element,"onblur",tooltip,"destroy");dojo.connect(element,"onblur",this,"clearCurrentIdentifier");var dummyDivRemoveFnHandle=dojo.connect(element,"onblur",this,function(){dojo.disconnect(dummyDivRemoveFnHandle);dojo.destroy(dummyDivId);});tooltip._onMouseOver=this.emptyFunc;}}},displayErrorMsg:function(form,id,message){var form=document.getElementById(form);this.formErrorHandleClient(form[""+id].id,this.messages[message]);document.getElementById(form[""+id].id).style.background="#ff0000";},isAlphaNumeric:function(text){if(text.search(/[^a-zA-Z0-9-]/g)!=-1){return false;}else{return true;}},isFutureDate:function(date){var cdt=new Date();var dt=Date.parse(date);if(dt>cdt){return true;}return false;}};}