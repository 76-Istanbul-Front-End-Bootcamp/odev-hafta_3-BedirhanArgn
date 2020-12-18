class Animal{
  constructor(name,imgUrl) {
    this.name=name;
    this.imgUrl=imgUrl;
  }
  putInTheDocument(){
    var petsTable = document.getElementById("petsTable");
    var petTR = document.createElement("tr");
  
    var petNameTD = document.createElement("td");
    petNameTD.textContent = this.name;
    petTR.appendChild(petNameTD);
  
    var petLegsTD = document.createElement("td");
    petLegsTD.textContent = this.legs;
    petTR.appendChild(petLegsTD);
  
    var petActionTD = document.createElement("td");
    var petActionTDButton = document.createElement("button");
    
    petActionTDButton.textContent = this.actionText;
    petActionTD.appendChild(petActionTDButton);
    petTR.appendChild(petActionTD);
		
    petActionTDButton.onclick = this.action.bind(this);
    petsTable.querySelector("tbody").appendChild(petTR)
  }
  action(){
    document.getElementById(this.actionSoundName).play();
  }
}

class Monkey extends Animal {
    constructor(name,imgUrl) {
    super(name,imgUrl);
	this.legs=2;
	this.actionText='Scream';
	this.actionSoundName='scream';
  }
}

class Cat extends Animal {
  constructor(name,imgUrl) {
	super(name,imgUrl);
    this.legs=4;
	this.actionText='Meow';
	this.actionSoundName='meow';
  }
}

var Mila = new Cat("Mila",'https://i.pinimg.com/originals/fc/08/f6/fc08f6152f4ee68cb93894dea7c2489e.jpg');
Mila.putInTheDocument();

var Charlie = new Monkey("Charlie",'https://www.gannett-cdn.com/-mm-/c2f0dfc51814e96f11f08557958f2c43934ba8b2/c=0-340-3261-2182/local/-/media/2017/07/19/USATODAY/USATODAY/636360710283441844-macaque1.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp');
Charlie.putInTheDocument();

var tableRows = document.getElementsByTagName('tr');

 for (var i = 0; i < tableRows.length; i += 1) {
      tableRows[i].addEventListener('mouseover', function(item){
		this.style.backgroundColor = "green";
		this.style.color="white";
	}); 
	tableRows[i].addEventListener("mouseout", function() {
      this.style.backgroundColor = "white";
	  this.style.color="black";
    });
	var imgEl=document.createElement("img");
	tds = tableRows[i].getElementsByTagName("td");
    for (var n=0; n<tds.length;n++)
    {
		tds[n].addEventListener('click',function(event){	
				var body = document.querySelector("body");
				if(this.parentElement.rowIndex==1) {
					imgEl.setAttribute("src", Mila.imgUrl);
				}
				if(this.parentElement.rowIndex==2) {
					imgEl.setAttribute("src", Charlie.imgUrl);
				}
				imgEl.setAttribute("width", "304");
				imgEl.setAttribute("height", "228");	
				body.appendChild(imgEl);
	});
	}
}
var btn=document.getElementsByTagName("button");
	for(var i=0;i<btn.length;i++) {
		btn[i].addEventListener('click',function(e){
		e.stopPropagation();
	});
}
 
   
   






