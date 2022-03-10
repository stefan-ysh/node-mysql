// mySql
const mysql = require('mysql');

// 控制台信息打印
const log4js = require('log4js');

const logger = log4js.getLogger();

logger.level = 'info';

// logger.debug('this is debug');
// logger.info('this is info');
// logger.warn('this is warn');
// logger.error('this is error');
// logger.mark('this is mark');
// logger.trace('this is trace');
// logger.fatal('this is fatal');

// 数据库连接信息
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'ry-config'
    // host	主机地址 （默认：localhost）
    // user	用户名
    // password	密码
    // port	端口号 （默认：3306）
    // database	数据库名
    // charset	连接字符集（默认：'UTF8_GENERAL_CI'，注意字符集的字母都要大写）
    // localAddress	此IP用于TCP连接（可选）
    // socketPath	连接到unix域路径，当使用 host 和 port 时会被忽略
    // timezone	时区（默认：'local'）
    // connectTimeout	连接超时（默认：不限制；单位：毫秒）
    // stringifyObjects	是否序列化对象
    // typeCast	是否将列值转化为本地JavaScript类型值 （默认：true）
    // queryFormat	自定义query语句格式化方法
    // supportBigNumbers	数据库支持bigint或decimal类型列时，需要设此option为true （默认：false）
    // bigNumberStrings	supportBigNumbers和bigNumberStrings启用 强制bigint或decimal列以JavaScript字符串类型返回（默认：false）
    // dateStrings	强制timestamp,datetime,data类型以字符串类型返回，而不是JavaScript Date类型（默认：false）
    // debug	开启调试（默认：false）
    // multipleStatements	是否许一个query中有多个MySQL语句 （默认：false）
    // flags	用于修改连接标志
    // ssl	使用ssl参数（与crypto.createCredenitals参数格式一至）或一个包含ssl配置文件名称的字符串，目前只捆绑Amazon RDS的配置文件
});

// 连接数据库
connection.connect();

//增
// var addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
// var addSqlParams = ['菜鸟工具', 'https://c.runoob.com', '23453', 'CN'];
// connection.query(addSql, addSqlParams, function (err, result) {
//     if (err) {
//         logger.error('[INSERT ERROR] - ', err.message);
//         return;
//     }

//     console.log('--------------------------INSERT----------------------------');
//     //console.log('INSERT ID:',result.insertId);        
//     logger.info('INSERT ID:', result);
//     console.log('-------------------------------------------------------------');
// });

//删
// var delSql = 'DELETE FROM websites where id=9';
// connection.query(delSql, function (err, result) {
//     if (err) {
//         logger.error('[DELETE ERROR] - ', err.message);
//         return;
//     }

//     console.log('--------------------------DELETE----------------------------');
//     logger.info('DELETE affectedRows', result.affectedRows);
//     console.log('------------------------------------------------------------');
// });

//改
// var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
// var modSqlParams = ['ysh', 'https://stefan-ysh.github.io/', 4];
// connection.query(modSql, modSqlParams, function (err, result) {
//     if (err) {
//         logger.error('[UPDATE ERROR] - ', err.message);
//         return;
//     }
//     console.log('--------------------------UPDATE----------------------------');
//     logger.info('UPDATE affectedRows', result.affectedRows);
//     console.log('------------------------------------------------------------');
// });

// 查
// var sql = 'SELECT * FROM websites';
// connection.query(sql, function (err, result) {
//     if (err) {
//         logger.error('[SELECT ERROR] - ', err.message);
//         return;
//     }
//     console.log('--------------------------SELECT----------------------------');
//     logger.info(result);
//     console.log('------------------------------------------------------------');
// });

connection.end();