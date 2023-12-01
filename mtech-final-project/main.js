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

$("#submitBtn").on("click", function addNewPost() {
  let newPost = $(
    `<div class="subComment">
     <i class="fa-regular fa-user"></i>
     <div class="nameAndCommentArea">
       <p class="username">${$("#displayName").val()}</p>
       <h5 class="comment">${$("#comment").val()}</h5>
     </div>
     <div class="actionItems">
       <button id="edit">Edit</button>
       <button id="delete">Delete</button>
     </div>
   </div>`
  );

  $(".commentContainer").prepend(newPost);
});

//Delete individual comments
$(document).on("click", "#delete", function () {
  console.log("Delete button clicked");
  $(this).closest(".subComment").remove();
});

//Edit in each comment
$(document).ready(function() {
  $(document).on("click", "#edit", function () {
    console.log('edit button was clicked')
    let commentContainer = $(this).closest(".subComment");
    let commentText = commentContainer.find(".comment");

    // Replace the comment text with a form
    let editForm = $(
      "<form class='edit-comment-form'><input type='text' class='edit-comment-input' value='" +
        commentText.text() +
        "'>" +
        "<button type='submit' class='save'>Save</button></form>"
    );

    commentText.replaceWith(editForm);

    // Add a submit event handler for the form
    editForm.on("submit", function (e) {
      e.preventDefault(); // Prevent default form submission

      // Update the comment text with the new value from the input field
      let newCommentText = editForm.find(".edit-comment-input").val();
      commentText.text(newCommentText);

      // Restore the comment text element and remove the form
      $(this).closest($('.nameAndCommentArea')).append(commentText);
      editForm.remove();
    });
  });
});
