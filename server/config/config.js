//process: bjeto global que corre todo el tiempo a lo largo de toda la app.
// se actualiza depende el enviromen o entorno en el que esta corriendo

//=========================
// PUERTO
//=========================

process.env.PORT = process.env.PORT || 3000; //variable global


//=========================
// ENTORNO
//=========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=========================
// Vencimiento del Token
//=========================
// 60 segundos
// 60 minutos
// 24 hora
// 30 días
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//=========================
// SEED de autenticación
//=========================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';
//se deberia crear con heroku u otra app una variable para que no se sepa el seed

//=========================
// BASE DE DATOS
//=========================

let urlDB;

// if (process.env.NODE_ENV === 'dev') {
//     urlDB = 'mongodb://localhost:27017/cafe';
// } else {
urlDB = 'mongodb+srv://micaeprado:jWTCMTj9qYdEm6J@cluster0-l5dgu.mongodb.net/cafe';
// }

process.env.URLDB = urlDB;