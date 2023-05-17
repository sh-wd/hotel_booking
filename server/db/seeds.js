use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        guestName: "Andy",
        email: "andy@live.com",
        checkedIn: true
    },
    {
        guestName: "Scott",
        email: "scott@duck.com",
        checkedIn: false
    },
    {
        guestName: "Beth",
        email: "beth@isbeautifulandgreatatcoding.com",
        checkedIn: true
    }
]);