import style from "./projects.module.css";
import connectDB from "@/database/db";
import ProjectModel, {Project} from "@/database/projectSchema"
import ProjectComponent from "@/components/project";

async function getProjects() {
  await connectDB(); // function from db.ts before

  try {
    // query for all projects and sort by name
    const projects = await ProjectModel.find().sort({ name: 1 }).orFail();
    // send a response as the projects as the message
    return projects; 
  } catch (err) {
    return [];
  }
}

export default async function Portfolio() {
  const projects: Project[] = await getProjects();
console.log(projects)

  return (
    <div>
      <h1 className="pageTitle">Projects</h1>
      <div className={style.projectContainer}>
        {projects.map((project) => (
          <ProjectComponent {...(project as any)._doc} key={project.name} />
        ))}
      </div>
    </div>
  );
}
