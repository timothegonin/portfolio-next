import Link from "next/link";
import styles from "./page.module.css";

export default function Formations() {
const formations = [
{
    slug: "developpeur-concepteur-logiciel",
    title: "Développeur Concepteur Logiciel",
    description: "Formation en Développement et conception logiciel",
    tags: ["RNCP38038 - Niveau 6", "Bac +4", "9 mois"],
},
{
    slug: "developpeur-front-end",
    title: "Développeur Front-End",
    description: "Formation en Développement Front-End",
    tags: ["RNCP31114 - Niveau 5", "9 mois"],
},
{
    slug: "integrateur-web",
    title: "Intégrateur Web",
    description: "Dispositif preparatoire d'entrée en école d'informatique",
    tags: ["3 mois"],
},
];

return (
<div className={styles.container}>
    <h1 className={styles.title}>Mes Formations</h1>
    <p className={styles.description}>
    Découvrez les parcours diplômants
    </p>

    <div className={styles.grid}>
    {formations.map((formation) => (
        <Link
        href={`/formations/${formation.slug}`}
        key={formation.slug}
        className={styles.card}
        >
        <h2>{formation.title}</h2>
        <p>{formation.description}</p>
        <div className={styles.tags}>
            {formation.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
            ))}
        </div>
        <span className={styles.viewMore}>Voir la formation →</span>
        </Link>
    ))}
    </div>
</div>
);
}