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


   pgm.createTable('status', {
    id: 'id',
    status_name: { 
      type: 'varchar(50)',
      unique:true,
      notNull:true,
    }
  });

    pgm.createTable('grade', {
        id: 'id',
        grade_name: { 
          type: 'varchar(50)',
          unique:true,
          notNull:true,
        }
      });

      pgm.createTable('equipment_type', {
        id: 'id',
        type_name: { 
          type: 'varchar(50)',
          unique:true,
          notNull:true,
        }
      });

      pgm.createTable('team_type', {
        id: 'id',
        team_name: { 
          type: 'varchar(50)',
          unique:true,
          notNull:true,
        }
      });

      pgm.createTable('location', {
        id: 'id',
        location_name: { 
          type: 'varchar(50)',
          notNull:true,
        },
        location_domestic: { 
          type: 'boolean',
          notNull:true,
        }
      });

      pgm.createTable('task', {
        id: 'id',
        task_name: { 
          type: 'varchar(50)',
          notNull:true,
        },
        location_id: { 
          type: 'integar',
          notNull:true,
          references: 'location(id)'
        },
        return_date: { 
          type: 'date',
          notNull:true,
        },
      });

      pgm.createTable('unit', {
        id: 'id',
        unit_name: { 
          type: 'varchar(50)',
          unique:true,
          notNull:true,
        },
        unit_loc: { 
          type: 'integer',
          notNull:true,
          references: 'location(id)'
        }
      });

      pgm.createTable('unit_team_bridge', {
        id: 'id',
        unit_id: { 
          type: 'integer',
          notNull:true,
          references: 'unit(id)'

        },
        team_id: { 
          type: 'integer',
          notNull:true,
          references: 'team_type(id)'
        }
      });


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


    pgm.createTable('equipment', {
      id: 'id',
      type_id: { 
        type: 'integer',
        notNull:true,
        references: 'equipment_type(id)'
      },
      serial_number: {
        type: 'varchar(75)',
        notNull:true,
        unique: true
      },
      owner: {
        type: 'integer',
        notNull:true,
        references: 'user(id)'
      },
      unit:{
        type: 'integer',
        notNull:true,
        references: 'unit(id)'
      },
      created:{
        type: 'date',
        notNull:true
      },
      status:{
        type: 'integer',
        notNull:true,
        references: 'status(id)'
      },
      return_date:{
        type: 'date',
        notNull:false
      },
      assigned_to:{
        type: 'date',
        notNull:false,
        references: 'user(id)'
      },
      task_id:{
        type: 'integer',
        notNull:false,
        references: 'task(id)'
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
