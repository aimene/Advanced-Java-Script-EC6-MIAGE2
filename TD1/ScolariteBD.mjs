 class ScolariteBD {

     constructor(BD = { version: 1, etudiants: [] }) {
         this._version = BD.version;
         this._etudiants = new Map(BD.etudiants.map(e => [e._id, e]));
     }

     etudiants() {
         return this._etudiants.values();
     }

     changeVersion(version) {
         this._version = version;
     }

     ajouteEtudiants(TabEtudiants) {
         let tab = TabEtudiants.filter(e => !this._etudiants.has(e._id));
         let newtab = new Map(tab.map(e => [e._id, e]));
         this._etudiants = new Map([...this._etudiants, ...newtab])
     }

     etudiantsVerifiant(pred) {
         return [...this.etudiants()].filter(pred);
     }

     etudiant(id) {
         return (this._etudiants).get(id);
     }
 }

 export { ScolariteBD };