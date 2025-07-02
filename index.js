





const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "  just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "  I'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "  gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let currentIndex = 0;

const postImg = document.getElementById("post");
const avatar = document.querySelector(".avatar");
const nameEl = document.querySelector(".name");
const locationEl = document.querySelector(".location");
const usernameEl = document.getElementById("username");
const commentEl = document.getElementById("comment");
const likesEl = document.getElementById("likes");
const changeBtn = document.getElementById("change");

changeBtn.addEventListener("click", function () {
    // Avança para o próximo post
    currentIndex = (currentIndex + 1) % posts.length;

    const post = posts[currentIndex];

    postImg.src = post.post;
    avatar.src = post.avatar;
    nameEl.textContent = post.name;
    locationEl.textContent = post.location;
    usernameEl.textContent = post.username;
    commentEl.textContent = post.comment;
    likesEl.textContent = post.likes.toLocaleString(); // ex: 21,345
});