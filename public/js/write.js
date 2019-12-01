// This function does an API call to delete posts
function deletePost(id) {
    $.ajax({
            method: "DELETE",
            url: "/api/posts/" + id
        })
        .then(function() {
            getPosts(postCategorySelect.val());
        });
}