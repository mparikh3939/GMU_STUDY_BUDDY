module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        /****************** PRIVATE INFO *****************/
        /**
         * Check if includes “@gmu.edu” substring
         */
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        /**
         * Hashed with bycrypt
         */
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        /**
         * List/array of match users to be displayed on cards.
         * Contains all user info (will change later)
         */
        matchList: {
            type: DataTypes.JSON,
            allowNull: true,
        },
        numMatches: {
            type: DataTypes.INTEGER,
            allowNull: true,
            get() {
                const rawValue = this.getDataValue('numMatches');
                return rawValue ? matchList.length : 0;
            }
        },
        /**
         * List/array of study buddies swiped by user.
         * Contains all user model info (will change later)
         */
        studyBuddyList: {
            type: DataTypes.JSON,
            allowNull: true,
        },
        numStudyBuddies: {
            type: DataTypes.JSON,
            allowNull: true,
            get() {
                const rawValue = this.getDataValue('numMatches');
                return rawValue ? studyBuddyList.length : 0;
            }
        },

        /****************** PUBLIC INFO *****************/
        firstName: {
            type: DataTypes.STRING,
            defaultValue: "",
            allowNull: true,
        },
        /**
         * Limited to Male/Female (for now)
         * Make selector/drop-down options for this
         */
        gender: {
            type: DataTypes.STRING,
            defaultValue: "",
            allowNull: true,
        },
        /**
         * Limited to one major (for now)
         */
        major: {
            type: DataTypes.STRING,
            defaultValue: "",
            allowNull: true,
        },
        /**
         * Date format: [month/day/year]
         * Index 1 = month
         * Index 2 = day
         * Index 3 = year
         * 
         * Prop not shown on matches list; shown as age only
         */
        date: {
            type: DataTypes.JSON,
            allowNull: true,
        },
    });
    return Users;
};