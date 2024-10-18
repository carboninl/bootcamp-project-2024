type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

//list of currently posted blogs
const blogs: Blog[] = [
  {
    title: "I love sour cream",
    date: "10/15/2024",
    description:
      "Learn about my love for sour cream!",
    image: "/../images/sourcream.jpg",
    imageAlt: "yummy sour cream",
    slug: "Sour-Cream-Blog",
  },
  {
    title: "Software Engineering in Rome",
    date: "10/15/2024",
    description:
      "Learn about my amazing experience abroad so far!",
    image: "/../images/leaning-tower.jpg",
    imageAlt:
      "me hitting the classic tourist pose with the Leaning Towe of Pisa",
    slug: "Abroad-In-Rome",
  },
];

//logic for dynamically adding blogs into DOM
function addBlogs(blogs: Blog[]) {
  const blogContainer = document.getElementById("blog-container");

  blogs.forEach((blog) => {
    //build new blog entry element
    const newEntry = document.createElement("div");
    newEntry.className = "blog-entry";
    newEntry.innerHTML = `
      <a href="../blogs/${blog.slug}.html">
        <h1>${blog.title}</h1>
      </a>
      <h5>${blog.date}</h5>
      <img src="${blog.image}" alt="${blog.imageAlt}">
      <p>${blog.description}</p>
    `;
    //append new entry to blogContainer
    if (blogContainer) {
      blogContainer.appendChild(newEntry);
    } else {
      console.error("Blog container not found.");
      return;
    }
  });
  return;
}

addBlogs(blogs); //add all blogs in the list
