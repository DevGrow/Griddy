/*
 *  Griddy - Simple Gridy Overlay
 *  Copyright 2010 Monjurul Dolon, http://mdolon.com/
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://devgrow.com/griddy-overlay
 */
$.fn.griddy = function(options) {
	this.css('position','relative');
	var defaults = { rows: 10, rowheight: 0, rowgutter: 20, columns: 4, columnwidth: 0, columngutter: 20, color: '#ccc', opacity: 30 };
	var opts = $.extend(defaults, options); var o = $.meta ? $.extend({}, opts, $$.data()) : opts;
	var width = this.width(); var height = $(document).height();
	if(o.columnwidth == 0)
		o.columnwidth = Math.floor(width - ((o.columns-1)*o.columngutter))/o.columns;
	if(o.rowheight == 0)
		o.rowheight = Math.floor(height - ((o.rows-1)*o.rowgutter))/o.rows;
	this.prepend("<div class='griddy' style='display:none;overflow:hidden;position:absolute;left:0;top:0;width:100%;height:"+(height-20)+"px;'><div class='griddy-r' style='position:relative;width:100%;height:100%;display:block;overflow:hidden;'><div class='griddy-columns' style='position:absolute;top:0;left:0;width:100%;height:100%;'></div></div></div>");
	if(o.columns != 0){
		for ( var i = 0; i < o.columns; i++ ) { // columns
			if(i!=0) $('.griddy-r').append("<div style='width:"+o.columngutter+"px;display:inline;float:left;height:100%;'></div>");
			$('.griddy-r',this).append("<div style='width:"+o.columnwidth+"px;height:100%;display:block;float:left;text-align:center;position:relative;'><span style='background:#000;padding:5px;color:#fff;font-weight:bold;border:1px solid #fff;'>"+o.columnwidth+"px</span><div style='width:100%;height:100%;position:absolute;top:0;left:0;display:block;background:"+o.color+";opacity:"+(o.opacity/100)+";filter:alpha(opacity="+o.opacity+");'></div></div>");
		}
	}
	if(o.rows != 0){
		for ( var i = 0; i < o.rows; i++ ) { // rows
			if(i!=0) $('.griddy-columns').append("<div style='height:"+o.rowgutter+"px;display:block;float:left;width:100%;'></div>");
			$('.griddy-columns',this).append("<div style='height:"+o.rowheight+"px;width:100%;float:left;display:block;line-height:"+o.rowheight+"px;position:relative;'><span style='background:#000;padding:5px;color:#fff;font-weight:bold;border:1px solid #fff;'>"+o.rowheight+"px</span><div style='width:100%;height:100%;position:absolute;top:0;left:0;display:block;background:"+o.color+";opacity:"+(o.opacity/100)+";filter:alpha(opacity="+o.opacity+");'></div></div>");
		}
	}
	$('body').prepend("<span onclick=\"$('.griddy').toggle();return false;\" style='position:fixed;top:5px;right:5px;cursor:pointer;padding:5px;background:#000;color:#fff;font-weight:bold;font-size:18px;z-index:999;'>Toggle Griddy</span>");
};