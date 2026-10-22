// 1. Créer un tableau de 5 utilisateurs
const utilisateurs = [
  { prenom: "Alice", nom: "Dupont", age: 19, status: true, role: "admin" },
  { prenom: "Bob", nom: "Martin", age: 34, status: false, role: "user" },
  { prenom: "Charlie", nom: "Bernard", age: 22, status: true, role: "admin" },
  { prenom: "Diane", nom: "Petit", age: 40, status: true, role: "user" },
  { prenom: "Eve", nom: "Durand", age: 25, status: false, role: "admin" }
];

// 2. Fonction fléchée pour récupérer les admins actifs (Correction des espaces dans "admin")
const getAdmins = (utilisateurs) => {
  return utilisateurs.filter(user => user.role === "admin" && user.status === true);
};
let res = getAdmins(utilisateurs);
console.log("Admins actifs :", res);

// 3. Fonction pour afficher les informations d'un utilisateur (Correction de la déstructuration)
const afficherUtilisateur = (utilisateur) => {
  const { prenom, nom, role } = utilisateur;
  console.log(`${prenom} ${nom} : ${role}`);
};
afficherUtilisateur(utilisateurs[2]);

// 4. Créer un nouveau tableau contenant uniquement des objets simplifiés (map et déstructuration)
const nouveautableau = utilisateurs.map(({ prenom, nom, role }) => ({ prenom, nom, role }));
console.log("Tableau simplifié :", nouveautableau);

// 5. Transformer le tableau pour grouper par rôle (reduce)
const uti = utilisateurs.reduce((acc, utilisateur) => {
  const { role } = utilisateur;
  if (!acc[role]) {
    acc[role] = [];
  }
  acc[role].push(utilisateur);
  return acc;
}, {});
console.log("Groupé par rôle :", uti);

// 6. Trouver le premier utilisateur âgé de 25 ans avec find
const utilisateur25ans = utilisateurs.find(user => user.age === 25);
console.log("Utilisateur de 25 ans :", utilisateur25ans);

// 7. Ajouter un nouvel utilisateur dans un nouveau tableau appelé 'equi' (Spread operator)
const equi = [...utilisateurs, { prenom: "Frank", nom: "Lemoine", age: 30, status: true, role: "user" }];
console.log("Nouveau tableau 'equi' :", equi);