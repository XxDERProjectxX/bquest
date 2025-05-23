function generateCards(boardType){
    var easy = objectiveData.filter(e => e.difficulty == 1).map(x => x.name);
    var med = objectiveData.filter(e => e.difficulty == 2).map(x => x.name);
    var hard = objectiveData.filter(e => e.difficulty == 3).map(x => x.name);
    var vhard = objectiveData.filter(e => e.difficulty == 4).map(x => x.name);
    
    var rank1 = ["Open West Gate", drawCard(easy), "START", drawCard(easy), "Open Orchard Gate"];
    var rank2 = [drawCard(easy), drawCard(easy), drawCard(med), drawCard(easy), drawCard(easy)];   
    var rank3 = [drawCard(med),drawCard(med),drawCard(med),drawCard(med),drawCard(med)];
    var rank4 = [drawCard(med),drawCard(med),drawCard(med),drawCard(med),drawCard(med)];
    var rank5 = [drawCard(med),drawCard(med),drawCard(hard),drawCard(med),drawCard(med)];
    var rank6 = [drawCard(med),drawCard(hard),drawCard(hard),drawCard(hard),drawCard(med)];
    var rank7 = [drawCard(hard),drawCard(hard),drawCard(hard),drawCard(hard),drawCard(hard)];
    var rank8 = [drawCard(hard),drawCard(hard),drawCard(vhard),drawCard(hard),drawCard(hard)];
    var rank9 = [drawCard(hard),drawCard(vhard),"GOAL",drawCard(vhard),drawCard(hard)];

    if(boardType == "bingosync"){
        var rank10 = ["N/A", "N/A", "N/A", "N/A", "N/A"];        
        var board1 = rank5.concat(rank4, rank3, rank2, rank1);
        var board2 = rank10.concat(rank9, rank8, rank7, rank6);

        var output1 = makeBingoSyncCard(board1);
        var output2 = makeBingoSyncCard(board2);
        var output = [output1, output2];
    }
    else if(boardType == "bquest"){
        var board = rank9.concat(rank8, rank7, rank6, rank5, rank4, rank3, rank2, rank1);
        var output = makeBingoSyncCard(board);
    }

    return output;
}

function drawCard(stack){
    var randomSpot = Math.floor(Math.random() * stack.length);
    var selectedCard = stack[randomSpot];
    stack.splice(randomSpot, 1);
    return selectedCard;
}

function makeBingoSyncCard(stack){
    var tempArray = [];
    
    stack.forEach(x => {
        var tempSquare = '{"name": "' + x + '"}';
        tempArray.push(tempSquare);
    });
    
    var output = '[';
    output = output + tempArray.join(",");
    output = output + ']';
    
    return output;
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
