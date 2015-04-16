var calendarInfo=new Object();calendarInfo.en_US=new Object();calendarInfo.en_US["format"]="mmddyy";calendarInfo.en_US["separator"]="/";calendarInfo.de_DE=new Object();calendarInfo.de_DE["format"]="ddmmyy";calendarInfo.de_DE["separator"]=".";calendarInfo.fr_FR=new Object();calendarInfo.fr_FR["format"]="ddmmyy";calendarInfo.fr_FR["separator"]="/";calendarInfo.zh_CN=new Object();calendarInfo.zh_CN["format"]="yymmdd";calendarInfo.zh_CN["separator"]="-";calendarInfo.zh_TW=new Object();calendarInfo.zh_TW["format"]="yymmdd";calendarInfo.zh_TW["separator"]="/";calendarInfo.Zh_TW=new Object();calendarInfo.Zh_TW["format"]="yymmdd";calendarInfo.Zh_TW["separator"]="/";calendarInfo.ja_JP=new Object();calendarInfo.ja_JP["format"]="yymmdd";calendarInfo.ja_JP["separator"]="/";calendarInfo.Ja_JP=new Object();calendarInfo.Ja_JP["format"]="yymmdd";calendarInfo.Ja_JP["separator"]="/";calendarInfo.ko_KR=new Object();calendarInfo.ko_KR["format"]="yymmdd";calendarInfo.ko_KR["separator"]="-";calendarInfo.es_ES=new Object();calendarInfo.es_ES["format"]="ddmmyy";calendarInfo.es_ES["separator"]="/";calendarInfo.pt_BR=new Object();calendarInfo.pt_BR["format"]="ddmmyy";calendarInfo.pt_BR["separator"]="/";calendarInfo.it_IT=new Object();calendarInfo.it_IT["format"]="ddmmyy";calendarInfo.it_IT["separator"]="/";calendarInfo.pl_PL=new Object();calendarInfo.pl_PL["format"]="yymmdd";calendarInfo.pl_PL["separator"]="/";calendarInfo.ru_RU=new Object();calendarInfo.ru_RU["format"]="mmddyy";calendarInfo.ru_RU["separator"]=".";calendarInfo.ro_RO=new Object();calendarInfo.ro_RO["format"]="mmddyy";calendarInfo.ro_RO["separator"]=".";function getDateObject(adate,locale){var dateObj=new Object();var mm,dd,yy;var separator=calendarInfo[locale]["separator"];if(calendarInfo[locale]["format"]=="mmddyy"){mm=adate.substring(0,adate.indexOf(separator));dd=adate.substring(adate.indexOf(separator)+1,adate.lastIndexOf(separator));yy=adate.substring(adate.lastIndexOf(separator)+1,adate.length);}else{if(calendarInfo[locale]["format"]=="ddmmyy"){dd=adate.substring(0,adate.indexOf(separator));mm=adate.substring(adate.indexOf(separator)+1,adate.lastIndexOf(separator));yy=adate.substring(adate.lastIndexOf(separator)+1,adate.length);}else{if(calendarInfo[locale]["format"]=="yymmdd"){yy=adate.substring(0,adate.indexOf(separator));mm=adate.substring(adate.indexOf(separator)+1,adate.lastIndexOf(separator));dd=adate.substring(adate.lastIndexOf(separator)+1,adate.length);}else{mm=adate.substring(0,adate.indexOf(separator));dd=adate.substring(adate.indexOf(separator)+1,adate.lastIndexOf(separator));yy=adate.substring(adate.lastIndexOf(separator)+1,adate.length);}}}dateObj.mm=mm;dateObj.dd=dd;dateObj.yy=yy;return dateObj;}function validateDate(adate,alocale){var mm,dd,yy;if(adate==""){return false;}var dateObj=getDateObject(adate,alocale);mm=dateObj.mm;dd=dateObj.dd;yy=dateObj.yy;if(isNaN(mm)){return"0";}if(isNaN(dd)){return"1";}if(isNaN(yy)){return"2";}if(mm<=0||mm>12){return"3";}if(dd<=0||dd>31){return"4";}if(yy<=1900||yy>9999){return"5";}return"true";}function isDateOrdered(date1,date2,alocale){var mm1,dd1,yy1,mm2,dd2,yy2;var dateObj1=getDateObject(date1,alocale);mm1=dateObj1.mm;dd1=dateObj1.dd;yy1=dateObj1.yy;var dateObj2=getDateObject(date2,alocale);mm2=dateObj2.mm;dd2=dateObj2.dd;yy2=dateObj2.yy;var diff=eval("yy1-yy2");if(parseInt(diff)>0){return"0";}else{if(parseInt(diff)==0){var monthDiff=eval("mm1-mm2");if(parseInt(monthDiff)>0){return"0";}else{if(parseInt(monthDiff)==0){var dayDiff=eval("dd1-dd2");if(parseInt(dayDiff)>0){return"0";}}}}}return"true";}function validateTime(time1){var delimiter=":";var hh,mm,ss;if(time1==""||time1.indexOf(delimiter)==-1){return false;}hh=time1.substring(0,time1.indexOf(delimiter));mm=time1.substring(time1.indexOf(delimiter)+1,time1.lastIndexOf(delimiter));ss=time1.substring(time1.lastIndexOf(delimiter)+1,time1.lastIndexOf(" "));amPm=time1.substring(time1.lastIndexOf(" ")+1);if(hh==""||mm==""||ss==""){return"false";}if(isNaN(hh)||isNaN(mm)||isNaN(ss)){return"false";}var undefined;if(amPm===undefined){return"false";}if(amPm.toUpperCase()!="AM"&&amPm.toUpperCase()!="PM"){return"false";}if(parseInt(hh)>12||parseInt(hh)<0){return"false";}if(parseInt(mm)>60||parseInt(mm)<0){return"false";}if(parseInt(ss)>60||parseInt(ss)<0){return"false";}return"true";}function getYearFromTimeStamp(timestamp){return timestamp.substring(0,4);}function getMonthFromTimeStamp(timestamp){return timestamp.substring(5,7);}function getDayFromTimeStamp(timestamp){return timestamp.substring(8,10);}function getDateFormat(year,month,day,alocale){var separator=calendarInfo[alocale]["separator"];if(calendarInfo[alocale]["format"]=="mmddyy"){return month+separator+day+separator+year;}else{if(calendarInfo[alocale]["format"]=="ddmmyy"){return day+separator+month+separator+year;}else{if(calendarInfo[alocale]["format"]=="yymmdd"){return year+separator+month+separator+day;}else{return month+separator+day+separator+year;}}}}function getDate(timestamp,alocale){var year=getYearFromTimeStamp(timestamp);var month=getMonthFromTimeStamp(timestamp);var day=getDayFromTimeStamp(timestamp);return getDateFormat(year,month,day,alocale);}function getYear(adate,alocale){var yy;var dateObj=getDateObject(adate,alocale);yy=dateObj.yy;if(isNaN(yy)){var now=new Date();var year=now.getYear();if(year<100){year+=1900;}else{year+=2000;}return year;}return yy;}function getMonth(adate,alocale){var mm;var dateObj=getDateObject(adate,alocale);mm=dateObj.mm;if(isNaN(mm)){return"12";}if(parseInt(mm)<=9&&(parseInt(mm)>0)){return"0"+parseInt(mm);}return mm;}function getDay(adate,alocale){var dd;var dateObj=getDateObject(adate,alocale);dd=dateObj.dd;if(isNaN(dd)){return"30";}if(parseInt(dd)<=9&&(parseInt(dd)>0)){return"0"+parseInt(dd);}return dd;}function getHour(time){var res;var delimiter=":";var index=time.search(delimiter);var hh=time.substring(0,index);var afternoon;afternoon=time.substring(time.lastIndexOf(" ")+1,time.length);if(afternoon=="PM"){if(hh=="08"){res=20;}else{if(hh=="09"){res=21;}else{if(hh=="12"){res=12;}else{res=parseInt(hh)+12;}}}}else{if(parseInt(hh)<=9&&(parseInt(hh)>0)){res="0"+parseInt(hh);}else{if(hh=="08"){res="0"+8;}else{if(hh=="09"){res="0"+9;}else{if(hh=="12"){res=0;}else{res=parseInt(hh);}}}}}return res;}function getMinutes(time){var delimiter=":";var res;var index=time.search(delimiter);var minSecString=time.substring(index+1,time.length);index=minSecString.search(delimiter);var min=minSecString.substring(0,index);if(parseInt(min)<=9&&(parseInt(min)>0)){res="0"+parseInt(min);}else{if(min=="00"){res="0"+0;}else{if(min=="08"){res="0"+8;}else{if(min=="09"){res="0"+9;}else{res=parseInt(min);}}}}return res;}function getSeconds(time){var delimiter=":";var res;var index=time.search(delimiter);var minSecString=time.substring(index+1,time.length);index=minSecString.search(delimiter);var sec=minSecString.substring(index+1,minSecString.length);if(parseInt(sec)<=9&&(parseInt(sec)>0)){res="0"+parseInt(sec);}else{var secTemp=sec.substring(0,2);if(secTemp=="00"){res="0"+0;}else{if(secTemp=="08"){res="0"+8;}else{if(secTemp=="09"){res="0"+9;}else{res=parseInt(sec);}}}}return res;}function formatTimeStamp(date,time,alocale){var yr,mo,day,hr,min,sec,ts;yr=getYear(date,alocale);mo=getMonth(date,alocale);day=getDay(date,alocale);hr=getHour(time);sec=getSeconds(time);min=getMinutes(time);ts=yr+"-"+mo+"-"+day+" "+hr+":"+min+":"+sec;return ts;}function getTimeFormat(hour,minute,second){var temp,tempHour;tempHour=(hour>12)?hour-12:hour;temp=((tempHour<10)?"0":"")+tempHour;temp+=((minute<10)?":0":":")+minute;temp+=((second<10)?":0":":")+second;temp+=(hour>=12)?" PM":" AM";return temp;}function convertTo24HourFormat(inTime){if(inTime.length<11){return NaN;}var index=inTime.search(" ");if(index==-1){return NaN;}var AMPMString=inTime.substring(index+1,inTime.length);var AMPMTime=inTime.substring(0,index);var tempHour=getHour(AMPMTime);var tempMinute=getMinutes(AMPMTime);var tempSecond=getSeconds(AMPMTime);tempHour=(AMPMString=="PM")?tempHour+12:tempHour;var outTime=tempHour+":"+tempMinute+":"+tempSecond;return outTime;}function valid24HourTime(time1){var delimiter=":";var hh,mm,ss;if(time1==""||time1.indexOf(delimiter)==-1){return"false";}hh=time1.substring(0,time1.indexOf(delimiter));mm=time1.substring(time1.indexOf(delimiter)+1,time1.lastIndexOf(delimiter));ss=time1.substring(time1.lastIndexOf(delimiter)+1,time1.length-1);if(hh==""||mm==""||ss==""){return"false";}if(isNaN(hh)||isNaN(mm)||isNaN(ss)){return"false";}if(parseInt(hh)>23||parseInt(hh)<0){return"false";}if(parseInt(mm)>59||parseInt(mm)<0){return"false";}if(parseInt(ss)>59||parseInt(ss)<0){return"false";}return"true";}function is24HourTimeOrdered(time1,time2){var delimiter=":";var hr1,min1,sec1,hr2,min2,sec2;hr1=time1.substring(0,time1.indexOf(delimiter));min1=time1.substring(time1.indexOf(delimiter)+1,5);hr2=time2.substring(0,time2.indexOf(delimiter));min2=time2.substring(time2.indexOf(delimiter)+1,5);var diff=eval("hr1-hr2");if(parseInt(diff)>0){return"false";}else{if(parseInt(diff)==0){var minDiff=eval("min1-min2");if(parseInt(minDiff)>0){return"false";}else{if(parseInt(minDiff)==0){return"false1";}}}}return"true";}function isTimeOrdered(time1,time2){var hr1,min1,sec1,hr2,min2,sec2;hr1=getHour(time1);min1=getMinutes(time1);sec1=getSeconds(time1);hr2=getHour(time2);min2=getMinutes(time2);sec2=getSeconds(time2);var diff=eval("hr1-hr2");if(parseInt(diff)>0){return"false";}else{if(parseInt(diff)==0){var minDiff=eval("min1-min2");if(parseInt(minDiff)>0){return"false";}else{if(parseInt(minDiff)==0){var secDiff=eval("sec1-sec2");if(parseInt(secDiff)>=0){return"false";}}}}}return"true";}