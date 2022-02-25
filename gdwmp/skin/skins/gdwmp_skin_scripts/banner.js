//	HYPE.documents["hype-banner"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "";
	var documentName = "banner";
	var documentLoaderFilename = "banner.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE == "undefined") {
		if(typeof window.HYPE_DocumentsToLoad == "undefined") {
			window.HYPE_DocumentsToLoad = new Array();
			window.HYPE_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	var attributeTransformerMapping = {"BorderColorRight":"ColorValueTransformer","BackgroundColor":"ColorValueTransformer","BorderWidthBottom":"PixelValueTransformer","WordSpacing":"PixelValueTransformer","BoxShadowXOffset":"PixelValueTransformer","Opacity":"FractionalValueTransformer","BorderWidthRight":"PixelValueTransformer","BorderWidthTop":"PixelValueTransformer","BoxShadowColor":"ColorValueTransformer","BorderColorBottom":"ColorValueTransformer","FontSize":"PixelValueTransformer","BorderRadiusTopRight":"PixelValueTransformer","TextColor":"ColorValueTransformer","Rotate":"DegreeValueTransformer","Height":"PixelValueTransformer","PaddingLeft":"PixelValueTransformer","BorderColorTop":"ColorValueTransformer","Top":"PixelValueTransformer","BackgroundGradientStartColor":"ColorValueTransformer","TextShadowXOffset":"PixelValueTransformer","PaddingTop":"PixelValueTransformer","BackgroundGradientAngle":"DegreeValueTransformer","PaddingBottom":"PixelValueTransformer","PaddingRight":"PixelValueTransformer","Width":"PixelValueTransformer","TextShadowColor":"ColorValueTransformer","BorderColorLeft":"ColorValueTransformer","ReflectionOffset":"PixelValueTransformer","Left":"PixelValueTransformer","BorderRadiusBottomRight":"PixelValueTransformer","LineHeight":"PixelValueTransformer","BoxShadowYOffset":"PixelValueTransformer","ReflectionDepth":"FractionalValueTransformer","BorderRadiusTopLeft":"PixelValueTransformer","BorderRadiusBottomLeft":"PixelValueTransformer","TextShadowBlurRadius":"PixelValueTransformer","TextShadowYOffset":"PixelValueTransformer","BorderWidthLeft":"PixelValueTransformer","BackgroundGradientEndColor":"ColorValueTransformer","BoxShadowBlurRadius":"PixelValueTransformer","LetterSpacing":"PixelValueTransformer"};

var scenes = [{"initialValues":{"32438DE5-D2FE-4EDF-BC11-5F6FA4753EAC-81406-00000F65E878E5C3":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"1px","Display":"inline","BackgroundImage":"banner2.png","Height":"326px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"4","Top":"0px","Width":"931px","Opacity":"0.000000","TagName":"div","InnerHTML":"<img src=\"https://marmitonetpolochon.be/banner/banner2.png\">"},"21300D5E-BED9-41B3-9DA7-E4EB40968440-81406-00000F6BE736963E":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"0px","Display":"inline","BackgroundImage":"banner5.png","Height":"326px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"1","Top":"0px","Width":"931px","Opacity":"0.000000","TagName":"div","InnerHTML":"<img src=\"https://marmitonetpolochon.be/banner/banner5.png\">"},"DDF1EB8B-9CC0-451A-9E36-52134B217D97-81406-00000F6A0F6D5D34":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"0px","Display":"inline","BackgroundImage":"banner4.png","Height":"326px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"2","Top":"0px","Width":"931px","Opacity":"0.000000","TagName":"div","InnerHTML":"<img src=\"https://marmitonetpolochon.be/banner/banner4.png\">"},"704895B1-0D3A-4FB3-9F6D-10BDC7065165-81406-00000F5D18B16635":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"0px","Display":"inline","BackgroundImage":"banner1-1.png","ReflectionOffset":"8px","Height":"326px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"5","Top":"0px","Width":"931px","Opacity":"1.000000","ReflectionDepth":"0.000000","TagName":"div","InnerHTML":"<img src=\"https://marmitonetpolochon.be/banner/banner1.png\">"},"6E27B4C7-6688-4B95-8627-8F8B8BA4C6B2-81406-00000F6730A60A6B":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"1px","Display":"inline","BackgroundImage":"banner3.png","Height":"326px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"3","Top":"0px","Width":"931px","Opacity":"0.000000","TagName":"div","InnerHTML":"<img src=\"https://marmitonetpolochon.be/banner/banner3.png\">"}},"timelines":{"kTimelineDefaultIdentifier":{"framesPerSecond":30,"animations":[{"startValue":"0.000000","isRelative":true,"endValue":"0.000000","identifier":"Opacity","duration":4,"timingFunction":"easeinout","type":0,"oid":"32438DE5-D2FE-4EDF-BC11-5F6FA4753EAC-81406-00000F65E878E5C3","startTime":0},{"startValue":"0.000000","isRelative":true,"endValue":"0.000000","identifier":"Opacity","duration":9,"timingFunction":"easeinout","type":0,"oid":"6E27B4C7-6688-4B95-8627-8F8B8BA4C6B2-81406-00000F6730A60A6B","startTime":0},{"startValue":"0.000000","isRelative":true,"endValue":"0.000000","identifier":"Opacity","duration":14,"timingFunction":"easeinout","type":0,"oid":"DDF1EB8B-9CC0-451A-9E36-52134B217D97-81406-00000F6A0F6D5D34","startTime":0},{"startValue":"0.000000","isRelative":true,"endValue":"0.000000","identifier":"Opacity","duration":19,"timingFunction":"easeinout","type":0,"oid":"21300D5E-BED9-41B3-9DA7-E4EB40968440-81406-00000F6BE736963E","startTime":0},{"startValue":"1.000000","isRelative":true,"endValue":"1.000000","identifier":"Opacity","duration":4,"timingFunction":"easeinout","type":0,"oid":"704895B1-0D3A-4FB3-9F6D-10BDC7065165-81406-00000F5D18B16635","startTime":0},{"startValue":"0.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":1,"timingFunction":"easeinout","type":0,"oid":"32438DE5-D2FE-4EDF-BC11-5F6FA4753EAC-81406-00000F65E878E5C3","startTime":4},{"startValue":"1.000000","isRelative":false,"endValue":"0.000000","identifier":"Opacity","duration":1,"timingFunction":"easeinout","type":0,"oid":"704895B1-0D3A-4FB3-9F6D-10BDC7065165-81406-00000F5D18B16635","startTime":4},{"startValue":"1.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":4,"timingFunction":"easeinout","type":0,"oid":"32438DE5-D2FE-4EDF-BC11-5F6FA4753EAC-81406-00000F65E878E5C3","startTime":5},{"startValue":"0.000000","isRelative":false,"endValue":"0.000000","identifier":"Opacity","duration":19,"timingFunction":"easeinout","type":0,"oid":"704895B1-0D3A-4FB3-9F6D-10BDC7065165-81406-00000F5D18B16635","startTime":5},{"startValue":"0.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":1,"timingFunction":"easeinout","type":0,"oid":"6E27B4C7-6688-4B95-8627-8F8B8BA4C6B2-81406-00000F6730A60A6B","startTime":9},{"startValue":"1.000000","isRelative":false,"endValue":"0.000000","identifier":"Opacity","duration":1,"timingFunction":"easeinout","type":0,"oid":"32438DE5-D2FE-4EDF-BC11-5F6FA4753EAC-81406-00000F65E878E5C3","startTime":9},{"startValue":"1.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":4,"timingFunction":"easeinout","type":0,"oid":"6E27B4C7-6688-4B95-8627-8F8B8BA4C6B2-81406-00000F6730A60A6B","startTime":10},{"startValue":"0.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":1,"timingFunction":"easeinout","type":0,"oid":"DDF1EB8B-9CC0-451A-9E36-52134B217D97-81406-00000F6A0F6D5D34","startTime":14},{"startValue":"1.000000","isRelative":false,"endValue":"0.000000","identifier":"Opacity","duration":1,"timingFunction":"easeinout","type":0,"oid":"6E27B4C7-6688-4B95-8627-8F8B8BA4C6B2-81406-00000F6730A60A6B","startTime":14},{"startValue":"1.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":4,"timingFunction":"easeinout","type":0,"oid":"DDF1EB8B-9CC0-451A-9E36-52134B217D97-81406-00000F6A0F6D5D34","startTime":15},{"startValue":"1.000000","isRelative":false,"endValue":"0.000000","identifier":"Opacity","duration":1,"timingFunction":"easeinout","type":0,"oid":"DDF1EB8B-9CC0-451A-9E36-52134B217D97-81406-00000F6A0F6D5D34","startTime":19},{"startValue":"0.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":1,"timingFunction":"easeinout","type":0,"oid":"21300D5E-BED9-41B3-9DA7-E4EB40968440-81406-00000F6BE736963E","startTime":19},{"startValue":"1.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":4,"timingFunction":"easeinout","type":0,"oid":"21300D5E-BED9-41B3-9DA7-E4EB40968440-81406-00000F6BE736963E","startTime":20},{"startValue":"1.000000","isRelative":false,"endValue":"0.000000","identifier":"Opacity","duration":1,"timingFunction":"easeinout","type":0,"oid":"21300D5E-BED9-41B3-9DA7-E4EB40968440-81406-00000F6BE736963E","startTime":24},{"startValue":"0.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":1,"timingFunction":"easeinout","type":0,"oid":"704895B1-0D3A-4FB3-9F6D-10BDC7065165-81406-00000F5D18B16635","startTime":24}],"identifier":"kTimelineDefaultIdentifier","name":"Main Timeline","duration":25}},"id":"A1CF06F4-8719-484F-A0FD-E87F2C1F3903-81406-00000EBB7C9E5E35","sceneIndex":0,"perspective":"600px","oid":"A1CF06F4-8719-484F-A0FD-E87F2C1F3903-81406-00000EBB7C9E5E35","onSceneAnimationCompleteAction":{"type":3,"timelineIdentifier":"kTimelineDefaultIdentifier"},"name":"Banner","backgroundColor":"#000000"}];

var javascriptMapping = {};


	
	var Custom = (function() {
	return {
	};
}());

	
	var hypeDoc = new HYPE();
	
	hypeDoc.attributeTransformerMapping = attributeTransformerMapping;
	hypeDoc.scenes = scenes;
	hypeDoc.javascriptMapping = javascriptMapping;
	hypeDoc.Custom = Custom;
	hypeDoc.currentSceneIndex = 0;
	hypeDoc.mainContentContainerID = "banner";
	hypeDoc.resourcesFolderName = resourcesFolderName;
	hypeDoc.showHypeBuiltWatermark = 0;
	hypeDoc.showLoadingPage = true;
	hypeDoc.drawSceneBackgrounds = true;
	hypeDoc.documentName = documentName;

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

