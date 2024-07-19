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

    pgm.createTable('grade', {
        id: 'id',
        grade_name: { 
          type: 'varchar(50)',
          unique:true,
          notNull:true,
        }
      })

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
      },
      grade:{
        type: 'integer',
        references: 'grade(id)'
      }
    });

    // pgm.createTable('grade', {
    //   id: 'id',
    //   grade_name: { 
    //     type: 'varchar(50)',
    //     unique:true,
    //     notNull:true,
    //   }
    // })

    // pgm.addColumn('user', {
    //   grade: {
    //     type: 'integer',
    //     references: 'grade(id)',
    //     notNull: true
    //   }
    // });

    pgm.sql(`
    INSERT INTO grade (grade_name) VALUES 
    ('AS2'),
    ('AS1'),
    ('Cpl'),
    ('Sgt'),
    ('FS'),
    ('Chf Tch'),
    ('WO'),
    ('Flt Lt');`);

  pgm.sql(`
    INSERT INTO "user" (username, email, password, is_authenticated, is_service, staff_number, is_owner, grade) VALUES 
    ('Keiran', 'user1@example.com', 'password1', true, true, '30317584', false, 3),
    ('Craig', 'user2@example.com', 'password2', false, true, '30159359', true, 4),
    ('Tom', 'user3@example.com', 'password3', true, true, 'staff3', false, 8);
  `);
  };

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {};
