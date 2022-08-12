const listPush = (rows, str) => {
  const arr = [];
  for (let item of rows) {
    arr.push(item[str]);
  }
  return arr;
};

const calcMakes = (rows, num) => {
  let sum = 0;
  for (let item of rows) {
    if (Number(item.vehicle[item.vehicle.length - 1]) == num) sum++;
  }
  return sum;
};

exports.controller = async (DBname, table) => {
  const { Client } = require("pg");
  const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "2875",
    port: 5432,
    database: DBname,
  });
  await client.connect();
  const response = await client.query(`SELECT * FROM public."${table}"`);
  const { rows } = response;

  const lists = [];
  const makes = [];
  for (let i = 1; i < 4; i++) {
    lists.push(listPush(rows, `list-${i}`));
  }
  for (let i = 1; i < 6; i++) {
    makes.push(calcMakes(rows, i));
  }

  await client.end();
  return {
    lists,
    makes,
  };
};
