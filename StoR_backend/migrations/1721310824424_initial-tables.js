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
          type: 'integer',
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


    pgm.createTable('customer', {
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
        unique:true,
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
        references: 'customer(id)'
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
        type: 'integer',
        notNull:false,
        references: 'customer(id)'
      },

      task_id:{
        type: 'integer',
        notNull:false,
        references: 'task(id)'
      }

    });

    //grade
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

    //customer
    pgm.sql(`
    INSERT INTO customer (username, email, password, is_authenticated, is_service, staff_number, is_owner, grade) VALUES 
    ('Keiran', 'user1@example.com', 'password1', true, true, '30317584', false, 3),
    ('Craig', 'user2@example.com', 'password2', false, true, '30159359', true, 4),
    ('Tom', 'user3@example.com', 'password3', true, true, 'staff3', false, 8),
    ('Alice', 'user4@example.com', 'password4', true, true, 'staff4', false, 1),
    ('Bob', 'user5@example.com', 'password5', true, true, 'staff5', false, 2),
    ('Charlie', 'user6@example.com', 'password6', true, true, 'staff6', false, 5),
    ('David', 'user7@example.com', 'password7', true, true, 'staff7', false, 6),
    ('Eve', 'user8@example.com', 'password8', true, true, 'staff8', false, 7),
    ('Frank', 'user9@example.com', 'password9', true, true, 'staff9', false, 1),
    ('Grace', 'user10@example.com', 'password10', true, true, 'staff10', false, 3);
  `);

    //status
    pgm.sql(`
    INSERT INTO status (status_name) VALUES 
    ('Available'),
    ('U/S'),
    ('Maintenance'),
    ('Lost'),
    ('Decommissioned'),
    ('Reserved'),
    ('Allocated');
    `);

    //equipment type
    pgm.sql(`
    INSERT INTO equipment_type (type_name) VALUES 
    ('Laptop'),
    ('Radio'),
    ('Chair'),
    ('Weapon'),
    ('Tool'),
    ('Tablet'),
    ('Keyboard'),
    ('Tea');
    `);

    //team type
    pgm.sql(`
    INSERT INTO team_type (team_name) VALUES 
    ('A Flt'),
    ('B Flt'),
    ('C Flt'),
    ('D Flt'),
    ('1 Section'),
    ('2 Section'),
    ('EAW TG'),
    ('John Smith');
    `);

    pgm.sql(`
    INSERT INTO location (location_name, location_domestic) VALUES 
    ('Stanta', true),
    ('RAF Benson', true),
    ('MoD Corsham', true),
    ('Senny Bridge', true),
    ('Oman', false),
    ('Ramstein', false),
    ('AMAB', false),
    ('Area 51', false);
    `);

    pgm.sql(`
    INSERT INTO task (task_name, location_id, return_date) VALUES 
    ('Task 1', 1, '2024-12-31'),
    ('Task 2', 2, '2024-12-31'),
    ('Task 3', 3, '2024-12-31'),
    ('Task 4', 4, '2024-12-31'),
    ('Task 5', 5, '2024-12-31'),
    ('Task 6', 6, '2024-12-31'),
    ('Task 7', 7, '2024-12-31'),
    ('Task 8', 8, '2024-12-31');
    `);

  // Insert data into the unit table
    pgm.sql(`
        INSERT INTO unit (unit_name, unit_loc) VALUES 
        ('Appivate', 1),
        ('Unit B', 2),
        ('Unit C', 3),
        ('Unit D', 4),
        ('Unit E', 5),
        ('Unit F', 6),
        ('Unit G', 7),
        ('Unit H', 8);
    `);

    // Insert data into the unit_team_bridge table
    pgm.sql(`
        INSERT INTO unit_team_bridge (unit_id, team_id) VALUES 
        (1, 1),
        (2, 2),
        (3, 3),
        (4, 4),
        (5, 5),
        (6, 6),
        (7, 7),
        (8, 8);
    `);

    pgm.sql(`
    INSERT INTO equipment (type_id, serial_number, owner, unit, created, status, return_date, assigned_to, task_id) VALUES 
    (1, 'SN001', 1, 1, '2024-01-01', 1, '2024-12-31', 2, 1),
    (2, 'SN002', 2, 2, '2024-02-01', 2, '2024-12-31', 3, 2),
    (3, 'SN003', 3, 3, '2024-03-01', 3, '2024-12-31', 1, 3),
    (4, 'SN004', 4, 4, '2024-04-01', 4, '2024-12-31', 2, 4),
    (5, 'SN005', 5, 5, '2024-05-01', 5, '2024-12-31', 3, 5),
    (6, 'SN006', 1, 6, '2024-06-01', 6, '2024-12-31', 1, 6),
    (7, 'SN007', 2, 7, '2024-07-01', 7, '2024-12-31', 2, 7),
    (8, 'SN008', 3, 8, '2024-08-01', 6, '2024-12-31', 3, 8),
    (4, 'SN009', 1, 1, '2024-09-01', 1, '2024-12-31', 1, 1),
    (5, 'SN010', 2, 2, '2024-10-01', 2, '2024-12-31', 2, 2);
    `);
};


/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {};
