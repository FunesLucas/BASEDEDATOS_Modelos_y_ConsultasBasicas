module.exports = (sequelize, dataTypes) => {
    let alias = 'Movies';
    let cols = {
       
        id: {
            type: dataTypes.INTEGER(10),
            unique: true,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: dataTypes.STRING(500)
        },
        rating: {
            type: dataTypes.DECIMAL,
            unique : true
        },
        awards: {
            type: dataTypes.INTEGER(10),
            unique: true
        },
        length: {
            type: dataTypes.INTEGER(10),
            unique : true
        },
        release_date: {
            type: dataTypes.DATE
        }

    };

    let config = {
        tableName: 'movies', // Nombre de la tabla en DB SQL
        timestamps: false // Cuando la BD no cuenta con las columnas "CreateDate y UpdateDate"
    }

    const Movie = sequelize.define(alias, cols, config); // Movie Por lo general lleva el nombre del Archivo (models/Movie)

    return Movie;
}