// This script was made by AI (and then modified by AI) for the purpose of viewing the
// users and their passwords in the database and updating their passwords.
// The purpose of this was to help with testing the change password functionality.
// The passwords first generated for the project were kept plain for keeping things simple.
// However, the change password files added to this project have demand more complexity in passwords.
// Thus, this script can revert the passwords to what the programmers are used to.
// To use this script, run `node viewUsers.js` to see all users.
// To update a user's password, run `node viewUsers.js <username> <newPassword>.
// Example: `node viewUsers.js testuser newpassword123
// Make sure cd to Minnow/backend/ before running the script.

import 'dotenv/config';
import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

const args = process.argv.slice(2);

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }

    if (args.length === 0) {
        // No args: show all users
        console.log('Connected to the database!\n');
        connection.query('SELECT * FROM users', (err, results) => {
            if (err) {
                console.error('Error querying users:', err);
            } else {
                console.log('Users in database:');
                console.table(results);
            }
            connection.end();
        });
    } else if (args.length === 2) {
        // Two args: update password
        const [username, newPassword] = args;
        console.log(`Updating password for user: ${username}`);
        
        connection.query('UPDATE users SET password = ? WHERE username = ?', [newPassword, username], (err, results) => {
            if (err) {
                console.error('Error updating password:', err);
            } else if (results.affectedRows === 0) {
                console.error(`User '${username}' not found.`);
            } else {
                console.log(`Password updated successfully for '${username}' to '${newPassword}'`);
            }
            connection.end();
        });
    } else {
        console.log('Usage:');
        console.log('  node viewUsers.js                    (view all users)');
        console.log('  node viewUsers.js <username> <newPassword>  (update password)');
        connection.end();
    }
});
