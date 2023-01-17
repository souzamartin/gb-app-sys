puts "Deleting previous records..."

User.destroy_all
Entity.destroy_all
Job.destroy_all

puts "Complete\n "

puts "Creating users..."

egon = User.create(
    firstname: "Egon",
    lastname: "Spengler",
    email: "espengler@parapsych.columbia.edu",
    password: "bigtwinkie",
    phone: 2125552368,
    address: "14 N Moore St, Tribeca",
    admin: true
)

ray = User.create(
    firstname: "Raymond",
    lastname: "Stantz",
    email: "ray@rays-occult.biz",
    password: "staypuft",
    phone: 2125552368,
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

puts "Complete\n "

puts "Creating paranormal entities..."

slimer = Entity.create!(
    name: "Slimer",
    classification: "Class 5 full roaming vapor",
    description: "Ugly little spud.",
    notes: "Focused, non-terminal, repeating phantasm",
    image: {
            io: File.open("db/seed_images/slimer.png"),
            filename: "slimer.png",
            content_type: "image/png"
        }
)

zuul = Entity.create(
    name: "Zuul",
    description: "Terror dog.",
    notes: "Gatekeeper of Gozer",
    image: {
        io: File.open("db/seed_images/zuul.jpg"),
        filename: "zuul.jpg",
        content_type: "image/jpeg"
    }
)

vinz = Entity.create(
    name: "Vinz Clortho",
    description: "Terror dog.",
    notes: "Keymaster of Gozer",
    image: {
        io: File.open("db/seed_images/vinz.png"),
        filename: "vinz.png",
        content_type: "image/png"
    }
)

eleanor = Entity.create(
    name: "Library Ghost",
    classification: "Class 4",
    description: "Ghostly librarian, shushes patrons rudely.",
    notes: "Free-roaming, vaporous, full-torso apparition",
    image: {
        io: File.open("db/seed_images/library.jpg"),
        filename: "library.jpg",
        content_type: "image/jpeg"
    }
)

kymberly = Entity.create(
    name: "Dream Ghost",
    classification: "Class 4 anchored noncorporeal",
    description: "An unusually friendly ghost.",
    image: {
        io: File.open("db/seed_images/dream.png"),
        filename: "dream.png",
        content_type: "image/png"
    }
)

cabby = Entity.create(
    name: "Zombie Taxi Driver",
    classification: "Class 3 anonymous haunting",
    description: "Possesses and transmogrifies cabbies, making their
        driving more dangerous and erratic than usual.",
    image: {
        io: File.open("db/seed_images/taxi.png"),
        filename: "taxi.png",
        content_type: "image/png"
    }
)

subway = Entity.create(
    name: "Subway Ghost",
    description: "Subterranean specter. Passes right through every turnstile.",
    notes: "Wanted for fare evasion",
    image: {
        io: File.open("db/seed_images/subway.png"),
        filename: "subway.png",
        content_type: "image/png"
    }
)

puts "Complete\n "

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

j3 = Job.create(
    location: "Rooftop, 55 Central Park West",
    notes: "Minions appear to be summoning Gozer the Destructor",
    user_id: ray.id
)
JobEntity.create(job_id: j3.id, entity_id: zuul.id)
JobEntity.create(job_id: j3.id, entity_id: vinz.id)

puts "Complete\n "

puts "Seeding complete"