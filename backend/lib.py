from flask.ext.mysql import MySQL

mysql = MySQL()


def mysql_execute(statement, *args):
    cursor = mysql.get_db().cursor()
    cursor.execute(statement, args)
