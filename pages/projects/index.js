import * as React from "react";

import projects from "../../assets/data/projects.json";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./projects.module.css";
import Link from "@mui/material/Link";

import TechStack from "../../components/techStack/TechStack";

function Projects() {

  return (
    <div>
      <div className={styles.container}>
        {projects.data.map((project) => {
          return (
            <div className={styles.card} key={project.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.imageUrl}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button>
                    <Link href={project.liveUrl} target="_blank">
                      Live
                    </Link>
                  </Button>
                  <Button>
                    <Link href={project.githubUrl} target="_blank">
                      Repo
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
      <TechStack />
    </div>
  );
}
export default Projects;
