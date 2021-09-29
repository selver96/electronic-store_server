import {Sequelize} from 'sequelize';

const sequelize = new Sequelize(
    "shop",
    "",
    "",
    {
        dialect:"sqlite",
        storage:"src/shop.sqlite"
    }
);

export = sequelize;