/**
 * https://salsita.github.io/node-pg-migrate/getting-started
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
    pgm.createTable('user', {
      id: 'id',
      username: { 
        type: 'varchar(50)',
        unique:true,
        notNull:true
      },
      email: {
        type: 'varchar(75)',
        notNull:true
      },
      password: {
        type: 'varchar(75)',
        notNull:true
      },
      is_authenticated:{
        type: 'boolean',
        notNull:true
      },
      is_service:{
        type: 'boolean',
        notNull:true
      },
      staff_number:{
        type: 'varchar(30)',
        unique: true,
        notNull:false
      },
      is_owner:{
        type: 'boolean',
        notNull:true
      }
    });

    pgm.createTable('grade', {
      id: 'id',
      grade_name: { 
        type: 'varchar(50)',
        unique:true,
        notNull:true,
      }
    })//pgm.createIndex('posts', 'userId');

    pgm.addColumn('user', {
      grade: {
        type: 'integer',
        references: 'grade(id)',
        notNull: true
      }
    });
  };

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {};
