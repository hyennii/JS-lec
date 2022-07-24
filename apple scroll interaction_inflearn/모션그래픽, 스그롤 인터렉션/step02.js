$(function(){

	/* 날짜 카운트*/
	function countDate() {

		var el = $('.date_count'); //count_box의 부모 element
		var date = new Date();
		var todayDate = String(date.getFullYear()) + String(date.getMonth() + 1) + String(date.getDate());
		var rolling = 24;
		var resultArray = [];
			resultArray = todayDate.split('');

		$.each(resultArray, function(idx, val) { //forEach를 제이쿼리로 적용
			var conuntBox = $('<div class="count_box" />');
			var numberArray = [];
			var number = Number(val);

			for(var i = 0; i <= rolling; i++) { //롤링 갯수만큼 반복하며 값 만들기
				var sum = number + i;
				var num = sum >= 10 ? Number(String(sum).split('')[1]) : sum; //두자리 수 중 뒷자리만 살리기 위해 넘버링 후 스플릿
				numberArray[i] = num;
			};

			numberArray.reverse(); //배열 뒤집기

			numberArray.forEach(function(val) {

				var countValue = $('<span/>', { //span element 추가
					text: val
				});

			countValue.appendTo(conuntBox); //appendTo 이용해 span element 추가
			});

			conuntBox
			.appendTo(el)
			.delay(idx * 300) //300 배수
			.queue(function(){
				$(this).addClass('active');
			});
		});

	};
	countDate();
});
