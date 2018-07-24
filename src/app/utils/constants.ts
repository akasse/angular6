export const TOKEN_NAME: string = 'jwt_token';

export const API_URL_BASE: string = 'https://www.yobanteexpress.com';
export const API_TOKEN: string = 'token';

//export const API_URL_BASE: string = 'http:://127.0.0.1';

//============== API MODULE USER===================
export const API_LOGIN: string = '/yobante/auth/connect/';
export const API_LOGIN_ROLES: string = '/yobante/auth/connect/getChoices/';
export const API_CHANGE_PASSWORD: string = '/yobante/auth/connect/changePassword/';
export const API_PROFIL_USER: string = '/yobante/auth/profile/';
export const API_NOTIFICATION: string = '/yobante/auth/notifications/';

export const API_PROFIL_CHANGE_PASSWORD: string = '/yobante/auth/profile/changePassword';
export const API_PROFIL_CHANGE_FIRSTNAME: string = '/yobante/auth/profile/changeFirstname';
export const API_PROFIL_CHANGE_LASTNAME: string = '/yobante/auth/profile/changeLastname';
export const API_PROFIL_CHANGE_NUMBER: string = '/yobante/auth/profile/changeNumber';
export const API_EVENEMENTS: string = '/yobante/auth/events/';
export const API_LIST_USERS: string = '/yobante/auth/users';
export const API_GET_USER: string = '/yobante/auth/users/get';

export const API_INSCRIPTION: string = '/yobante/auth/connect/subscribe/';

export const API_ADDUSER: string = '/yobante/auth/users/add/';
export const API_EDITUSER: string = '/yobante/auth/users/edit/';
export const API_VALIDATIONUSER: string = '/yobante/auth/users/validate/';

export const API_CHANGEPASSWORD1: string = '/yobante/auth/profile/changePassword';


//============== API MODULE AGENT===================
export const API_AGENT_AGENTS: string = '/yobante/agent/agent/';
export const API_AGENT_AGENTS_DETAILS: string = '/yobante/agent/agent/details/';
export const API_AGENT_ADD: string = '/yobante/agent/agent/add';
export const API_AGENT_AGENT: string = '/yobante/agent/agent/get/?objet=agent&params=id';
export const API_AGENT_VALIDATION: string = '/yobante/agent/agent/validate';
export const API_AGENT_NATURECOLIS: string = '/yobante/agent/nature_colis/get/';
export const API_AGENT_EMBALLAGES: string = '/yobante/agent/emballage/get';
export const API_COMPLEMENTADRESSE: string = '/yobante/agent/adresse/get/?params=iso1,pays,region,departement,';

export const API_COLIS: string = '/yobante/agent/colis/';
export const API_COLIS_DETAILS: string = '/yobante/agent/colis/details/';
export const API_COLIS_EVENTS: string = '/yobante/agent/colis/events/';
export const API_COLIS_SEND: string = '/yobante/agent/colis/send';
export const API_POINTRELAIS: string = '/yobante/agent/point_relais/';
export const API_POINTRELAIS_HORRAIRES: string = '/yobante/agent/point_relais/horaire';
export const API_POINTRELAIS_ADD_HORRAIRES: string = '/yobante/agent/point_relais/add_horaire';
export const API_POINTRELAIS_EDIT_HORRAIRES: string = '/yobante/agent/point_relais/edit_horaire';
export const API_POINTRELAIS_RECHERCHE: string = '/yobante/agent/point_relais/?params=region';
export const API_POINTRELAIS_ADD_PHOTO: string = '/yobante/agent/point_relais/add_photo';


//============== API MODULE TRANSPORTEUR===================
export const API_TRANSPORTEUR_ADD: string = '/yobante/transporteur/transporteur/add';
export const API_TRANSPORTEUR_UPDATE: string = '/yobante/transporteur/transporteur/validate';
export const API_TRANSPORTEUR_VALIDATION: string = '/yobante/transporteur/transporteur/validate';
export const API_TRANSPORTEUR_TRAJET: string = '/yobante/transporteur/trajet';
export const API_TRANSPORTEUR_DETAIL: string = '/yobante/transporteur/transporteur/details';
export const API_TRANSPORTEUR_COLIS: string = '/yobante/transporteur/trajet/colis';
export const API_TRANSPORTEUR_TRAJET_DETAILS: string = '/yobante/transporteur/trajet/details';
export const API_TRANSPORTEUR_MOYEN_TRANSPORT: string = '/yobante/transporteur/moyen_transport';
export const API_TRANSPORTEUR: string = '/yobante/transporteur/transporteur';
export const API_TRANSPORTEUR_GET: string = '/yobante/transporteur/transporteur/getTransporteur';
export const API_TRANSPORTEUR_TYPE_TRANSPORT: string = '/yobante/transporteur/type_transporteur';

//============== API MODULE EXPEDITAIRE===================
export const API_EXPEDITAIRE_ADD: string = '/yobante/expeditaire/expeditaire/add';
export const API_EXPEDITAIRE_COLIS: string = '/yobante/expeditaire/expeditaire/colis';

export const API_EXPEDITAIRE_PHOTOFACADE: string = '/yobante/expeditaire/expeditaire/add_photo';
export const API_EXPEDITAIRE_UPDATE: string = '/yobante/expeditaire/expeditaire/edit/';
export const API_EXPEDITAIRE_VALIDATION: string = '/yobante/expeditaire/expeditaire/validate';
export const API_EXPEDITAIRE_TRAJET: string = '/yobante/EXPEDITAIRE/trajet_EXPEDITAIRE/add';
export const API_EXPEDITAIRE_MOYEN_TRANSPORT: string = '/yobante/EXPEDITAIRE/moyen_transport';
export const API_EXPEDITAIRE: string = '/yobante/expeditaire/expeditaire/';
export const API_EXPEDITAIRE_TYPE_TRANSPORT: string = '/yobante/expeditaire/type_expeditaire';
export const API_EXPEDITAIRE_GET: string ='/yobante/expeditaire/expeditaire/details';

//============== API COMPLEMENT ADRESSE===================
export const API_ADRESSE_REGION : string = '/yobante/agent/pays/region/';
export const API_ADRESSE_DEPARTEMENT : string = '/yobante/agent/pays/departement/';
export const API_ADRESSE_COMMUNE : string = '/yobante/agent/pays/commune_ou_arrondissement/';
export const API_ADRESSE_ARRONDISSEMENT : string = '/yobante/agent/pays/commune_d_arrondissement/';
export const API_ADRESSE_UPDATE_ADRESSE : string = '/yobante/agent/adresse/edit/';
export const API_ADRESSE_UPDATE_GEOLOCALISATION : string = '/yobante/agent/adresse/editGeo';
export const API_ADRESSE_LOCALITE : string = '';


export const TOKEN : string = 'currentUser';
export const CURRENT_USER : string = 'currentUser';



//============== API ADMIN Dashboard ===================
export const API_ADMIN_DASHBOARD : string = '/yobante/auth/dashboard/';

//============== NOTIFICATION TOAST===================
export const NOTIF_SUCCESS: string = 'Succés';
export const NOTIF_MODIFICATION: string = 'Modifie';
export const NOTIF_ERROR: string = 'Erreur';
export const NOTIF_ERROR_MSG: string = 'Vérifiez votre connection !';

//============== API PAYEMENT ===================
export const API_PAYEMENT : string = '/yobante/paiement/compte/recharger';






