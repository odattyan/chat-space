$(function() {
  var search_user = $("#user-search-result")

  function addUser(user) {
    var html =  `
    <div class="chat-group-user clearfix">
      <p class="chat-group-user__name">${user.name}</p>
      <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
    </div>
    `
    search_user.append(html);
  }

  function addNoUser() {
    var html = `
               <div class="chat-group-user clearfix">
                <p class="chat-group-user__name">ユーザーが見つかりません</p>
               </div>`
    search_user.append(html);
  }

  $(".chat-group-form__field--right").on('click', "#user-search-field", function(){
    
  })

  $('#user-search-field').on("keyup", function() {
    var input = $("#user-search-field").val();
    $.ajax({
      type: "GET",
      url: "/users",
      data: { keyword: input },
      dataType: "json"
    })
    .done(function(users) {
      search_user.empty();

      if (users.length !== 0) {
        users.forEach(function(user){
          addUser(user);
        });
      }
      else {
        addNoUser();
      }
    })
    .fail(function() {
      alert("ユーザー検索に失敗しました");
    });
  });
});