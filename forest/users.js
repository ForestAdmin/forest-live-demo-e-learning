const { collection } = require('forest-express-sequelize');
const users = require('../models/users');
const lessons = require('../models/lessons');


// This file allows you to add to your Forest UI:
// - Smart actions: https://docs.forestadmin.com/documentation/reference-guide/actions/create-and-manage-smart-actions
// - Smart fields: https://docs.forestadmin.com/documentation/reference-guide/fields/create-and-manage-smart-fields
// - Smart relationships: https://docs.forestadmin.com/documentation/reference-guide/relationships/create-a-smart-relationship
// - Smart segments: https://docs.forestadmin.com/documentation/reference-guide/segments/smart-segments
collection('users', {
  actions: [{
    name: 'New enrollment',
    type: 'single',
    fields: [
      {
        field: 'student name',
        type: 'String',
        isReadOnly: true,
        reference: 'users.email'
      },
      {
        field: 'course',
        type: 'Enum',
        enums: ['Introduction to Python Programming',
                'Web Development with HTML and CSS',
                'Introduction to Machine Learning',
                'Database Systems']
      }
    ],
    hooks: {
      load: async ({ fields, request }) => {
        const student = fields.find(field => field.field === 'student name');
        student.value = request.body.data.attributes.ids[0];

        return fields;
      },
    },
  }],
  fields: [
  {
    field: 'fullname',
    type: 'String',
    get: (user) => {
      return user.firstname + ' ' + user.lastname;
    }
  }],
  segments: [],
  
});
