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
  