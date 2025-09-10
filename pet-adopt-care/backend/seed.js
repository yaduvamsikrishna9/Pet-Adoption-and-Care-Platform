require('dotenv').config();
const mongoose = require('mongoose');

const Category = require('./models/Category');
const Pet = require('./models/Pet');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB Connected for Seeding'))
  .catch(err => console.error(err));

const seedData = async () => {
  try {
    await Category.deleteMany({});
    await Pet.deleteMany({});

    

    const pets = [
      {
        name: 'Buddy',
        breed: 'Labrador',
        age: 3,
        gender: 'Male',
        image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16',
        
      },
      {
        name: 'Milo',
        breed: 'Siamese',
        age: 2,
        gender: 'Male',
        image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006',
       
      },
      {
        name: 'Chirpy',
        breed: 'Parakeet',
        age: 1,
        gender: 'Female',
        image: "https://michaelqpowell.com/wp-content/uploads/2014/04/parakeet2_blog.jpg",
        
      },
      {
        name: 'Ziggy',
        breed: 'Maine Coon',
        age: 1,
        gender: 'Female',
        image: 'https://www.mainecooncentral.com/wp-content/uploads/Mika-the-Maine-Coon-Cat-Playing-640cp.jpeg',
        
      },
      {
        name: 'Snowy',
        breed: 'Beagle',
        age: 4,
        gender: 'Male',
        image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987',
        
      },
      {
        name: 'Rocky',
        breed: 'Mixed',
        age: 5,
        gender: 'Male',
        image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a',
        
      }
    ];

    await Pet.insertMany(pets);
    console.log('✅ Seeded categories and pets!');
    process.exit();
  } catch (err) {
    console.error('❌ Seeding error:', err);
    process.exit(1);
  }
};

seedData();
