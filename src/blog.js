//list of currently posted blogs
var blogs = [
    {
        title: "I love sour cream",
        date: "10/15/2024",
        description: "Learn about my love for sour cream!",
        image: "/../images/sourcream.jpg",
        imageAlt: "yummy sour cream",
        slug: "Sour-Cream-Blog",
    },
    {
        title: "Software Engineering in Rome",
        date: "10/15/2024",
        description: "Learn about my amazing experience abroad so far!",
        image: "/../images/leaning-tower.jpg",
        imageAlt: "me hitting the classic tourist pose with the Leaning Towe of Pisa",
        slug: "Abroad-In-Rome",
    },
];
//logic for dynamically adding blogs into DOM
function addBlogs(blogs) {
    var blogContainer = document.getElementById("blog-container");
    blogs.forEach(function (blog) {
        //build new blog entry element
        var newEntry = document.createElement("div");
        newEntry.className = "blog-entry";
        newEntry.innerHTML = "\n      <a href=\"../blogs/".concat(blog.slug, ".html\">\n        <h1>").concat(blog.title, "</h1>\n      </a>\n      <h5>").concat(blog.date, "</h5>\n      <img src=\"").concat(blog.image, "\" alt=\"").concat(blog.imageAlt, "\">\n      <p>").concat(blog.description, "</p>\n    ");
        //append new entry to blogContainer
        if (blogContainer) {
            blogContainer.appendChild(newEntry);
        }
        else {
            console.error("Blog container not found.");
            return;
        }
    });
    return;
}
addBlogs(blogs); //add all blogs in the list
