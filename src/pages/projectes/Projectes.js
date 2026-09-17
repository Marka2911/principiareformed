import MenuTitle from "../../components/MenuTitle";
function Projectes() {
  return (
    <div className="projectes">
      <MenuTitle
        title="PROJECTES"
        subtitle="Les eines que construïm per obrir camí."
        description="Creem projectes amb una doble finalitat: en primera instància, per pressionar el sector públic perquè actuï d'acord amb els valors i necessitats que defensem; i en segona instància, per fomentar nosaltres mateixos allò que el sector públic no arriba a cobrir."
        subdescription="És per aquest motiu que hem creat el nostre primer projecte, Demarquia, i actualment estem elaborant un segon, Curia Qualitas."
        backgroundColor="var(--background-color)"
      />
    </div>
  );
}

export default Projectes;
