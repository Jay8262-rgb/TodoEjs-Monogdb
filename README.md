
<body>

<h1 align="center">📝 MERN Assignment 8</h1>
<h3 align="center">To-Do List Web Application</h3>
<p align="center"><b> devloped by :</b> Jay keshhri</p>

<hr />

<h2>📌 Project Overview</h2>
<p>
  This project is a <b>To-Do List Web Application</b> built using
  <b>EJS, Node.js, Express.js, and MongoDB</b>. It helps users manage their
  daily tasks efficiently by allowing them to <b>add, edit, and delete</b> tasks.
</p>
<p>
  All tasks are stored permanently in a <b>MongoDB Atlas</b> database, so data
  is not lost after refreshing the page.
</p>

<hr />

<h2>🎯 Objective</h2>
<ul>
  <li>Provide an easy way to manage daily tasks</li>
  <li>Create a clean and interactive user interface</li>
  <li>Store task data securely using MongoDB</li>
  <li>Use correct HTTP methods for CRUD operations</li>
</ul>

<hr />

<h2>🛠 Technology Stack</h2>
<ul>
  <li><b>Node.js</b> – Server-side runtime environment</li>
  <li><b>Express.js</b> – Backend framework</li>
  <li><b>EJS</b> – Dynamic HTML templating</li>
  <li><b>MongoDB Atlas</b> – Cloud database</li>
  <li><b>Render</b> – Deployment platform</li>
</ul>

<hr />

<h2>✨ Features</h2>

<h3>✅ Task Creation</h3>
<ul>
  <li>Add new tasks easily</li>
  <li>Task is <b>not created</b> if the title is empty</li>
  <li>Alert message shown when input is empty</li>
</ul>

<h3>✏ Task Editing</h3>
<ul>
  <li>Edit existing tasks</li>
  <li>Update task priority</li>
  <li>Pencil icon used for edit option</li>
  <li>Alert message: <b>Task Updated Successfully</b></li>
</ul>

<h3>🗑 Task Deletion</h3>
<ul>
  <li>Delete tasks individually</li>
  <li>Trash icon used for delete option</li>
  <li>Alert message: <b>Task Deleted Successfully</b></li>
</ul>

<h3>🚦 Task Priority</h3>
<ul>
  <li>Urgent</li>
  <li>High</li>
  <li>Low</li>
</ul>

<hr />

<h2>🔁 HTTP Methods Used</h2>
<table border="1" cellpadding="8" cellspacing="0">
  <tr>
    <th>Operation</th>
    <th>HTTP Method</th>
  </tr>
  <tr>
    <td>View Tasks</td>
    <td>GET</td>
  </tr>
  <tr>
    <td>Add Task</td>
    <td>POST</td>
  </tr>
  <tr>
    <td>Update Task</td>
    <td>PUT</td>
  </tr>
  <tr>
    <td>Delete Task</td>
    <td>DELETE</td>
  </tr>
</table>

<hr />

<h2>🗃 Database Structure</h2>
<p>MongoDB collection name: <b>tasks</b></p>
<pre>
{
  "title": "Complete MERN Assignment",
  "priority": "Urgent"
}
</pre>

<hr />

<h2>📂 Project Structure</h2>
<pre>
project-folder/
│
├── views/
│   └── index.ejs
├── public/
│   └── css/
├── models/
│   └── Task.js
├── index.js
├── package.json
└── README.html
</pre>

<hr />

<h2>⚙ How to Run the Project Locally</h2>
<ol>
  <li>Clone the repository</li>
</ol>
<pre>git clone &lt;your-github-repo-link&gt;</pre>

<ol start="2">
  <li>Go to the project folder</li>
</ol>
<pre>cd project-folder</pre>

<ol start="3">
  <li>Install dependencies</li>
</ol>
<pre>npm install</pre>

<ol start="4">
  <li>Install Mongodb</li>
</ol>
<pre>Install Mongodb shell</pre>

<ol start="5">
  <li>Change in index.js code<b> mongoose.connect("mongodb+srv://jk825405jay_db_user:Qp_vqU5QDGisaCR@cluster0.qduspak.mongodb.net/?appName=Cluster0") to mongoose.connect(" mongodb://127.0.0.1:27017/todo")</b> file and add MongoDB URL</li>
</ol>
<pre>your mongo are connected</pre>

<ol start="6">
  <li>Start the server</li>
</ol>
<pre>node index.js</pre>

<ol start="6">
  <li>Open browser</li>
</ol>
<pre>http://localhost:3000</pre>

<hr />

<h2>🌍 Deployment</h2>
<ul>
  <li>Deployed on <b>Render</b></li>
  <li>Main server file: <b>index.js</b></li>
</ul>
<p><b>Live Project Link:</b> Add your Render deployment link here</p>

<hr />

<h2>📤 Submission Details</h2>
<ul>
  <li>GitHub Repository Link – Submitted</li>
  <li>Render Deployment Link – Added</li>
  <li>Database – MongoDB Atlas</li>
</ul>

<hr />



<p align="center">✨ Thank you for reviewing this project ✨</p>

</body>

<h3>Deployment link are here 👇</h3>
<h4>https://todolistapp-kfh5.onrender.com/ </h4>
