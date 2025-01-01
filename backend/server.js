const express = require("express");
const { requireAuth } = require("@clerk/clerk-sdk-node");
// const cors = require("cors");

const app = express();
// const cors = require("cors");
app.use(express.json());

app.get("/api/protected", requireAuth(), (req, res) => {
  const userId = req.auth.userId; // Unique Clerk user ID
  res.json({ message: `Hello, user ${userId}!` });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

const mongoose = require('mongoose');

const User = require('./models/User'); // Import User model
const Introduction = require('./models/Introduction'); // Import Introduction model
const Education = require('./models/Education'); // Import Education model
const Skills = require('./models/Skills'); // Import Skills model
const Experience = require('./models/Experience'); // Import Experience model
const Projects = require('./models/Projects'); // Import Projects model
const Achievements = require('./models/Achievements'); // Import Achievements model
const Positions = require('./models/Positions'); // Import Positions model

// // const newUser = new User({
// //   userID: 'user123',
// //   introduction: new Introduction({
// //     name: 'John Doe',
// //     degree: 'BTech',
// //     course: 'CSE',
// //     phone: '1234567890',
// //     instituteMail: 'john.doe@nit-surat.ac.in',
// //     linkedIn: 'https://linkedin.com/in/johndoe',
// //     gitHub: 'https://github.com/johndoe',
// //     profileLink: 'https://profile.com/johndoe',
// //     portfolioLink: 'https://portfolio.com/johndoe'
// //   }),
// //   education: new Education({
// //     cgpa: 9.5,
// //     institute: 'National Institute of Technology, Surat',
// //     graduationYear: 2024
// //   }),
// //   skills: new Skills({
// //     skills: [
// //       { heading: 'Programming', content: 'JavaScript, Python, Java' },
// //       { heading: 'Web Development', content: 'HTML, CSS, React.js' },
// //       { heading: 'Machine Learning', content: 'TensorFlow, Scikit-Learn' }
// //     ],
// //     coreSubjects: ['Data Structures', 'Algorithms', 'Discrete Mathematics', 'Operating Systems']
// //   }),
// //   experience: new Experience({
// //     experiences: [
// //       {
// //         name: 'ABC Corp',
// //         dateStart: new Date('2023-01-01'),
// //         dateEnd: new Date('2023-12-31'),
// //         roleName: 'Software Engineer',
// //         points: [
// //           'Developed web applications using React.js and Node.js.',
// //           'Collaborated with cross-functional teams to design and implement new features.',
// //           'Led the development of the company’s internal tool.'
// //         ]
// //       },
// //       {
// //         name: 'XYZ Ltd',
// //         dateStart: new Date('2022-05-01'),
// //         dateEnd: new Date('2022-12-31'),
// //         roleName: 'Intern',
// //         points: [
// //           'Assisted in the development of a Java-based application.',
// //           'Participated in code reviews and testing.',
// //           'Developed RESTful APIs using Spring Boot.'
// //         ]
// //       }
// //     ]
// //   }),
// //   projects: new Projects({
// //     projects: [
// //       {
// //         projectName: 'Personal Website',
// //         toolsUsed: ['HTML', 'CSS', 'JavaScript'],
// //         projectDate: new Date('2023-06-01'),
// //         projectRepoLink: 'https://github.com/johndoe/personal-website',
// //         points: [
// //           'Built a personal portfolio website to showcase projects and skills.',
// //           'Implemented responsive design using CSS Grid and Flexbox.',
// //           'Deployed the site using GitHub Pages.'
// //         ]
// //       },
// //       {
// //         projectName: 'Machine Learning Model',
// //         toolsUsed: ['Python', 'TensorFlow', 'Keras'],
// //         projectDate: new Date('2023-08-01'),
// //         projectRepoLink: 'https://github.com/johndoe/machine-learning-model',
// //         points: [
// //           'Trained a deep learning model to predict stock prices.',
// //           'Achieved 85% accuracy on test data.',
// //           'Utilized TensorFlow and Keras for model training and evaluation.'
// //         ]
// //       }
// //     ]
// //   }),
// //   achievements: new Achievements({
// //     achievements: [
// //       'Won 1st place in National Coding Competition 2023.',
// //       'Published a research paper on AI in the International Journal.',
// //       'Successfully completed Google’s ML Certificate Program.',
// //       'Won 2nd place in the Hackathon 2022 organized by NIT Surat.',
// //       'Received the Best Intern Award at XYZ Ltd.'
// //     ]
// //   }),
// //   positions: new Positions({
// //     responsibilities: [
// //       'President of the Computer Science Club, NIT Surat.',
// //       'Event Organizer for the Annual TechFest.',
// //       'Captain of the University’s Football Team.'
// //     ]
// //   })
// // });

// // Now you can save this `newUser` object to the MongoDB database
// // newUser.save()
// //   .then(savedUser => {
// //     console.log('New User saved:', savedUser);
// //   })
// //   .catch(err => {
// //     console.error('Error saving user:', err);
// //   });




