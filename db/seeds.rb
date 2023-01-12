puts "Deleting previous records"

User.destroy_all

puts "Complete"

puts "Creating users..."

User.create(
    firstname: "Dana",
    lastname: "Barrett",
    email: "dbarrett@fakeaol.com",
    password: "orchestra",
    phone: 2125555500,
    address: "55 Central Park West",
    admin: false
)

User.create(
    firstname: "Michael",
    lastname: "Ensign",
    email: "manager@sedgewick-hotel.com",
    password: "ballroom",
    phone: 2125559876,
    address: "417 5th Avenue, New York, NY 10016",
    admin: false
)

puts "Complete"

puts "Seeding complete"