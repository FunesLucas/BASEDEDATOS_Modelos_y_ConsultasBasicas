module.exports = (sequelize, dataTypes) => {
    let alias = 'Generos';
    let cols = {
       id: {
        type: dataTypes.INTEGER(10),
              unique: true,
              autoIncrement: true,
              primaryKey: true
       },
       name: {
        type: dataTypes.STRING(100)
       },
       ranking: {
        type: dataTypes.INTEGER(10),
        unique: true
       },
       active: {
        type: dataTypes.TINYINT(1)
       }

    };

    let config = {
        tableName: 'genres', // Nombre de la tabla en DB SQL
        timestamps: false// Cuando la BD no cuenta con las columnas "CreateDate y UpdateDate"
    }

    const Genero = sequelize.define(alias, cols, config); // Genero Por lo general lleva el nombre del Archivo (models/Movie)

    return Genero;
}