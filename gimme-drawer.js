(function() {
  
  var imageURLs = new Array();
  
  // find all images
  for (var ln = 0; ln < document.images.length; ln++) {
      var lk = document.images[ln];
      imageURLs.push(lk.src);
  }
  
  // find all background images in body, div and td elements
  var elementNames = ["body", "div", "td"];
  for (var i = 0; i < elementNames.length; i++) {
    var tags = document.getElementsByTagName(elementNames[i]);
    for (var j = 0; j < tags.length; j++) {
      tag = tags[j];
      if (tag.style.background.match("url")) {
        var bg = tag.style.background;
        imageURLs.push(bg.substr(bg.indexOf("url") + 4, bg.lastIndexOf(")") - (bg.indexOf("url") + 4) ) );
      }
    }
  }
  
  var imageContent = '';
  for (var k = 0; k < imageURLs.length; k++) {
    imageContent += '<img src="' + imageURLs[k] + '" style="max-height:100px;border:2px solid #fff;margin:0 5px;">';  
  }
  
  imageDrawer = document.createElement("div");
  imageDrawer.style.backgroundColor = "#404040";
  imageDrawer.style.width = "100%";
  imageDrawer.style.height = "130px";
  imageDrawer.style.padding = "10px 0 0 0";
  imageDrawer.style.overflowX = "scroll";
  imageDrawer.style.whiteSpace = "nowrap";
  imageDrawer.style.zIndex = 90000;
  imageDrawer.style.position = "fixed";
  
  imageDrawer.innerHTML = imageContent;
  document.body.insertBefore(imageDrawer, document.body.firstChild);
  
})();