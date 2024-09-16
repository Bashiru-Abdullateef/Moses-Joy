
    var tabRow = rowNumber.value;
    var tabColumn = colNumber.value;
    function displayAll() {

        var sign = selectEval.value
        var table = "<table>"
            for (i = 1; i<=Number(colNumber.value); i++) {
                table += "<td>"
                for (j = 1; j <= Number(rowNumber.value); j++) {
                    var calcValue = (eval(i + sign + j))
                    if (calcValue % 1 !==0) {
                        var calcValue = Number(eval(i + sign + j)).toFixed(2)
                    }
                    
                    

                    table+= i + sign + j + "=" + calcValue +"<br>" + "<br>";
                }

                dispDiv.innerHTML = table
            }
    }

