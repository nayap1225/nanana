$(function(){
	alertAni = setInterval(alertAniFn, 1000);
	graphAni = setInterval(graphAniFn, 700);

	dropdownFn('.h_dropdown .btn_toggle');
	dropdownFn('.select_lang .btn_selected');


});

var alertAni = null;
var graphAni = null;

var _num1 = 0;
function alertAniFn(el) {
	var _el = $('.animate_box .alert_box');
	var _children = _el.children();
	var _len = _children.length;

	if (_num1 < _len) {
		_el.children().eq(_num1).addClass('on');
		_num1 += 1;
	}else {
		_el.children().removeClass('on')
		_num1 = 0;
	};
};

var _num2 = 0;
function graphAniFn(el) {
	var _el = $('.animate_box .graph_box');
	var _children = _el.children();
	var _len = _children.length;

	if (_num2 < _len) {
		_el.children().eq(_num2).addClass('on');
		_num2 += 1;
	}else {
		_el.children().removeClass('on')
		_num2 = 0;
	};
};

function dropdownFn (el) {
	var _el =  $(el),
		$wrap = _el.closest('.dropdown_box'),
		$box = $wrap.find('.dropdown_list');

	_el.on('click',function () {
		if(!_el.hasClass('on')) {
			_el.addClass('on');
			$wrap.addClass('on');
			$box.addClass('on');
		}else {
			_el.removeClass('on');
			$wrap.removeClass('on');
			$box.removeClass('on');
		}

		$box.find('li > a, li > button').on('click',function () {
			var _txt = $(this).text();
			$(this).parent().addClass('on').siblings().removeClass('on');
			
			if(_el.hasClass('btn_selected')) {
				_el.text(_txt)
			}
			_el.removeClass('on');
			$wrap.removeClass('on');
			$box.removeClass('on');
		});
	});
};
