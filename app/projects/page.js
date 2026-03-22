import styles from "./page.module.css";
import Tag from "@/components/Tag/Tag";
import projectsData from '@/data/projects.json'
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: 'Mes Projets | Portfolio',
    description: 'Decouvrez mes projets de développement web : applications React, sites Next.js et plus enccore.'
}

export default function Projects() {
return (
<div className="container">
    <h1 className="title">Mes Projets</h1>
    <p className="description">
    Découvrez les projets sur lesquels j&apos;ai travaillé
    </p>

    <div className={styles.grid}>
        {projectsData.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                    {/* <img src={project.image} alt={project.title} className={styles.image} /> */}
                    <Image src={project.image} alt={project.title} width={800} height={500} className={styles.image} 
                    />
                </div>
                <div className={styles.content}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <div className={styles.tags}>
                        {project.tags.map((tech, index) => (
                            <Tag key={index} isDark={true}>{tech}</Tag>
                        ))}
                    </div>
                    <span className={styles.viewMore}>Voir le projet</span>
                </div>
            </Link>
        ))}
    </div>
</div>
);
}