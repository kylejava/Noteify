# Noteify

## Inspiration

For my project, I wanted to tackle a problem that not only affected me, but to a lot of people in the world. I started thinking about how I used to suffer from imposter syndrome, and my way of overcoming this mentality would be reminding myself of all the amazing things I have worked so hard for and thinking in a more positive manner. This led me to thinking in a more broader scope outside of people who faced with imposter syndrome. I did a lot of research on how thinking more positively affects a person's mental health. With the increase of depression and other various mental illnesses increasing, it is important to take this matter seriously. There is a lot of research on how positive mindset and way of thinking can improve one's mental and physical health, leading to a more healthier and better lifestyle. While it may seem easy to tell people who suffer from mental illnesses to have a more positive mindset, many people struggle with this. One way to start thinking more positively is to remind yourself of your own accomplishments, the people around you who support you, the dreams you want to achieve, and etc. What better way to remind yourself than by using notes!

## What it does

Noteify is a website that users can use to start getting into a more positive mindset and improve their own mental health. Users can register for an account on Noteify and be able to use the platform. The user will be greeted with a notepad where they can create new notes, as well as five jars, each representing for various events and feelings. Once the user chooses to create a note they will click on the notepad which will take them to an empty note where they can write a note for themselves. This note can either be a funny old story, an accomplishment they are proud of, anything they want to write. Once the user creates the note, they have the option to put it in one of the jars. If a user wants to open one of the jars they can click on one of them and be greeted with a random note that the user has submitted from that specific jar, refreshing the page brings up another note the user has submitted in the past.

## How I built it

The UI/UX of the website was built using HTML, CSS, Javascript, and Bootstrap. I was able to host each webpage and assign routes using Python and the Flask Framework. For the cloud I used Google's Firebase and Google Cloud Platform. In order to register users and have them sign in I used the Firebase Authentication, this way people could have their own accounts and own set of notes. In order to store user input, data, and notes I used the Google Firebase Realtime Database. For hosting it onto the web I deployed the app using the Google App Engine.

## Challenges I ran into

This was my first time using the Realtime Database provided by Firebase. I had some experience in the past using a NoSQL database like MongoDB, but the jump from using MongoDB to the Realtime Database was hard. It took me a long time reading through documentation, watching videos, and testing to figure out how to even add things into the database. I wanted to have each user create their own set of notes under different categories, so I had to learn how to work with the routes in the database. Other than the Realtime Database, working with the authentication was also a challenge. I had built simple log in and sign up pages with the Firebase Authentication before, but I had to figure out how I can make the authentication and database work together.

## Accomplishments that I'm proud of

As mentioned before this was my first time using the Realtime Database from Firebase, and I am really proud that I was able to implement it into my project. I am very pleased with how it worked well with my website and that I was able to allow user's to add their own items in the database. I am also pleased with the design of the website and the "theme" I came up with. I thought the user of notes and putting them in jars was a great idea to me.

## What I learned

How to implement the Realtime Database and Firebase authentication. A lot more CSS and Javascript. How to deploy a Flask app to App Engine.

## What's next for Noteify

Noteify is a project that I want to work on in the future, because I believe that it can truly affect a person's mental health in a positive way. I want to implement a way for users to add new jars and delete jars they do not want. I also want to implement the ability to showcase all the notes in a single jar, as of right now it only shows  one random note in each jar. Another thing I would like to implement is a way to delete a note. Another cool idea that I thought would be amazing would be a way to send notes to other people, as a way of uplifting them and supporting them.

### Try It Out!
https://noteify-3b3d3.uc.r.appspot.com/signin
