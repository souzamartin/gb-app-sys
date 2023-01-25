puts "Deleting previous records..."

User.destroy_all
Entity.destroy_all
Job.destroy_all
Review.destroy_all

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

bob = User.create(
    firstname: "Bob",
    lastname: "Josephson",
    email: "jo-bob@fakemail.com",
    password: "password"
)

jane = User.create(
    firstname: "Jane",
    lastname: "Doe",
    email: "janedoe@fakemail.com",
    password: "password"
)

sally = User.create(
    firstname: "Sally",
    lastname: "Sanchez",
    email: "sally4th@fakemail.com",
    password: "password"
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

puts "Creating reviews..."

Review.create(
    user_id: mike.id,
    rating: 0,
    content: "Although these gentlemen admittedly did remove the offending apparition, their demeanor was absolutely atrocious, their fees were beyond outrageous, and they caused no small amount of disruption and propety damage. They were entirely lacking in discretion, and I seriously question whether removing the ghost was worth involving these men. I wish only that I could give them a negative rating."
)

Review.create(
    user_id: dana.id,
    rating: 2,
    content: "I am still waiting to hear back about whether my kitchen is haunted. Also, Dr. Venkman was completely unprofessional."
)

Review.create(
    user_id: sally.id,
    rating: 5,
    content: "These boys did such a great job and that Dr. Spengler is adorable."
)

Review.create(
    user_id: bob.id,
    rating: 3,
    content: "They got rid of the ghost but Venkman hit on my mom."
)

Review.create(
    user_id: jane.id,
    rating: 5,
    content: "Secretary was rude when I called, but Mr. Zeddemore can bust my ghosts any time."
)

puts "Complete\n "

puts "Seeding complete"