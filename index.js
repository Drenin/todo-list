$(function (){
    $("#create").on("submit", function (event) {
        event.preventDefault();
        // this는 create의 form이고 여기서 input의 value를 가져온다
        var value = $(this).find("input").val();

        $("#todo-list").append(
            '<li>' +
            "<span>" +
            value +
            "</span>" +
            '<button type="button" class="complete">완료</button> ' +
            '<button type="button" class="remove">삭제</button>' +
            '</li>');
        //this는 form, 할일 등록시에 인풋을 삭제하는 트리거
        $(this).trigger("reset");
    });
    //클릭 이벤트, 완료 버튼을 누르면 부모클래스에 "Completed" 클래스를 추가해준다.
    $("body").on("click", ".complete", function() {
        // this는 완료버튼
        $(this).parent("li").addClass("completed");

    });
    // 삭제 이벤트
    $("body").on("click", ".remove", function() {
        $(this).parent("li").remove();

    });
});