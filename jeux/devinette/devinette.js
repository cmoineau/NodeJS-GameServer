console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

//Déclaration de variable

var ans=-1;		//Variable pour stocker la réponse, je ,l'initalise à -1 pour rentrer dans ma boucle while.
var nb_essais=0;		//Variable comptant le nombre d'essais.

var ESSAIS_MAX=6;		//Variable contenant le nombre maximum d'essais possible faire.

//Début du programme.
alert("Bienvenue dans ce jeu de devinette, tu dois deviner le nombre mystère qui est compris entre 1 et 100.\nBon courage ! :D");
while(ans!=solution && nb_essais!=ESSAIS_MAX+1)
{
	console.log("Essayez de deviner qu\'elle est le nombre mystère !\n Il vous reste " + String(ESSAIS_MAX-nb_essais) + " essais");
	ans=Number(prompt("Essayez de deviner qu\'elle est le nombre mystère !\n Il vous reste " + String(ESSAIS_MAX-nb_essais) + " essais"));

	if (isNaN(ans))
	{
		console.log("Je vous ai demandé un nombre mystère !\n Bon on va recommencer ...");
		alert("Je vous ai demandé un nombre mystère !\n Bon on va recommencer ...");
	}
	else
	{
		nb_essais++;
		if (solution>ans)
		{
			console.log(String(ans) + " est trop petit");
			alert(String(ans) + " est trop petit");
		}
		else
		{
			console.log(String(ans) + " est trop grand")
			alert(String(ans) + " est trop grand");
		}
	}
}
if(nb_essais!=ESSAIS_MAX+1)
{
	console.log("Bravo ! la solution était : " + String(solution))
	alert("Bravo ! la solution était :" + String(solution));
}
else
{
	console.log("Désolé tu as perdu ! la solution était : "+ String(solution))
	alert("Désolé tu as perdu ! la solution était :"+ String(solution));

}