module.exports = (sequelize, dataTypes) => {
    let alias = 'Actors';
    let cols = {
       id: {
        type: dataTypes.INTEGER(10),
              unique: true,
              autoIncrement: true,
              primaryKey: true
       },
       first_name: {
        type: dataTypes.STRING(100)
       },
       last_name: {
           type: dataTypes.STRING(100)
       },
       rating: {
        type: dataTypes.DECIMAL(3,1),
        
       }

    };

    let config = {
        tableName: 'actors', // Nombre de la tabla en DB SQL
        timestamps: false// Cuando la BD no cuenta con las columnas "CreateDate y UpdateDate"
    }

    const Actor = sequelize.define(alias, cols, config); // Actor Por lo general lleva el nombre del Archivo (models/Actor)

    return Actor;
}