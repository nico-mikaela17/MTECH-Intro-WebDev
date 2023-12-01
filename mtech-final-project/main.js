$(document).ready(function () {
  let mainComment = $(".mainComment");
  let commentOffset = mainComment.offset().top;

  $(window).scroll(function () {
    let scrollPos = $(window).scrollTop();

    if (scrollPos >= commentOffset) {
      mainComment.addClass("fixedComment");
    } else {
      mainComment.removeClass("fixedComment");
    }
  });
});


let submitCommentBtn = $("#submitBtn");
submitCommentBtn.on("click", function addNewPost(username, postContent) {
  let newPost = $(
    `<div class="subComment">
     <i class="fa-regular fa-user"></i>
     <div class="nameAndCommentArea">
       <p class="username">${$('#displayName').val()}</p>
       <h5>${$('#comment').val()}</h5>
     </div>
     <div class="actionItems">
       <p>Edit</p>
       <p>Delete</p>
     </div>
   </div>`
  );

  $(".commentContainer").prepend(newPost);
});
