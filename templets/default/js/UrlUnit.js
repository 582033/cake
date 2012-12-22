var isIE=(document.all&&document.getElementById&&!window.opera)?true:false;
	var isMozilla=(!document.all&&document.getElementById&&!window.opera)?true:false;
	var isOpera=(window.opera)?true:false;
	var seturl='url(#default#homepage)';
	var weburl=window.location.href;
	var webname=document.title;
	
	function addfavorite(id){
		if(isMozilla){
	   		if (document.all){ 
	   	   		window.external.addFavorite(weburl,webname);
	   	   	}else if (window.sidebar){ 
	   	   		window.sidebar.addPanel(webname, weburl,"");
	   		}
		}
		if(isIE){
			window.external.AddFavorite(weburl, webname);
		}
		if(id) {
			$.ajax({url: 'ajax_p.php?id='+id });
		}
	}
	
	function addcollectnum(id){
		if(isMozilla){
	   		if (document.all){ 
	   	   		window.external.addFavorite(weburl,webname);
	   	   	}else if (window.sidebar){ 
	   	   		window.sidebar.addPanel(webname, weburl,"");
	   		}
		}
		if(isIE){
			window.external.AddFavorite(weburl, webname);
		}
		if(id) {
			$.ajax({url: 'ajax_p.php?brandid='+id });
		}
	}
	
	function copyLink(){
		try {
			var cText =  document.location.toString();
			if (window.clipboardData) {
				window.clipboardData.setData("Text", cText);
				alert("店铺连接已复制到剪贴板!您可以分享给你的好友!");
			} else if (window.netscape) {
				try {
					netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
				} catch (e) {
					alert("您的浏览器设置为不允许复制！\n如果需要此操作，请在浏览器地址栏输入'about:config'并回车\n然后将'signed.applets.codebase_principal_support'设置为'true',再重试复制操作!");
					return false;
				}
				var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
				if (!clip) 
					return;
				var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
				if (!trans) {
					return;
				}
				trans.addDataFlavor('text/unicode');
				var str = new Object();
				var len = new Object();
				var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
				
				str.data = cText;
				trans.setTransferData("text/unicode", str, cText.length * 2);
				var clipid = Components.interfaces.nsIClipboard;
				if (!clip) 
					return false;
				clip.setData(trans, null, clipid.kGlobalClipboard);
				alert("店铺连接已复制到剪贴板!您可以分享给你的好友!");
			}
		} catch (e) {
		}
	};