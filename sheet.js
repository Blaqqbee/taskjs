let bioData ={
    name :window.prompt("your name"),
  age :window.prompt("age"),
 favouriteclub :window.prompt("what is your favourite football team")}

if (bioData.age <18){alert('you must be 18 to access this site')}
else{alert(`Welcome ${bioData.name} ${bioData.age} ${bioData.favouriteclub}  to accuracy viewing center best of luck to your team`)}