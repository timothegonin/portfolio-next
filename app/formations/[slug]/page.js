import styles from "./page.module.css";

// Liste des formations (normalement, ça viendrait d'une API ou d'une base de données)
const formations = {
"developpeur-concepteur-logiciel": {
title: "Développeur Concepteur Logiciel",
description:
    "Formation en Développement et conception logiciel. Apprenez à créer des applications avec React JS.",
details: ["RNCP38038 - Niveau 6","Bac +4", "9 mois"],
image: "/images/developpeur-concepteur-logiciel.jpg",
},
"developpeur-front-end": {
title: "Développeur Front-End",
description:
    "Formation en Développement Front-End. Apprenez à créer des sites web responsive et accessibles.",
details: ["RNCP31114 - Niveau 5", "9 mois"],
image: "/images/developpeur-front-end.jpg",
},
"integrateur-web": {
title: "Intégrateur Web",
description:
    "Dispositif preparatoire d'entrée en école d'informatique.",
details: ["3 mois"],
image: "/images/integrateur-web.jpg",
},
};

export default async function FormationDetail({ params }) {
const { slug } = await params;
const formation = formations[slug];

// Si la formation n'existe pas, afficher un message
if (!formation) {
return (
    <div className={styles.container}>
    <h1>Formation non trouvée</h1>
    <p>Cette formation n&apos;existe pas ou a été supprimée.</p>
    </div>
);
}

return (
<div className={styles.container}>
    <div className={styles.header}>
    <h1 className={styles.title}>{formation.title}</h1>
    <p className={styles.description}>{formation.description}</p>
    </div>

    <div className={styles.content}>
    <div className={styles.imageWrapper}>
        <div className={styles.imagePlaceholder}>Image de la formation</div>
    </div>

    <div className={styles.details}>
        <h2>Détails</h2>
        <div className={styles.technologies}>
        {formation.details.map((detail, index) => (
            <span key={index} className={styles.tech}>
            {detail}
            </span>
        ))}
        </div>
    </div>
    </div>
</div>
);
}