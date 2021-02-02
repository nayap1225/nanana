$(function(){
	dropdownFn('.h_dropdown .btn_toggle');
	dropdownFn('.select_lang .btn_selected');

	graphAniTimeFn()
	alertAniTimeFn()
});

var alertAni = null;
var graphAni = null;

var _num1 = 0;
function alertAniFn() {
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
function alertAniTimeFn(){
    alertAniFn();
	var chLen = $('.animate_box .alert_box').children().length;
    var _speed = _num1 === 0 ? 500 : 1000; // 얼럿 애니메이션 인터벌 간격 :: 500 -> 사라졌다 나타나는 시간, 1000 :: 박스 나타나는 시간 (1000 = 1초)
    setTimeout(alertAniTimeFn, _speed);
};

var _num2 = 0;
function graphAniFn() {
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

function graphAniTimeFn(){
    graphAniFn();
	var chLen = $('.animate_box .graph_box').children().length;
    var _speed = _num2 === chLen ? 3000 : 700; // 그래프 애니메이션 인터벌 간격 -> 700 : 이미지 나타나는 시간, 2000 : 마지막 라인 이후 사라지기전 까지 시간 (1000 = 1초)
    setTimeout(graphAniTimeFn, _speed);
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
