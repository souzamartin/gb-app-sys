puts "Deleting previous records"

User.destroy_all
Entity.destroy_all

puts "Complete"

puts "Creating users..."

ray = User.create(
    firstname: "Raymond",
    lastname: "Stantz",
    email: "rstantz@parapsych.columbia.edu",
    password: "staypuft",
    phone: 5552386,
    address: "14 N Moore St, Tribeca",
    admin: true
)

dana = User.create(
    firstname: "Dana",
    lastname: "Barrett",
    email: "dana@fakeaol.com",
    password: "orchestra",
    phone: 2125555500,
    address: "55 Central Park West",
)

mike = User.create(
    firstname: "Michael",
    lastname: "Ensign",
    email: "manager@sedgewick-hotel.com",
    password: "ballroom",
    phone: 2125559876,
    address: "417 5th Avenue, New York, NY 10016",
)

puts "Complete"

puts "Creating paranormal entities..."

slimer = Entity.create(
    name: "Slimer",
    classification: "Class 5 full roaming vapor",
    description: "Ugly little spud",
    notes: "Focused, non-terminal repeating phantasm",
    image: "https://static.wikia.nocookie.net/ghostbusters/images/8/80/SlimergbBR002.png"
)

zuul = Entity.create(
    name: "Zuul",
    description: "Terror dog",
    notes: "Gatekeeper of Gozer",
    image: "https://static.wikia.nocookie.net/monster/images/9/99/Terror_dog_zuul.jpg"
)

vinz = Entity.create(
    name: "Vinz Clortho",
    description: "Terror dog",
    notes: "Keymaster of Gozer",
    image: "https://static.wikia.nocookie.net/ghostbusters/images/9/92/GB1film1999chapter26sc033.png"
)

eleanor = Entity.create(
    name: "Library Ghost",
    classification: "Class 4",
    description: "Ghostly librarian, shushes patrons rudely",
    notes: "Free-roaming, vaporous, full-torso apparition"
)

puts "Complete"

puts "Creating jobs..."

j0 = Job.create(
    location: "New York Public Library, 5th Av.",
    user_id: ray.id
)
JobEntity.create(job_id: j0.id, entity_id: eleanor.id)

j1 = Job.create(
    location: "55 Central Park West",
    notes: "Saw something in the fridge",
    user_id: dana.id
)
JobEntity.create(job_id: j1.id, entity_id: zuul.id)

j2 = Job.create(
    location: "Sedgewick Hotel",
    notes: "12th floor",
    user_id: mike.id
)
JobEntity.create(job_id: j2.id, entity_id: slimer.id)

puts "Complete"

puts "Seeding complete"