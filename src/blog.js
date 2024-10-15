var blogs = [
    {
        title: "I love sour cream",
        date: "10/15/2024",
        description: "Sour cream is possibly one of the greatest inventions ever made. Give me a burrito bowl and I am dousing it in sour cream. If the top layer isn't purely white, I don't want it. Yummers.",
        image: "/../images/sourcream.jpg",
        imageAlt: "yummy sour cream",
        slug: "Sour-Cream-Blog",
    },
    {
        title: "Software Engineering in Rome",
        date: "10/15/2024",
        description: "I am just a few days away from marking my first month abroad in Rome. I have been seeing so many cool sights, as well as learning software engineering and even a little Italian!",
        image: "/../images/leaning-tower.jpg",
        imageAlt: "me hitting the classic tourist pose with the Leaning Towe of Pisa",
        slug: "Abroad-In-Rome",
    },
];
function addBlogs(blogs) {
    var blogContainer = document.getElementById("blog-container");
    blogs.forEach(function (blog) {
        //build new blog entry element
        var newEntry = document.createElement("div");
        newEntry.className = "blog-entry";
        //build header
        var entryHeader = document.createElement("h1");
        entryHeader.innerHTML = blog.title;
        //build image
        var entryImage = document.createElement("img");
        entryImage.src = blog.image;
        entryImage.alt = blog.imageAlt;
        //build description
        var entryDescription = document.createElement("p");
        entryDescription.innerHTML = blog.description;
        //append all the blog elements to the new entry
        newEntry.appendChild(entryHeader);
        newEntry.appendChild(entryImage);
        newEntry.appendChild(entryDescription);
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
addBlogs(blogs);