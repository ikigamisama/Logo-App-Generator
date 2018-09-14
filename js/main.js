$(document).ready(function(){

	function logoProperties(){
		this.fadeLogo  = function(color, alpha, steps, step){
			return Math.round((color*((1-((1-alpha)/steps*step)))));
		},
		this.hex2Rgb = function(hex,alpha){
			var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
			var toString = function () {
		        if (this.alpha == undefined) {
		            return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
		        }
		        if (this.alpha > 1) {
		            this.alpha = 1;
		        } else if (this.alpha < 0) {
		            this.alpha = 0;
		        }
		        return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")";
		    } 
		    if (alpha == undefined) {
		        return result ? {
		            r: parseInt(result[1], 16),
		            g: parseInt(result[2], 16),
		            b: parseInt(result[3], 16),
		            toString: toString
		        } : null;
		    }
		    if (alpha > 1) {
		        alpha = 1;
		    } else if (alpha < 0) {
		        alpha = 0;
		    }
		    return result ? {
		        r: parseInt(result[1], 16),
		        g: parseInt(result[2], 16),
		        b: parseInt(result[3], 16),
		        alpha: alpha,
		        toString: toString
		    } : null;
		},
		this.rgb2hex = function(r,g,b){
			var result  = '#' + this.componentToHex(r)+ this.componentToHex(g)+ this.componentToHex(b);
			return console.log(result);
		},
		this.componentToHex = function(c){
			 var hex = c.toString(16);
    		return hex.length == 1 ? "0" + hex : hex;
		}
		this.rgb2Num = function(color){
			var rgb = color.replace(/^(rgb|rgba)\(/,'').replace(/\)$/,'').replace(/\s/g,'').split(',');
			return rgb;
		}
		this.createTextShaodow = function(settings){
			var text_shadow = '';
	    	var shadows
	    	var alpha
	    	var r;
	    	var g;
	    	var b;
	    	var f;
	    	var w;
	    	var c;
	        var icolor;

	        (settings.r >= 0 && settings.r <= 255) ? r = settings.r : r = 59;
	    	(settings.g >= 0 && settings.g <= 255) ? g = settings.g : g = 89;
	    	(settings.b >= 0 && settings.b <= 255) ? b = settings.b : b = 152;

	    	 icolor = settings.icolor;

	    	settings.f > 20 ? f = settings.f : f = 20;
	    	settings.w > 30 ? w = settings.w : w = 30;
	    	(settings.c >= 0 && settings.c <= 50) ? c = settings.c : c = 0;

	    	(settings.a >= 0 && settings.a <= 1) ? alpha = settings.a : alpha = 0.7;
    		(settings.s >= 0 && settings.s <= 100) ? shadows = settings.s : shadows = 5;

    		for (i = 1; i <= shadows; i++) {
	    		text_shadow =  " " + (shadows - i) + "px " + (shadows - i) + "px rgb(" + this.fadeLogo(r, alpha, shadows, i) + ", " + this.fadeLogo(g, alpha, shadows, i) + ", "  + this.fadeLogo(b, alpha, shadows, i) + ")," + text_shadow;
	    	}
	    	text_shadow = text_shadow.substring(0, text_shadow.length - 1);


	    	$('#icon_logo').css({'text-shadow':text_shadow});
		},
		this.printCode = function(){
			var logo_properties = {
				logo: $('#icon_logo').attr('class'),
				height: $('#icon_logo').css('height'),
				width: $('#icon_logo').css('width'),
				lineHeight: $('#icon_logo').css('line-height'),
				borderRadius:$('#icon_logo').css('border-radius'),
				textSize:$('#icon_logo').css('font-size'),
				color:$('#icon_logo').css('color'),
				backgroundColor:$('#icon_logo').css('background-color'),
				textShadow:$('#icon_logo').css('text-shadow')
			}
			code = '<html> \n <head> \n <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"> \n </head> \n <body> \n <i id="icon" class="'+logo_properties.logo+'" style="text-shadow: ' + logo_properties.textShadow + '; font-size: ' + logo_properties.textSize + '; color: ' +logo_properties.color+'; height: ' + logo_properties.height + '; width: '+logo_properties.width+'; line-height: '+logo_properties.lineHeight+'; border-radius: '+logo_properties.borderRadius+'; text-align:center; background-color: '+logo_properties.backgroundColor+';"></i> \n </body>';
			$('#code_properties').val(code);
		}
		this.printCodeText = function(){
			var logo_properties = {
				text: $('#icon_logo').text(),
				height: $('#icon_logo').css('height'),
				width: $('#icon_logo').css('width'),
				lineHeight: $('#icon_logo').css('line-height'),
				borderRadius:$('#icon_logo').css('border-radius'),
				textSize:$('#icon_logo').css('font-size'),
				color:$('#icon_logo').css('color'),
				backgroundColor:$('#icon_logo').css('background-color'),
				textShadow:$('#icon_logo').css('text-shadow')
			}
			code = '<html> \n <head> \n <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"> \n </head> \n <body> \n <i id="icon" style="text-shadow: ' + logo_properties.textShadow + '; font-size: ' + logo_properties.textSize + '; color: ' +logo_properties.color+'; height: ' + logo_properties.height + '; width: '+logo_properties.width+'; line-height: '+logo_properties.lineHeight+'; border-radius: '+logo_properties.borderRadius+'; text-align:center; background-color: '+logo_properties.backgroundColor+';">'+logo_properties.text+'</i> \n </body>';
			$('#code_properties').val(code);
		}


	}
	
	var prop = new logoProperties();
	var icon_object = $('#icon_logo');
	var icon_properties = {
		height: parseInt(icon_object.css('height'),10),
		width: parseInt(icon_object.css('width'),10),
		lineHeight: parseInt(icon_object.css('line-height'),10),
		borderRadius:parseInt(icon_object.css('border-radius'),10),
		textSize:parseInt(icon_object.css('font-size'),10),
		color:icon_object.css('color'),
		backgroundColor:icon_object.css('background-color'),
		textShadow:icon_object.css('text-shadow')
	}

	$('#id_color_font').change(function(){
		$('#id_color_font_text').val($(this).val().slice(1));
		icon_object.css('color',$(this).val());
		prop.printCode();	
	})
	$('#id_color_background_font').change(function(){
		$('#id_color_background_font_text').val($(this).val().slice(1));
		icon_object.css('background-color',$(this).val());
		prop.printCode();	
	})

	$(this).on('input','#id_color_font_text',function(){
		var color_text_value = $(this).val();
		if(color_text_value.match(/^[0-9a-f]{6}$/i)){
			$('#id_color_font_text').css({'border':'1px solid #2196f3'});
			$('#error_input_text_color').css({'display':'none'});
			$('#id_color_font').val('#'+ color_text_value);
			icon_object.css('color',prop.hex2Rgb('#'+color_text_value).toString());
			
		}
		else{
			$('#id_color_font_text').css({'border':'1px solid #f44336'});
			$('#error_input_text_color').css({'display':'block'});
		}
		prop.printCode();	
	})
	$(this).on('input','#id_color_background_font_text',function(){
		var backgroundColor_text_value = $(this).val();
		if(backgroundColor_text_value.match(/^[0-9a-f]{6}$/i)){
			$('#id_color_background_font_text').css({'border':'1px solid #2196f3'});
			$('#error_input_background_color').css({'display':'none'});
			$('#id_color_background_font').val('#'+ backgroundColor_text_value);
			icon_object.css('background-color',prop.hex2Rgb('#'+backgroundColor_text_value).toString());
		}
		else{
			$('#id_color_background_font_text').css({'border':'1px solid #f44336'});
			$('#error_input_background_color').css({'display':'block'});
		}
		prop.printCode();	
	})



	$(this).on('input','#id_background_size',function(){
		$('#value_input_background_size').text($(this).val());
	    if($(this).val() <= icon_properties.height && $(this).val() <= icon_properties.width && $(this).val() <= icon_properties.lineHeight){
	    	icon_object.css('height','30px');
			icon_object.css('width','30px');
			icon_object.css('line-height','30px');
	    }
	    else{
			icon_object.css('height',$(this).val());
			icon_object.css('width',$(this).val());
			icon_object.css('line-height',$(this).val() + 'px');
	    }

		prop.printCode();	
	});
	$(this).on('input','#id_font_size',function(){
		$('#value_input_font_size').text($(this).val());

		if($(this).val() <= icon_properties.textSize){
	    	icon_object.css('font-size','25px');
	    }
	    else{
			icon_object.css('font-size',$(this).val() + 'px');
	    }

	    prop.printCode();	
	});
	$(this).on('input','#id_radius_background',function(){
		$('#value_input_radius_background').text($(this).val());
		icon_object.css('border-radius',$(this).val() + '%');

		prop.printCode();	

	});
	$(this).on('input','#id_text_shadow',function(){
		$('#value_input_text_shadow').text($(this).val());

		var rgbconverted = prop.rgb2Num($('#icon_logo').css('background-color')),
			getIcon_color =  prop.rgb2Num($('#icon_logo').css('color'));
		prop.createTextShaodow({
			r:parseInt(rgbconverted[0]),
			g:parseInt(rgbconverted[1]),
			b:parseInt(rgbconverted[2]),
			f:parseInt($('#icon_logo').css('font-size'),10),
			w:parseInt($('#icon_logo').css('width'),10),
			s:parseInt($('#id_text_shadow').val()),
			a:0.7,
			c:parseInt($('#icon_logo').css('border-radius'),10),
			icolor:getIcon_color.toString()
		});

		prop.printCode();	

	});


	$('.fa-logo-choose').each(function(e){
		$(this).click(function(){
			var logo_index  = e + 1,
				logo_value = $(this).text().replace(/\s/g,'')		
				icon_object.attr('class','fa ' + logo_value);


			prop.printCode();	
		})
	})


	$(this).on('input','#letter_input',function(){
		var text_input = $(this).val();

		$('#icon_logo').text(text_input);
		prop.printCodeText();	
	})

	
})
