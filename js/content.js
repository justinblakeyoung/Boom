// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var studentName = document.getElementsByClassName("info-main-list")[0].getElementsByTagName('p').item(0).innerHTML;
      var sn = document.getElementsByClassName("item-doc is-active").item(0).innerText;

      // var myList_sn = document.getElementsByClassName("course-lessonSN");
      // 
      // var serialNumber = document.getElementsByClassName("report-course-display-name")[0].innerHTML.replace("Course: ", "").replace(/\s/g, '');
      // var studentName = document.getElementsByClassName("report-student-display-name")[0].innerHTML;
      // var reg = new RegExp(studentName, "g");
      // var content = document.getElementById("compiled_report").value.replace(reg, "{STUDENT}");
      // var title = document.getElementsByClassName("line-attached-to-heading")[0].innerHTML;
      // var gender = "";
      // var image = document.querySelector(".student-image, .large").style.backgroundImage;
      //   if (image.includes("_male_face")){
      //     gender = "male";
      //   } else {
      //     gender = "female";
      //   }
      //var sendObject = {"type":"copy","serialNumber" : serialNumber,"content": content,"title" : title,"studentName" : studentName,"gender" : gender}

      // var url = "http://mean-stack-guide-tmzmh.run.goorm.io/copy/" + encodeURIComponent(JSON.stringify(sendObject));
      var currentUrl = window.location.href;
      var subCur = currentUrl.substring(currentUrl.indexOf("classId"),1000);
      

      var object = decodeURIComponent(subCur);
	    var obj = object.split("&").reduce(function(prev, curr, i, arr) {
      var p = curr.split("=");
      prev[decodeURIComponent(p[0])] = decodeURIComponent(p[1]);
      return prev;
      }, {});

      var classId = obj.classId;
      var studentId = obj.studentId;
      var lessonId = obj.lessonId;

      var sendObject = {"serialNumber":sn,"studentName":studentName,"classId":classId,"studentId":studentId,"lessonId":lessonId}

      var url = "http://mean-stack-guide-tmzmh.run.goorm.io/getInfo/" + encodeURIComponent(JSON.stringify(sendObject));
      //console.log(firstHref);

      // This line is new!
      chrome.runtime.sendMessage({"type":"getInfo","url" : url});
    }
  }
);