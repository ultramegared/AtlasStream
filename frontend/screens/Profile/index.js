export default function Profile() {
  return {
    screen: "Profile",
    title: "Mi Perfil",
    user: {
      photo: true,
      name: "",
      email: "",
      accountType: "Gratis",
      memberSince: ""
    },
    sections: [
      "Mi Suscripción",
      "Configuración",
      "Cerrar Sesión"
    ]
  };
}