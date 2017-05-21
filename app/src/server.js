var express = require('express');
var path = require('path');
//var Pool= require('pg').Pool;
var crypto=require('crypto');
//var bodyParser=require('body-parser');
//var session = require('express-session');

var app = express();

//app.use(morgan('combined'));
//app.use(bodyParser.json());
//app.use(express.static('public'));
//app.use(bodyParser.urlencoded({ extended: false }));

function homepage(){
	var homepage =`
	<!DOCTYPE html>
<html>
<head>
   <title>State of the Art</title>
  <link href="/main.css" rel="stylesheet" />
  <link rel="icon" href="/logo.gif">
   <link href="/header.ejs">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>State-of-the-Art</title>
<link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script type="text/javascript" src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="/stylesheets/main.css" />
<script type = "text/javascript"  src = "/jquery/jquery-3.2.1.min.js"></script>
<script type = "text/javascript" src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>

<body class=scroll

<link href="/nav.ejs">

<div class="jumbotron text-center">
  <div id=header>
  <table><tr>
 <pre><td>                <a href="https://webwithjs.herokuapp.com/subjects">Index</a></td><td>                       <input class="form-control" placeholder="Search questions" name="srch-term" id="srch-term" type="text"></td>	<td> <a href="https://webwithjs.herokuapp.com/login"><span class="glyphicon glyphicon-user"></td>	<td></span>Login</a> <a href="https://webwithjs.herokuapp.com/signup"><span class="glyphicon glyphicon-user"></span>Sign Up</a></td>	<td>  <a href="https://webwithjs.herokuapp.com/login"><span class="glyphicon glyphicon-user"></span>Login</a></td> </pre>
  </table></tr>
<table>
<tr>
<td><a href="/" class="lang-logo">
      <img src="/logo.gif">
    </a></td>
    <td><span class=text-big  bold>&nbsp;&nbsp;&nbsp;State-of-the-Art</span></td><td><span class=text-medium>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;World's Knowledge Exchange</span></td>
 </tr>
 </table>
	
</div>
<div>
	<h5>Get the answers...you are looking for, and give answer to questions you know.&nbsp;&nbsp;Online community for knowledge & wisdom lovers.</h5>
	<h5>Sign Up is optional. Ask and answer as anoymous user...without any hesiations !</h5>
</div>

<div id=header>
	<h2>Welcome ! </h2>
 </div>
 <div class ="container">
     <!-- <div class ="row">-->
	<div id=content class=col-sm-4>
	
	       <h2>Things you can do</h2>
	       <ul>
	       <li>Share your views on whatever interests you...</li>
	       <li>Ask questions on whatever you want to know...</li>
	        <li>Answer to questions, so that others benefit ...</li>
	        <li>Spend your retired life spreading all you know...</li>
	        <li>Spend time helping others resolve their issues...</li>
	        <li>Explore things never known to you before...</li>
	        <li>At the end of the day, feel happy you helped others...!</li>
		<li>At the end of the day, feel happy you learnt something new...!</li>
	       
	       </ul>
	</div>
	<div id=content class=col-sm-4>
	      <h2> Recent questions </h2><br>
	      <ul>
	      <li><a href= "https://webwithjs.herokuapp.com/answersheet" class = hyperlinks>C++: why we can't define a function inside another function?</a></li>
	        <li><a href= "https://webwithjs.herokuapp.com/answersheet" class = hyperlinks>Science: Why do electrons don't fall into the nucleus?</a>  </li>
	        <li><a href= "https://webwithjs.herokuapp.com/answersheet" class = hyperlinks>General: How to check my power inverter is ok?</a></li>
	        <li><a href= "https://webwithjs.herokuapp.com/answersheet" class = hyperlinks>GK: Who was the father of Mumtaaz Mahal?</a></li>
	        <li><a href= "https://webwithjs.herokuapp.com/answersheet" class = hyperlinks>Maths: Which is the best book for senior school algebra?</a></li>
	        <li><a href= "https://webwithjs.herokuapp.com/answersheet" class = hyperlinks>Java:Where do we use multi-threading? ?</a></li>
		<li><a href= "https://webwithjs.herokuapp.com/answersheet" class = hyperlinks>Spiritual: How to tame our monkey minds?</a></li>
	       </ul>
	</div>

	<div id=content class=col-sm-4>
	<h2> Ask Question</h2><br>
	Select subject catagory
	<select type=number id=select_sub_category class=black>
            <option value="education">General</option>
            <option value="business">Art</option>
            <option value="game">Aviation</option>
            <option value="shopping">biology</option>
            <option value="travel">chemistry</option>
           <option value="tools">Medical Sciences</option>
           <option value="news">Engineering</option>
	   <option value="education">Science</option>
            <option value="business">Maths</option>
            <option value="game">GK</option>
            <option value="shopping">History</option>
            <option value="travel">Spirituality</option>
           <option value="communication">Computer Sc. & Engg</option>
	   <option value="communication">Programming languages</option>
	   <option value="communication">Computer programming</option>
        </select>  
	<br>
	Question title:
	<textarea id=title cols=25 rows =1 maxlength=500 class=black></textarea><br>
	Your question:
	<textarea id=question cols=25 rows =10 maxlength=500 class=black></textarea><br>
	<button id=btn_topic class=black>Submit</button>
	</div>
	
   </div>
	
	<div id=footer>
	Site Owner & developer: Ashutosh Singh, U.P., India<br>
    Contact information: <a href="mailto:webwithjs@gmail.com" class=hyperlinks>Send me a letter</a>
	</div>
	<script>
	var feedback_homepage = document.getElementById("feedback_homepage");
	var btn_feedback_homepage = document.getElementById("btn_feedback_homepage");
	
	btn_feedback_homepage.onclick= function(){
	
		
		btn_feedback_homepage.value="...........posting";
		
		btn_feedback_homepage.value=" Thanks !";
	}
	
	</script>
</div>		
</body>
</html>
	
	`;

	return homepage;
	}


//your routes here
app.get('/', function (req, res) {
    res.send(homepage());
});

app.get('/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, req.params.fileName));
});

app.listen(8080, function () {
  console.log('State-of-the-Art app listening on port 8080!');
});
