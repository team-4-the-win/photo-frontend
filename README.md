# Photonix
### Frontend

#### David Murray Raimon || Soo Kim || Jenny Godley || Sarah Zawatsky


Photonix is an image hosting website to store users' images.  Users can sign up, log in, change their password, and log out.  Upon signing in, users will see a gallery of their uploaded images.  If an image is clicked, a modal will show and options to edit or delete the photo will be provided. Metadata like date created, date modified, owner, and tags.  Tags and image names are modifiable data. Images are stored on AWS.

Registered users may create, see, update, and delete their own images.  They also may see and download images that others have uploaded.


#### Deployed Frontend App:
https://team-4-the-win.github.io/photo-frontend/

#### Frontend Repo:
https://github.com/team-4-the-win/photo-frontend

#### Backend Repo:
https://github.com/team-4-the-win/backend

#### Backend:
https://blooming-cliffs-96004.herokuapp.com


#### Technologies Used:
- JavaScript
- HTML
- CSS
- Sass
- Bootstrap
- jQuery
- handlebars
- express
- mongoDB
- AWS
- Pure CSS slideshow https://www.cssscript.com/css-only-crossfading-background-slideshow/

#### Unsolved Problems / Stretch Goal
- Include themes for users to pick how they'd like to display their images.
- Make photos searchable by tag
- Upload multiple files

#### Planning & Process

Once we finished our backend, we were able to start builind our front end.  We started by listing features that were required to reach MVP. Jenny started by creating the `HTML` structure.  Soo worked on `authorization` features, Sarah worked on `image-upload` features, and Dave worked on  `handlebars`.  As we wrapped up our respective tasks, we tag-teamed the image-upload events. The following day, we looked at the reset of the features we needed and divided-and-conquered once more. We spent much of our final project day styling and creating a more intuitive GUI. Communication was a priority as we frequently found ourselves needing to work in the same file at the same time. To solve this issue, we would work in very small bursts and then share code via slack with one group member who would push the changes from one file.

#### MVP User Stories
- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to upload an image to AWS.
- As a signed in user, I would like to update the meta-data of my image on AWS.
- As a signed in user, I would like to see the name of all images on AWS.
- As a signed in user, I would like to see the thumbnail of all images on AWS.
- As a signed in user, I would like to delete the reference of my image from the database.
- As a signed in user, I would like to see the following meta-data for any image:
  - date created/uploaded
  - date modified
  - owner (user who uploaded the image)
  - tag

#### Wireframes
[Imgur](https://i.imgur.com/0blVqJS.jpg)
