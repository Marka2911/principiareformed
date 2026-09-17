const timelineData = [
    {
        date: "11 març 2027",
        title: "Pau Cereijo",
        description:
            "Un recull de mètodes i projectes de participació ciutadana i resultats pràctics."
    },
    {
        date: "12 gener 2028",
        title: "Pau Cereijo",
        description:
            "Extracte d'estratègies per enfortir organitzacions de base a municipis petits."
    },
    {
        date: "5 febrer 2028",
        title: "Martí Salvador",
        description:
            "Resultats de les primeres proves d'ús de la plataforma Demarquia per ajuntaments petits i escabilitat."
    },
    {
        date: "15 desembre 2028",
        title: "Pau Cereijo",
        description:
            "Com impulsar la perspectiva de gènere a través de conjunts de dades accessibles i útils."
    }
];

function Timeline() {
    return (
        <div className="timeline">
            {timelineData.map((event, index) => (
                <div className="timeline-item" key={index}>

                    <div className="timeline-dot"></div>

                    <div className="timeline-content">
                        <div className="timeline-title">
                            {event.title} — {event.date}
                        </div>

                        <div className="timeline-description">
                            {event.description}
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default Timeline;