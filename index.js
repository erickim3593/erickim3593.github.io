window.onload = function () {
    var desc = ["안녕하세요? 김형준 입니다.", 
    "저는 문산수억고 학생입니다.", 
    "잘 부탁드립니다.",
    "굿"];
    var index = 0;

    var interval = setInterval(function() {
        $('#book1_desc').fadeOut(500, function() {
            index++;
            if (index === desc.length)
                index = 0;
            $(this).text(desc[index]).fadeIn(500);
        });
    }, 4000);

    var leftarrow = document.getElementById('left-arrow');
    var rightarrow = document.getElementById('right-arrow');

    leftarrow.onclick = function () {
        $('#book1_desc').fadeOut(500,function () {
            index--;
            if (index === -1)
                index = 3;
            $(this).text(desc[index]).fadeIn(500);
            clearInterval(interval);
            interval = setInterval(function() {
                $('#book1_desc').fadeOut(500, function() {
                    index++;
                    if (index === desc.length)
                        index = 0;
                    $(this).text(desc[index]).fadeIn(500);
                });
            }, 4000);
        })
    }
    rightarrow.onclick = function () {
        $('#book1_desc').fadeOut(500,function () {
            index++;
            if (index === desc.length)
                index = 0;
            $(this).text(desc[index]).fadeIn(500);
            clearInterval(interval);
            interval = setInterval(function() {
                $('#book1_desc').fadeOut(500, function() {
                    index++;
                    if (index === desc.length)
                        index = 0;
                    $(this).text(desc[index]).fadeIn(500);
                });
            }, 4000);
        })
    }   
}


