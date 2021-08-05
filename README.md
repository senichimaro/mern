# MERN Proyect
This is the first kata about a MERN CRUD without login & authorization. It consist of one page web app where to create, read, update and delete products. It will use Bulma React Framework to a plaine UI/UX.

# Packages
* MongoDB interfaced by Mongoose
* Express Web Server Framework
* React Framework
* NodeJs based
* Bulma


# Proyect Structure
~~~
/project
|
|_/back-end/
|   |_package.json
|

~~~




# 1. Server with Express
Let's isolate all our Back-End configuration in a folder called `/backEnd`. We'll initiate npm (`npm init -y` > `package.json`) to registered our dependencies.

Let's create a `server.js` where to build our server, a `.env` file to save our port, and a `config.js`.

This file will be an object and will be our first module to export, keeping all our config variables together to use their properties when necesary.

## Packages
* express : server framework
* standard : tests
* nodemon : hot reload
* dotenv : .dontenv accessible



# 2. Mongoose to interface MongoDB
Let's isolate all our database configuration in a folder called `/db`, and `mongodb.js` file to connect with MongoDB.

The connection will be setup by an async function.

###### Important
In our connection to MongoDB we use the Default Port (27017), this is not recommended in Production because its a well known default port that expose our database to a vulnerability.

## Packages
* mongoose : MongoDB framework







# Multiple GitHub accounts on the same machine

1. rsa key

~~~
# Generating a SSH key
ssh-keygen -t rsa -C "someone@email.com" -f "funnyName"

# enable ssh-agent
eval "$(ssh-agent -s)"

# Register with ssh-agent the new SSH Keys
ssh-add ~/.ssh/id_rsa

# Adding SSH key to GitHub -> Settings -> SSH and GPG keys
cat id_rsa.pub
~~~

2. `config` file

We can configure ssh to send a use a specific encryption key depending on the host. It's possible to have several aliases for the same hostname and create a reference to diferents users with it own authorization.

Create a `config` file in  `~/.ssh/` :
~~~
# Default GitHub
Host user1
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa_user1

# Professional github alias
Host user2
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa_user2
~~~

3. Local repo `config` file in `./project-name/.git/config`

The configuration information overrides each other. The global .gitconfig where you already configured your SSH Keys/User Information is overriden by The global .gitconfig of a local gitconfig - the file "config" in your .git folder..

A `./project-name/.git/config` will be more or less like this example:
~~~
[core]
	repositoryformatversion = 0
  (more,more&more...)
[remote "origin"]
	url = git@github.com:user2/web-project.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[user]
	name = user2
	email = user2@gmail.com
~~~

This is target line:
~~~
url = git@github.com:user2/web-project.git
~~~

It must be changed by the `Host` alias from our `config` files like this:
~~~
url = git@user2:user2/web-project.git
~~~



//
