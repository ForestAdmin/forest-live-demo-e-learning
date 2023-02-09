// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Quizzes = sequelize.define('quizzes', {
    question: {
      type: DataTypes.STRING,
    },
    answer: {
      type: DataTypes.ENUM(
        'A',
        'B',
        'C',
        'D',
      ),
    },
  }, {
    tableName: 'quizzes',
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  Quizzes.associate = (models) => {
    Quizzes.belongsTo(models.lessons, {
      foreignKey: {
        name: 'lessonIdKey',
        field: 'lesson_id',
      },
      as: 'lesson',
    });
  };

  return Quizzes;
};
