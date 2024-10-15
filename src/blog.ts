type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string
    slug: string;
}

const blogs: Blog[] = [
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
}
]

const blogContainer = document.getElementById('blog-container');

blogs.forEach(blog => {
    const newEntry = document.createElement('div');
    newEntry.className = "blog-entry"; 

    const entryHeader = document.createElement('h1');
    entryHeader.innerHTML = blog.title;

    const entryImage = document.createElement('img');
    entryImage.src = blog.image;
    entryImage.alt = blog.imageAlt;

    const entryDescription = document.createElement('p');
    entryDescription.innerHTML = blog.description;

    newEntry.appendChild(entryHeader);
    newEntry.appendChild(entryImage);
    newEntry.appendChild(entryDescription);
})
