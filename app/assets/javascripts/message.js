$(function(){
  function buildHTML(message){
    if (message.image) {
      var html = 
      `<div class="message">
        <div class="message__upper-info">
          <p class="message__upper-info__user">
            ${message.user_name}
          </p>
          <p class="message__upper-info__data">
            ${message.created_at}
          </p>
        </div>
        <p class="message__text">
          ${message.body}
        </p>
        <img src=${message.image} >
      </div>`
      return html;
    } else {
      var html = 
      `<div class="message">
        <div class="message__upper-info">
          <p class="message__upper-info__user">
            ${message.user_name}
          </p>
          <p class="message__upper-info__data">
            ${message.created_at}
          </p>
        </div>
        <p class="message__text">
          ${message.body}
        </p>
      </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax ({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__message-list').append(html);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    })
    .always(function(data){
      $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
      $('#new_message')[0].reset();
      $('#submit-btn').prop('disabled', false);
    });
    var reloadMessages = function() {
      var last_message_id = $('.message:last').data("message-id");
      $.ajax({
        url: "api/messages",
        type: 'get',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function(messages) {
        console.log('success');
      })
      .fail(function() {
        alert('error');
      });
  });
});